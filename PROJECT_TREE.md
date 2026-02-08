# 🌳 Waqeel Project - Visual Directory Tree

```
d:/5 semester/AI/apna waqeel/apna waqeel/
│
├── 📄 DEPLOYMENT.md                    # Deployment guide (Vercel/Netlify/Railway)
├── 📄 FILES_MODIFIED.md                # Security refactor summary
│
├── 📁 waqeel-backend/                  # Python FastAPI Backend
│   │
│   ├── 🔐 .env                         # API keys (NEVER COMMIT)
│   ├── 📄 .env.example                 # Environment template
│   ├── 📄 .gitignore                   # Git ignore patterns
│   ├── 📄 .gitattributes               # Git attributes
│   │
│   ├── ⚙️ config.py                    # Environment loader
│   ├── 🚀 main.py                      # FastAPI app & /query endpoint
│   ├── 🤖 gpt_service.py               # Groq AI integration
│   ├── 🔧 utils.py                     # Semantic search utilities
│   │
│   ├── 🧪 test.py                      # Basic tests
│   ├── 🧪 test_groq.py                 # Groq API tests
│   ├── 🧪 test_query_local.py          # Local query tests
│   │
│   ├── 📦 requirements.txt             # Python dependencies
│   ├── 🚂 Procfile                     # Heroku config
│   ├── 🚂 railway.json                 # Railway config
│   │
│   ├── 📁 data/                        # Legal databases
│   │   ├── 📊 ppc_data_final.json      # Pakistan Penal Code (472 KB)
│   │   ├── 📊 ppc_section_embeddings2.json  # PPC embeddings
│   │   ├── 📊 CrPC.json                # Criminal Procedure Code (783 KB)
│   │   └── 📊 crpc_embeddings.json     # CrPC embeddings (2.2 MB)
│   │
│   ├── 📁 app/                         # Additional modules
│   │   └── 📁 __pycache__/
│   │
│   └── 📁 __pycache__/                 # Python bytecode cache
│       ├── config.cpython-313.pyc
│       ├── config.cpython-314.pyc
│       ├── gpt_service.cpython-313.pyc
│       ├── gpt_service.cpython-314.pyc
│       ├── main.cpython-313.pyc
│       ├── main.cpython-314.pyc
│       ├── utils.cpython-313.pyc
│       └── utils.cpython-314.pyc
│
└── 📁 waqeel-frontend/                 # React TypeScript Frontend
    │
    ├── 🔐 .env                         # Backend URL (NEVER COMMIT)
    ├── 📄 .env.example                 # Environment template
    ├── 📄 .gitignore                   # Git ignore patterns
    │
    ├── 📄 index.html                   # HTML entry point
    ├── 📄 package.json                 # NPM dependencies & scripts
    ├── 📄 package-lock.json            # Locked dependency versions
    │
    ├── ⚙️ vite.config.ts               # Vite build configuration
    ├── ⚙️ tsconfig.json                # TypeScript config (references)
    ├── ⚙️ tsconfig.app.json            # TypeScript app config
    ├── ⚙️ tsconfig.node.json           # TypeScript node config
    ├── ⚙️ tailwind.config.js           # Tailwind CSS config
    ├── ⚙️ postcss.config.js            # PostCSS config
    ├── ⚙️ eslint.config.js             # ESLint rules
    │
    ├── 📄 123.md                       # Misc notes
    │
    ├── 📁 src/                         # Source code
    │   │
    │   ├── ⚛️ main.tsx                 # React entry point
    │   ├── ⚛️ App.tsx                  # Main app & routing
    │   ├── 🎨 index.css                # Global styles
    │   ├── 📄 vite-env.d.ts            # Vite types
    │   │
    │   ├── 📁 components/              # Reusable components
    │   │   ├── Layout.tsx              # Page layout wrapper
    │   │   ├── Navbar.tsx              # Top navigation (5.3 KB)
    │   │   └── Footer.tsx              # Site footer (5.2 KB)
    │   │
    │   ├── 📁 pages/                   # Route pages
    │   │   ├── GetStarted.tsx          # Landing page (/)
    │   │   ├── LawyerSelection.tsx     # Choose law type (/select-lawyer)
    │   │   ├── ChatPage.tsx            # AI chat interface (/chat/:type) ⭐
    │   │   ├── AboutUs.tsx             # About page (/about)
    │   │   ├── ContactUs.tsx           # Contact page (/contact)
    │   │   └── TermsOfService.tsx      # Terms page (/terms)
    │   │
    │   ├── 📁 types/                   # TypeScript types
    │   │   └── index.ts                # Shared type definitions
    │   │
    │   └── 📁 assets/                  # Static assets
    │
    ├── 📁 node_modules/                # NPM packages (thousands of files)
    │   ├── @alloc/
    │   ├── @ampproject/
    │   ├── @babel/
    │   ├── @esbuild/
    │   ├── @eslint/
    │   ├── @humanfs/
    │   ├── @remix-run/
    │   ├── @types/
    │   ├── react/
    │   ├── react-dom/
    │   ├── react-router-dom/
    │   ├── framer-motion/
    │   ├── tailwindcss/
    │   └── ... (many more)
    │
    └── 📁 .bolt/                       # Bolt.new config (if used)
```

---

## 📊 Quick Stats

| Component | Files | Size |
|-----------|-------|------|
| **Backend Python** | 5 core files | ~10 KB |
| **Backend Data** | 4 JSON files | ~3.5 MB |
| **Frontend Components** | 3 files | ~15 KB |
| **Frontend Pages** | 6 files | ~31 KB |
| **Config Files** | 15+ files | ~200 KB |
| **Total Project** | 100+ files | ~4+ MB |

---

## 🔑 Key Files to Know

### Backend
- **`main.py`** - API server entry point
- **`gpt_service.py`** - AI integration
- **`utils.py`** - Semantic search
- **`.env`** - API keys (secret)

### Frontend
- **`App.tsx`** - Routing configuration
- **`ChatPage.tsx`** - Main chat interface
- **`.env`** - Backend URL (secret)

### Documentation
- **`DEPLOYMENT.md`** - How to deploy
- **`project_structure.md`** - This guide!

---

## 🎯 File Naming Conventions

| Pattern | Purpose | Example |
|---------|---------|---------|
| `.env` | Environment secrets | API keys |
| `.env.example` | Environment template | Documentation |
| `*.tsx` | React TypeScript | Components |
| `*.py` | Python source | Backend logic |
| `*.json` | Data/config | Legal databases |
| `*.config.*` | Build config | Vite, Tailwind |
| `test_*.py` | Test files | Unit tests |

---

## 🚀 Important Paths

**Backend Server:**
```
d:/5 semester/AI/apna waqeel/apna waqeel/waqeel-backend/
```

**Frontend App:**
```
d:/5 semester/AI/apna waqeel/apna waqeel/waqeel-frontend/
```

**Legal Data:**
```
d:/5 semester/AI/apna waqeel/apna waqeel/waqeel-backend/data/
```

**React Pages:**
```
d:/5 semester/AI/apna waqeel/apna waqeel/waqeel-frontend/src/pages/
```
