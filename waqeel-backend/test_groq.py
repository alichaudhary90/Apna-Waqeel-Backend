"""
Quick test script to verify Groq API integration
"""
from groq import Groq
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Initialize Groq client
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# Test query
print("Testing Groq API integration...")
print("-" * 50)

response = client.chat.completions.create(
    model="llama-3.1-8b-instant",
    messages=[
        {"role": "system", "content": "You are a helpful legal assistant."},
        {"role": "user", "content": "What is theft according to Pakistan Penal Code?"}
    ],
    temperature=0.3,
    max_tokens=1024
)

print("Response from Groq AI:")
print(response.choices[0].message.content)
print("-" * 50)
print("✅ Groq API integration successful!")
