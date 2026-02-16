# 🚀 Render Deployment Guide

## Quick Answer

**Start Command for Render:**
```bash
uvicorn main:app --host=0.0.0.0 --port=$PORT
```

✅ This is already configured in your `render.yaml` file!

---

## 📋 Deployment Steps

### 1. Push to GitHub

```bash
cd "d:\5 semester\AI\apna waqeel\apna waqeel\waqeel-backend"

# Add all files
git add .

# Commit changes
git commit -m "Add Render deployment configuration"

# Push to GitHub
git push origin main
```

### 2. Deploy on Render

1. **Go to**: https://render.com/
2. **Sign up/Login** with GitHub
3. **Click**: "New +" → "Web Service"
4. **Connect** your GitHub repository: `waqeel-backend`
5. **Render will auto-detect** the `render.yaml` configuration

### 3. Configure Environment Variables

In Render dashboard, add these environment variables:

| Key | Value |
|-----|-------|
| `GROQ_API_KEY` | `gsk_rmOm8BiERxZdZvJHEkcsWGdyb3FY...` |
| `COHERE_API_KEY` | `mEqwyzIysVXxwmqiv9mynGptcrFpSEMyGfmBqAt7` |
| `GEMINI_API_KEY` | `AIzaSyD0HTBpXRiqA6pTGniIOj4RHGpzUdLlpFo` |

> [!IMPORTANT]
> Use your actual API keys from `.env` file

### 4. Deploy Settings (Auto-configured via render.yaml)

These are already set in `render.yaml`:

- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `uvicorn main:app --host=0.0.0.0 --port=$PORT`
- **Python Version**: 3.11.0

### 5. Deploy & Test

1. Click **"Create Web Service"**
2. Wait for deployment (5-10 minutes)
3. Copy your Render URL: `https://your-app.onrender.com`
4. Test the API:

```bash
curl -X POST https://your-app.onrender.com/query \
  -H "Content-Type: application/json" \
  -d '{"query":"what is theft in Pakistan law"}'
```

---

## 🔧 Files Created/Updated

### ✅ [requirements.txt](file:///d:/5%20semester/AI/apna%20waqeel/apna%20waqeel/waqeel-backend/requirements.txt)
- Updated with current working versions
- All dependencies included

### ✅ [render.yaml](file:///d:/5%20semester/AI/apna%20waqeel/apna%20waqeel/waqeel-backend/render.yaml)
- Automated deployment configuration
- Environment variables defined
- Start command configured

### ✅ [.gitignore](file:///d:/5%20semester/AI/apna%20waqeel/apna%20waqeel/waqeel-backend/.gitignore)
- Already excludes `.env` (verified)

### ✅ [.env.example](file:///d:/5%20semester/AI/apna%20waqeel/apna%20waqeel/waqeel-backend/.env.example)
- Documents all required API keys

---

## 🌐 Update Frontend After Deployment

Once backend is deployed, update frontend `.env`:

```bash
# In waqeel-frontend/.env
VITE_API_URL=https://your-app.onrender.com
```

Then redeploy frontend to Vercel/Netlify.

---

## ⚠️ Important Notes

### Free Tier Limitations
- Render free tier **spins down after 15 minutes** of inactivity
- First request after spin-down takes ~30 seconds
- Upgrade to paid tier ($7/month) for always-on service

### Large Files
- Your ML model (~400MB) is fine on Render
- No size limits like Vercel

### Environment Variables
- **Never commit** `.env` to GitHub
- Always use Render dashboard to set secrets

---

## 🧪 Testing Checklist

After deployment:

- [ ] Backend URL is accessible
- [ ] `/query` endpoint responds
- [ ] API docs available at `https://your-app.onrender.com/docs`
- [ ] Groq API integration works
- [ ] Legal database queries return results
- [ ] Frontend connects successfully

---

## 🆘 Troubleshooting

### Build Fails
- Check Render logs for missing dependencies
- Verify `requirements.txt` is complete

### 500 Internal Server Error
- Check environment variables are set
- Verify API keys are correct
- Check Render logs for Python errors

### Slow Response
- Normal on free tier after spin-down
- Consider upgrading to paid tier

---

## 📚 Additional Resources

- **Render Docs**: https://render.com/docs/deploy-fastapi
- **FastAPI Deployment**: https://fastapi.tiangolo.com/deployment/
- **Your QUICK_DEPLOY.md**: [Quick Deploy Guide](file:///d:/5%20semester/AI/apna%20waqeel/apna%20waqeel/QUICK_DEPLOY.md)
