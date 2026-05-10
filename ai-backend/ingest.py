import os
from langchain_community.document_loaders import DirectoryLoader, UnstructuredMarkdownLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma

SOURCE_DIR = "../docs" 
VECTOR_DB_DIR = "./chroma_db"

def build_index():
    loader = DirectoryLoader(SOURCE_DIR, glob="**/*.md", loader_cls=UnstructuredMarkdownLoader)
    docs = loader.load()
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=700, chunk_overlap=100)
    chunks = text_splitter.split_documents(docs)
    
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    
    vectorstore = Chroma.from_documents(
        documents=chunks, 
        embedding=embeddings, 
        persist_directory=VECTOR_DB_DIR
    )
    print(f"Обработано {len(chunks)} фрагментов.")

if __name__ == "__main__":
    build_index()
