import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)


os.environ["GOOGLE_API_KEY"] = "ТВОЙ_КЛЮЧ"
VECTOR_DB_DIR = "./chroma_db"
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vectorstore = Chroma(persist_directory=VECTOR_DB_DIR, embedding_function=embeddings)
llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash", temperature=0.3)

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
    return_source_documents=True
)

class Question(BaseModel):
    text: str

@app.post("/ask")
async def ask(question: Question):
    result = qa_chain.invoke({"query": question.text})
    
    sources = list(set([doc.metadata.get('source', 'unknown') for doc in result['source_documents']]))
    
    return {
        "answer": result['result'],
        "sources": sources
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
