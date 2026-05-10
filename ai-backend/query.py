import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA

os.environ["GOOGLE_API_KEY"] = "AIzaSyDJbh8CafxCq6Lx6SdLZULy_qP29GShhWM"

VECTOR_DB_DIR = "./chroma_db"
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vectorstore = Chroma(persist_directory=VECTOR_DB_DIR, embedding_function=embeddings)

llm = ChatGoogleGenerativeAI(model="gemini-1.5-flash", temperature=0.3)

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
    return_source_documents=True
)

def ask_question(query):
    result = qa_chain.invoke({"query": query})
    print(f"\n Ответ: {result['result']}")

    sources = set([doc.metadata.get('source') for doc in result['source_documents']])
    print(f"\n Источники: {', '.join(sources)}")

if __name__ == "__main__":
    user_query = input("Задай вопрос базе знаний: ")
    ask_question(user_query)
