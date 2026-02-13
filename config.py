import os
from dotenv import load_dotenv

load_dotenv()  # Load .env file if present

# Groq API Configuration (Primary)
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

# Alternative API Keys
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
