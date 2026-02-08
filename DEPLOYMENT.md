# Deployment Guide - Waqeel Project

This guide explains how to deploy the Waqeel project with proper environment variable configuration for production environments.

---

## 📋 Table of Contents

1. [Environment Variables Overview](#environment-variables-overview)
2. [Local Development Setup](#local-development-setup)
3. [Backend Deployment (Railway/Render)](#backend-deployment)
4. [Frontend Deployment (Vercel)](#frontend-deployment-vercel)
5. [Frontend Deployment (Netlify)](#frontend-deployment-netlify)
6. [Security Best Practices](#security-best-practices)

---

## Environment Variables Overview

### Backend Environment Variables

The backend requires the following environment variables (see `.env.example`):

| Variable | Description | Required |
|----------|-------------|----------|
| `GROQ_API_KEY` | Groq AI API key for text generation | ✅ Yes |
| `COHERE_API_KEY` | Cohere API key for embeddings (optional) | ⚠️ Optional |
| `GEMINI_API_KEY` | Google Gemini API key (optional) | ⚠️ Optional |

### Frontend Environment Variables

The frontend requires the following environment variables (see `.env.example`):

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `VITE_API_URL` | Backend API URL | ✅ Yes | `https://your-backend.railway.app` |

> [!IMPORTANT]
> Frontend environment variables in Vite **must** be prefixed with `VITE_` to be exposed to the client-side code.

---

## Local Development Setup

### 1. Backend Setup

```bash
cd "d:/5 semester/AI/apna waqeel/apna waqeel/waqeel-backend"

# Copy the example file
cp .env.example .env

# Edit .env and add your actual API keys
# GROQ_API_KEY=gsk_your_actual_key_here
# COHERE_API_KEY=your_cohere_key_here
# GEMINI_API_KEY=your_gemini_key_here

# Install dependencies
pip install -r requirements.txt

# Run the backend
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### 2. Frontend Setup

```bash
cd "d:/5 semester/AI/apna waqeel/apna waqeel/waqeel-frontend"

# Copy the example file
cp .env.example .env

# Edit .env and set the backend URL
# VITE_API_URL=http://127.0.0.1:8000

# Install dependencies
npm install

# Run the frontend
npm run dev
```

---

## Backend Deployment

### Option 1: Railway

1. **Create a new project** on [Railway](https://railway.app/)

2. **Connect your GitHub repository** or deploy from CLI

3. **Add environment variables** in Railway dashboard:
   - Go to your service → Variables tab
   - Add the following variables:
     ```
     GROQ_API_KEY=gsk_your_actual_key_here
     COHERE_API_KEY=your_cohere_key_here
     GEMINI_API_KEY=your_gemini_key_here
     ```

4. **Configure the start command**:
   - Railway should auto-detect Python
   - If needed, set start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

5. **Deploy**:
   - Railway will automatically deploy on push to main branch
   - Note your deployment URL (e.g., `https://your-app.railway.app`)

### Option 2: Render

1. **Create a new Web Service** on [Render](https://render.com/)

2. **Connect your repository**

3. **Configure the service**:
   - **Environment**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`

4. **Add environment variables**:
   - Go to Environment tab
   - Add:
     ```
     GROQ_API_KEY=gsk_your_actual_key_here
     COHERE_API_KEY=your_cohere_key_here
     GEMINI_API_KEY=your_gemini_key_here
     ```

5. **Deploy**:
   - Click "Create Web Service"
   - Note your deployment URL (e.g., `https://your-app.onrender.com`)

---

## Frontend Deployment (Vercel)

### Step-by-Step Guide

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [Vercel](https://vercel.com/)
   - Click "Add New Project"
   - Import your GitHub repository
   - Select the `waqeel-frontend` directory as the root

3. **Configure Build Settings**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Add Environment Variables**:
   - In the Vercel dashboard, go to Settings → Environment Variables
   - Add the following variable:
     ```
     VITE_API_URL=https://your-backend.railway.app
     ```
   - **Important**: Use your actual backend URL from Railway/Render

5. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your frontend
   - Your app will be available at `https://your-app.vercel.app`

### Vercel CLI Deployment

```bash
cd "d:/5 semester/AI/apna waqeel/apna waqeel/waqeel-frontend"

# Login to Vercel
vercel login

# Deploy
vercel

# When prompted, set environment variable:
# VITE_API_URL=https://your-backend.railway.app

# For production deployment
vercel --prod
```

---

## Frontend Deployment (Netlify)

### Step-by-Step Guide

1. **Deploy via Netlify Dashboard**:
   - Go to [Netlify](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Select the `waqeel-frontend` directory

2. **Configure Build Settings**:
   - **Base directory**: `waqeel-frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

3. **Add Environment Variables**:
   - In Netlify dashboard, go to Site settings → Environment variables
   - Click "Add a variable"
   - Add:
     ```
     Key: VITE_API_URL
     Value: https://your-backend.railway.app
     ```

4. **Deploy**:
   - Click "Deploy site"
   - Your app will be available at `https://your-app.netlify.app`

### Netlify CLI Deployment

```bash
cd "d:/5 semester/AI/apna waqeel/apna waqeel/waqeel-frontend"

# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Set environment variable
netlify env:set VITE_API_URL https://your-backend.railway.app

# Deploy
netlify deploy --prod
```

---

## Security Best Practices

### ✅ DO

- ✅ **Always use environment variables** for API keys and secrets
- ✅ **Keep `.env` files in `.gitignore`** to prevent committing secrets
- ✅ **Use `.env.example`** to document required variables
- ✅ **Rotate API keys regularly** for production environments
- ✅ **Use different API keys** for development and production
- ✅ **Prefix frontend variables with `VITE_`** in Vite projects
- ✅ **Verify environment variables** are loaded before deployment

### ❌ DON'T

- ❌ **Never commit `.env` files** to version control
- ❌ **Never hardcode API keys** in source code
- ❌ **Never expose backend API keys** to the frontend
- ❌ **Never share API keys** in public repositories or screenshots
- ❌ **Don't use production keys** in development

---

## Troubleshooting

### Frontend can't connect to backend

**Problem**: Frontend shows "Error communicating with backend"

**Solution**:
1. Verify `VITE_API_URL` is set correctly in your deployment platform
2. Check that the backend URL is accessible (visit it in a browser)
3. Ensure CORS is enabled on the backend (already configured in `main.py`)
4. Rebuild and redeploy the frontend after changing environment variables

### Backend API key errors

**Problem**: Backend returns errors about missing API keys

**Solution**:
1. Verify all required environment variables are set in your deployment platform
2. Check for typos in variable names (must match exactly)
3. Ensure API keys are valid and not expired
4. Check deployment logs for specific error messages

### Environment variables not loading

**Problem**: Environment variables show as `undefined`

**Solution**:
1. **Frontend**: Ensure variables are prefixed with `VITE_`
2. **Backend**: Verify `python-dotenv` is installed and `load_dotenv()` is called
3. Restart the development server after changing `.env` files
4. For production, rebuild and redeploy after adding environment variables

---

## Quick Reference

### Backend Deployment Checklist

- [ ] Create `.env` file with all required API keys
- [ ] Install dependencies: `pip install -r requirements.txt`
- [ ] Test locally: `python -m uvicorn main:app --reload`
- [ ] Deploy to Railway/Render
- [ ] Add environment variables in deployment platform
- [ ] Verify deployment URL is accessible
- [ ] Test API endpoint: `POST /query`

### Frontend Deployment Checklist

- [ ] Create `.env` file with `VITE_API_URL`
- [ ] Install dependencies: `npm install`
- [ ] Test locally: `npm run dev`
- [ ] Build for production: `npm run build`
- [ ] Deploy to Vercel/Netlify
- [ ] Add `VITE_API_URL` environment variable in deployment platform
- [ ] Verify frontend can connect to backend
- [ ] Test chat functionality

---

## Support

For issues or questions:
- Check the [implementation plan](file:///C:/Users/Ali/.gemini/antigravity/brain/042d539d-bc72-4dcc-942e-86a8ad1723fc/implementation_plan.md)
- Review deployment platform documentation
- Verify all environment variables are set correctly
