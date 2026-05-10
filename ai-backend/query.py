import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA

load_dotenv()

api_key = os.getenv("GOOGLE_API_KEY")

VECTOR_DB_DIR = "./chroma_db"
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

if not os.path.exists(VECTOR_DB_DIR):
    print("Ошибка: папка chroma_db не найдена. Сначала запустите ingest.py!")
    exit()

vectorstore = Chroma(persist_directory=VECTOR_DB_DIR, embedding_function=embeddings)

llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash",
    google_api_key=api_key,
    temperature=0.3
)

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    chain_type="stuff",
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
    return_source_documents=True
)

def ask_question(query):
    try:
        result = qa_chain.invoke({"query": query})
        print(f"\n Ответ: {result['result']}")

        sources = set([os.path.basename(doc.metadata.get('source', 'unknown')) for doc in result['source_documents']])
        print(f"\n Источники: {', '.join(sources)}")
    except Exception as e:
        print(f"Произошла ошибка при запросе: {e}")

if __name__ == "__main__":
    user_query = input("Задай вопрос базе знаний: ")
    if user_query.strip():
        ask_question(user_query)
