<div align="center">

# 🧠 ResumeIQ

### *Your AI-Powered Career Intelligence Platform*

> **Analyze. Optimize. Get Hired.**  
> ResumeIQ transforms how you approach job searching — from fragmented chaos to a unified, AI-driven career command center.

<br/>

[![Live Demo](https://img.shields.io/badge/🚀%20Live%20Demo-resumeiq-brightgreen?style=for-the-badge)](https://resumeiq-frontend-v8en.onrender.com/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-ResumeIQ-181717?style=for-the-badge&logo=github)](https://github.com/krish12388/ResumeIQ.git)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Deployed on Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=for-the-badge&logo=render)](https://render.com/)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-ff69b4?style=for-the-badge)](https://github.com/krish12388/ResumeIQ/pulls)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=for-the-badge&logo=docker)](https://www.docker.com/)

<br/>

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=flat-square&logo=docker&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)

</div>

---

## 📋 Table of Contents

<details>
<summary>Click to expand full navigation</summary>

- [Project Overview](#-project-overview)
- [Why ResumeIQ Stands Out](#-why-resumeiq-stands-out)
- [Key Features](#-key-features)
- [Real World Use Cases](#-real-world-use-cases)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [System Design Notes](#-system-design-notes)
- [Folder Structure](#-folder-structure)
- [Installation & Setup](#-installation--setup)
- [Development Commands](#-development-commands)
- [Docker Section](#-docker-section)
- [Environment Variables](#-environment-variables)
- [API Workflow](#-api-workflow)
- [Performance & UX](#-performance--ux)
- [Developer Experience](#-developer-experience)
- [Security Considerations](#-security-considerations)
- [Challenges Faced During Development](#-challenges-faced-during-development)
- [Future Improvements](#-future-improvements)
- [Deployment Notes](#-deployment-notes)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgements](#-acknowledgements)
- [Author](#-author)

</details>

---

## 🌐 Project Overview

ResumeIQ is a **full-stack, AI-powered career intelligence platform** built to solve one of the most painful problems modern job seekers face: a deeply fragmented, inefficient, and anxiety-inducing job search experience.

### The Problem

Today's job seekers juggle **5-10 different tools** just to land a single interview:

| Pain Point | Current Reality |
|---|---|
| 📄 Resume Feedback | Paid tools, inconsistent results |
| 🎯 ATS Scoring | Hidden black-box systems |
| 🔍 Job Discovery | Scattered across 10+ platforms |
| 🎤 Interview Prep | No personalized feedback loop |
| 💡 AI Guidance | Generic tips, no resume context |

### The Solution

ResumeIQ collapses this fragmented ecosystem into **one intelligent platform**:

```
Upload Resume → AI Analysis → ATS Score → Job Discovery → Interview Prep → Get Hired
```

**Why it was built:**  
The core insight is simple — *your resume, your job search, and your interview preparation are deeply interconnected*. ResumeIQ treats them as a unified workflow rather than isolated tasks, enabling smarter, faster, and more personalized career decisions powered by AI.

**What makes it different:**
- 🧠 Contextual AI that *understands your specific resume*, not generic advice
- 🗂️ Centralized job discovery so you stop tab-switching
- 🔥 Resume Roast — because brutal honesty sometimes lands harder than polished feedback
- 🏗️ Production-grade microservices architecture, built to scale
- 🐳 Fully Dockerized for consistent deployment across any environment

---

## ✨ Why ResumeIQ Stands Out

<details>
<summary>Expand to see competitive advantages</summary>

### Versus Generic Resume Tools

| Feature | ResumeIQ | Generic Tools |
|---|---|---|
| Contextual AI Analysis | ✅ | ❌ |
| ATS Scoring | ✅ | ⚠️ Limited |
| Centralized Job Discovery | ✅ | ❌ |
| Interview Report Generation | ✅ | ❌ |
| Resume Roast Mode | ✅ 🔥 | ❌ |
| Real-time Feedback | ✅ | ❌ |
| Microservices Architecture | ✅ | ❌ |
| Dockerized Deployment | ✅ | ❌ |
| Smooth Scrolling UX (Lenis) | ✅ | ❌ |
| Open Source | ✅ | ❌ |

### Why Centralized Job Discovery Matters

Traditional job searches are scattered. Candidates visit LinkedIn, Indeed, Naukri, Glassdoor, and company career pages independently. ResumeIQ aggregates opportunities and presents them alongside your resume analysis, giving you **context-aware job suggestions** aligned with your actual skill profile.

</details>

---

## 🚀 Key Features

### 1. 🤖 AI Resume Analysis
Powered by advanced language models, ResumeIQ performs a deep-dive analysis of your resume — identifying skill gaps, weak action verbs, missing keywords, formatting issues, and overall impact. It doesn't just scan; it *understands* your career narrative.

### 2. 🎯 ATS Compatibility Scoring
Modern recruitment runs through Applicant Tracking Systems that reject resumes before a human ever reads them. ResumeIQ simulates ATS parsing, scores your resume on keyword density, formatting compliance, section completeness, and role alignment — giving you a percentage score with actionable fixes.

### 3. 💡 AI Suggestions & Improvements
Every weakness identified comes with a concrete AI-generated improvement. Want a better summary line? Need to quantify your achievements? ResumeIQ suggests specific rewrites, not vague advice.

### 4. 🗺️ Centralized Job Discovery System
A unified job discovery panel aggregates opportunities from multiple sources, filtered and matched against your resume profile. One platform, zero tab-switching.

### 5. 🎤 Interview Report Generation
After resume analysis, ResumeIQ generates a personalized interview preparation report — anticipating questions a recruiter might ask based on your resume gaps, role target, and experience level.

### 6. 🔥 Resume Roast Feature
*The crowd favorite.* When you need brutal honesty instead of polished corporate feedback, hit **Roast My Resume**. Our AI tears into your resume with sharp, witty, painfully accurate commentary. It's the feedback your friends were too kind to give you — wrapped in humor, packed with truth, and surprisingly actionable. Consider it a career intervention you didn't know you needed.

> *"Your resume says 'team player' in 2024. Bold choice."* — ResumeIQ Roast Engine

### 7. 🌊 Smooth UX with Lenis Scroll
ResumeIQ uses **Lenis** — a high-performance smooth scrolling library — to deliver a buttery, momentum-based scrolling experience. Every page transition feels intentional. Every scroll feels alive.

### 8. 🔐 Authentication & User Sessions
Secure JWT-based authentication with session management ensures your resume data, analysis history, and job tracking are private and persistent across sessions.

### 9. ⚡ Real-Time Feedback Loop
AI analysis results are streamed and rendered in real-time — no waiting on full-page reloads. Users see their scores, suggestions, and roast feedback as it generates.

### 10. 🐳 Microservice Communication
Each service (resume analysis, job discovery, interview report, authentication) runs as an independent containerized microservice with defined API contracts — enabling parallel development, independent scaling, and fault isolation.

### 11. 🏗️ Dockerized Deployment
The entire platform runs inside Docker containers orchestrated with Docker Compose. One command spins up the full stack — frontend, backend, AI services, and database — in a perfectly configured, reproducible environment.

---

## 🌍 Real World Use Cases

<details>
<summary>Expand use cases</summary>

| Persona | How They Use ResumeIQ |
|---|---|
| 🎓 **Fresh Graduate** | Upload first resume, get ATS score, discover entry-level jobs, use interview report to prepare |
| 🔄 **Career Switcher** | Identify transferable skills, get keyword suggestions for target industry, find relevant openings |
| 🚀 **Senior Professional** | Optimize executive resume for ATS, get roast feedback on stale formatting, find leadership roles |
| 🌐 **International Job Seeker** | Understand regional resume norms via AI suggestions, discover global opportunities centrally |
| 📊 **Hiring Manager** | Evaluate what candidates' resumes communicate vs. what ATS sees — build better JDs |

</details>

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose | Version |
|---|---|---|
| React | UI Framework | 18.x |
| TypeScript | Type Safety | 5.x |
| Tailwind CSS | Utility-first Styling | 3.x |
| Lenis | Smooth Scroll Animation | Latest |
| Framer Motion | UI Transitions & Animations | 11.x |
| React Router | Client-side Routing | 6.x |
| Axios | HTTP Client | 1.x |
| Zustand | Global State Management | 4.x |
| React Hook Form | Form Handling | 7.x |
| Vite | Build Tool & Dev Server | 5.x |

### Backend

| Technology | Purpose | Version |
|---|---|---|
| Node.js | Runtime Environment | 20.x |
| Express.js | REST API Framework | 4.x |
| MongoDB | Primary NoSQL Database | 7.x |
| Mongoose | ODM for MongoDB | 8.x |
| JWT | Authentication Tokens | 9.x |
| Bcrypt | Password Hashing | 5.x |
| Multer | File Upload Handling | 1.x |
| CORS | Cross-Origin Security | 2.x |

### AI / LLM Services

| Technology | Purpose |
|---|---|
| Google Gemini API | Resume Analysis, Roast Engine, Suggestions |
| LangChain | LLM Orchestration Layer |
| Python | AI Service Runtime |
| FastAPI | AI Microservice Endpoints |
| PDF-Parse / PyMuPDF | Resume Document Parsing |

### DevOps & Infrastructure

| Technology | Purpose |
|---|---|
| Docker | Containerization |
| Docker Compose | Multi-service Orchestration |
| Render | Cloud Deployment Platform |
| GitHub | Version Control & CI |
| dotenv | Environment Variable Management |

### Styling & Animation

| Technology | Role |
|---|---|
| Tailwind CSS | Responsive utility-first styles |
| Lenis | Physics-based smooth scrolling |
| Framer Motion | Declarative animation library |
| Lucide React | Icon system |

---

## 🏗️ Architecture

### Why Microservices?

ResumeIQ was architected as a **microservices-based platform** from day one. Here's the reasoning:

```
Monolith Problem:
─────────────────
One codebase → All features tightly coupled →
One bug crashes everything → Hard to scale specific parts →
Slow deployments → Developer bottlenecks

Microservices Solution:
────────────────────────
Independent services → Each does ONE thing well →
Independent deployments → Scale only what's needed →
Fault isolation → Teams can develop in parallel
```

### Architecture Benefits

| Benefit | Description |
|---|---|
| 🔒 **Fault Isolation** | If the Roast service goes down, Resume Analysis keeps running |
| 📈 **Independent Scaling** | Scale the AI service 3x without touching auth or frontend |
| 🚀 **Independent Deployments** | Deploy new interview feature without redeploying the whole app |
| 🧩 **Separation of Concerns** | Each service owns its domain, its data, its logic |
| 🛠️ **Technology Flexibility** | AI service uses Python/FastAPI; API gateway uses Node/Express |
| 👥 **Parallel Development** | Multiple developers can own individual services simultaneously |

### High-Level Architecture Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                            │
│           React + TypeScript + Lenis + Tailwind                 │
│                    (Vite Dev / Production Build)                 │
└──────────────────────────┬──────────────────────────────────────┘
                           │ HTTPS / REST
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                        API GATEWAY                              │
│              Express.js (Node.js) — Port 5000                   │
│         Auth Middleware | Rate Limiting | CORS | Routing        │
└────┬──────────────┬──────────────┬──────────────┬──────────────┘
     │              │              │              │
     ▼              ▼              ▼              ▼
┌─────────┐  ┌───────────┐  ┌──────────┐  ┌──────────────┐
│  Auth   │  │  Resume   │  │   Job    │  │  Interview   │
│ Service │  │  AI Svc   │  │Discovery │  │  Report Svc  │
│ (Node)  │  │ (Python)  │  │  (Node)  │  │  (Python)    │
└────┬────┘  └─────┬─────┘  └─────┬────┘  └──────┬───────┘
     │             │              │               │
     ▼             ▼              ▼               ▼
┌─────────────────────────────────────────────────────────────────┐
│                         DATA LAYER                              │
│                MongoDB (Dockerized Instance)                    │
└─────────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      EXTERNAL APIS                              │
│            Google Gemini API | Job Board APIs                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🗂️ System Design Notes

<details>
<summary>Expand system design details</summary>

### Data Flow: Resume Analysis Pipeline

```
1. User uploads PDF resume via frontend (multipart/form-data)
        ↓
2. API Gateway receives upload → Multer processes file
        ↓
3. File forwarded to AI Microservice (Python/FastAPI)
        ↓
4. PyMuPDF/PDF-Parse extracts raw text from document
        ↓
5. Extracted text + job role context sent to Gemini API via LangChain
        ↓
6. Gemini returns structured JSON: { score, weaknesses, suggestions, keywords }
        ↓
7. Result stored in MongoDB with user session reference
        ↓
8. Response streamed back to frontend for real-time rendering
        ↓
9. User sees live ATS score, suggestions, and optional Roast feedback
```

### Service Communication Model

- Services communicate over **Docker's internal bridge network**
- Service discovery via Docker Compose **service names as hostnames**
- All inter-service calls are internal HTTP (not exposed publicly)
- Only the API Gateway is publicly exposed

### Database Design Philosophy

- MongoDB chosen for **schema flexibility** — resume structures vary wildly
- Each user document references analysis history, job saves, and session data
- Job discovery results are **ephemeral** (not stored) — fetched and filtered at request time

</details>

---

## 📁 Folder Structure

```bash
ResumeIQ/
│
├── frontend/                          # React + TypeScript + Vite frontend
│   ├── public/
│   │   └── assets/                    # Static images, icons, fonts
│   ├── src/
│   │   ├── components/                # Reusable UI components
│   │   │   ├── ui/                    # Base design system components
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── Badge.tsx
│   │   │   │   └── Spinner.tsx
│   │   │   ├── layout/               # Layout wrappers
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── PageWrapper.tsx
│   │   │   ├── resume/               # Resume-specific components
│   │   │   │   ├── ResumeUploader.tsx
│   │   │   │   ├── AnalysisCard.tsx
│   │   │   │   ├── ATSScoreChart.tsx
│   │   │   │   ├── SuggestionList.tsx
│   │   │   │   └── RoastPanel.tsx
│   │   │   ├── jobs/                 # Job discovery components
│   │   │   │   ├── JobCard.tsx
│   │   │   │   ├── JobFilters.tsx
│   │   │   │   └── JobGrid.tsx
│   │   │   └── interview/            # Interview report components
│   │   │       ├── ReportCard.tsx
│   │   │       └── QuestionList.tsx
│   │   ├── pages/                    # Route-level page components
│   │   │   ├── Home.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── ResumeAnalysis.tsx
│   │   │   ├── JobDiscovery.tsx
│   │   │   ├── InterviewReport.tsx
│   │   │   ├── ResumeRoast.tsx
│   │   │   ├── Login.tsx
│   │   │   └── Register.tsx
│   │   ├── store/                    # Zustand state management
│   │   │   ├── authStore.ts
│   │   │   ├── resumeStore.ts
│   │   │   └── jobStore.ts
│   │   ├── hooks/                    # Custom React hooks
│   │   │   ├── useAuth.ts
│   │   │   ├── useResumeAnalysis.ts
│   │   │   └── useSmoothScroll.ts
│   │   ├── services/                 # API service clients
│   │   │   ├── api.ts                # Axios base client
│   │   │   ├── resumeService.ts
│   │   │   ├── authService.ts
│   │   │   ├── jobService.ts
│   │   │   └── interviewService.ts
│   │   ├── utils/                    # Utility functions
│   │   │   ├── lenis.ts              # Lenis smooth scroll initializer
│   │   │   ├── formatters.ts
│   │   │   └── validators.ts
│   │   ├── types/                    # TypeScript type definitions
│   │   │   ├── resume.types.ts
│   │   │   ├── job.types.ts
│   │   │   └── auth.types.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── .env.example
│   ├── package.json
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   ├── vite.config.ts
│   └── Dockerfile
│
├── backend/                          # Express.js API Gateway
│   ├── src/
│   │   ├── controllers/              # Route handler logic
│   │   │   ├── authController.ts
│   │   │   ├── resumeController.ts
│   │   │   ├── jobController.ts
│   │   │   └── interviewController.ts
│   │   ├── middleware/               # Express middleware
│   │   │   ├── authMiddleware.ts
│   │   │   ├── errorHandler.ts
│   │   │   ├── rateLimiter.ts
│   │   │   └── upload.ts
│   │   ├── models/                   # Mongoose data models
│   │   │   ├── User.ts
│   │   │   ├── Resume.ts
│   │   │   ├── Analysis.ts
│   │   │   └── InterviewReport.ts
│   │   ├── routes/                   # Express route definitions
│   │   │   ├── authRoutes.ts
│   │   │   ├── resumeRoutes.ts
│   │   │   ├── jobRoutes.ts
│   │   │   └── interviewRoutes.ts
│   │   ├── services/                 # Business logic + service calls
│   │   │   ├── aiService.ts
│   │   │   ├── jobAggregator.ts
│   │   │   └── emailService.ts
│   │   ├── config/
│   │   │   ├── db.ts                 # MongoDB connection
│   │   │   └── env.ts
│   │   └── app.ts                    # Express app entry
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
│
├── ai-service/                       # Python FastAPI — AI Engine
│   ├── app/
│   │   ├── routers/
│   │   │   ├── analyze.py            # Resume analysis endpoints
│   │   │   ├── roast.py              # Resume Roast engine
│   │   │   ├── ats.py                # ATS scoring logic
│   │   │   └── interview.py          # Interview report generation
│   │   ├── services/
│   │   │   ├── gemini_service.py     # Gemini API integration
│   │   │   ├── pdf_parser.py         # PDF text extraction
│   │   │   └── langchain_chains.py   # LangChain prompt chains
│   │   ├── models/
│   │   │   ├── request_models.py
│   │   │   └── response_models.py
│   │   ├── prompts/                  # Prompt templates
│   │   │   ├── analyze_prompt.py
│   │   │   ├── roast_prompt.py
│   │   │   ├── ats_prompt.py
│   │   │   └── interview_prompt.py
│   │   └── main.py                   # FastAPI app entry
│   ├── requirements.txt
│   ├── .env.example
│   └── Dockerfile
│
├── docker/
│   ├── docker-compose.yml            # Full stack orchestration
│   ├── docker-compose.dev.yml        # Development overrides
│   ├── docker-compose.prod.yml       # Production configuration
│   └── nginx/
│       └── nginx.conf                # Reverse proxy config (optional)
│
├── .github/
│   └── workflows/
│       └── ci.yml                    # GitHub Actions CI pipeline
│
├── .gitignore
├── .dockerignore
├── README.md
└── LICENSE
```

---

## ⚙️ Installation & Setup

### Prerequisites

Ensure the following are installed on your system:

| Tool | Required Version | Install |
|---|---|---|
| Node.js | >= 20.x | [nodejs.org](https://nodejs.org) |
| npm / pnpm | >= 9.x | Bundled with Node |
| Python | >= 3.11 | [python.org](https://python.org) |
| Docker | >= 24.x | [docker.com](https://docker.com) |
| Docker Compose | >= 2.x | Bundled with Docker Desktop |
| Git | >= 2.x | [git-scm.com](https://git-scm.com) |

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/krish12388/ResumeIQ.git
cd ResumeIQ
```

---

### 2️⃣ Environment Configuration

Copy the example environment files and fill in your values:

```bash
# Frontend
cp frontend/.env.example frontend/.env

# Backend
cp backend/.env.example backend/.env

# AI Service
cp ai-service/.env.example ai-service/.env
```

> See [Environment Variables](#-environment-variables) section for all required keys.

---

### 3️⃣ Frontend Setup (Manual)

```bash
cd frontend
npm install
npm run dev
```

> Frontend runs at `http://localhost:5173`

---

### 4️⃣ Backend Setup (Manual)

```bash
cd backend
npm install
npm run dev
```

> Backend API runs at `http://localhost:5000`

---

### 5️⃣ AI Service Setup (Manual)

```bash
cd ai-service
python -m venv venv
source venv/bin/activate          # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

> AI Service runs at `http://localhost:8000`

---

### 6️⃣ Full Stack via Docker (Recommended)

```bash
# From the project root
docker compose -f docker/docker-compose.yml up --build
```

This single command starts:
- ✅ React frontend (port 5173)
- ✅ Express API gateway (port 5000)
- ✅ Python AI service (port 8000)
- ✅ MongoDB instance (port 27017)

---

## 💻 Development Commands

### Frontend

```bash
cd frontend

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint the codebase
npm run lint

# Auto-fix lint issues
npm run lint:fix

# Format with Prettier
npm run format

# Type check
npm run type-check
```

### Backend

```bash
cd backend

# Start development server (hot reload)
npm run dev

# Build TypeScript to JavaScript
npm run build

# Start compiled production server
npm start

# Run unit tests
npm test

# Lint
npm run lint
```

### AI Service

```bash
cd ai-service

# Start FastAPI dev server
uvicorn app.main:app --reload --port 8000

# Run with custom host
uvicorn app.main:app --host 0.0.0.0 --port 8000

# Install new dependency
pip install <package> && pip freeze > requirements.txt
```

---

## 🐳 Docker Section

ResumeIQ uses a **multi-container Docker architecture** orchestrated with Docker Compose. Each service runs in its own isolated container with defined networking, volume mounts, and environment injection.

### Architecture at the Container Level

```
┌─────────────────────────────────────────────────┐
│               Docker Network: resumeiq-net       │
│                                                   │
│  ┌──────────┐  ┌──────────┐  ┌────────────────┐  │
│  │ frontend │  │ backend  │  │   ai-service   │  │
│  │  :5173   │  │  :5000   │  │     :8000      │  │
│  └──────────┘  └──────────┘  └────────────────┘  │
│                     │                             │
│              ┌──────────────┐                     │
│              │   mongodb    │                     │
│              │   :27017     │                     │
│              └──────────────┘                     │
└─────────────────────────────────────────────────┘
```

### Key Docker Commands

```bash
# Build and start all services
docker compose -f docker/docker-compose.yml up --build

# Start in detached (background) mode
docker compose -f docker/docker-compose.yml up -d --build

# Stop all containers
docker compose -f docker/docker-compose.yml down

# Stop and remove volumes (fresh DB)
docker compose -f docker/docker-compose.yml down -v

# View running containers
docker ps

# View container logs (follow mode)
docker logs -f resumeiq-backend

# View logs for all services
docker compose -f docker/docker-compose.yml logs -f

# Rebuild a single service
docker compose -f docker/docker-compose.yml up --build backend

# Exec into a running container
docker exec -it resumeiq-backend /bin/bash

# View resource usage
docker stats

# Prune unused images and volumes
docker system prune -af --volumes
```

### Sample `docker-compose.yml`

```yaml
version: "3.9"

services:
  frontend:
    build:
      context: ../frontend
      dockerfile: Dockerfile
    ports:
      - "5173:5173"
    environment:
      - VITE_API_URL=http://backend:5000
    depends_on:
      - backend
    networks:
      - resumeiq-net

  backend:
    build:
      context: ../backend
      dockerfile: Dockerfile
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://mongodb:27017/resumeiq
      - AI_SERVICE_URL=http://ai-service:8000
    depends_on:
      - mongodb
      - ai-service
    networks:
      - resumeiq-net

  ai-service:
    build:
      context: ../ai-service
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
    environment:
      - GEMINI_API_KEY=${GEMINI_API_KEY}
    networks:
      - resumeiq-net

  mongodb:
    image: mongo:7.0
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
    networks:
      - resumeiq-net

networks:
  resumeiq-net:
    driver: bridge

volumes:
  mongo-data:
```

---

## 🔐 Environment Variables

### Frontend (`frontend/.env`)

```env
# API Gateway base URL
VITE_API_URL=http://localhost:5000/api

# App environment
VITE_APP_ENV=development

# Optional: Analytics
VITE_GA_TRACKING_ID=your_ga_tracking_id
```

### Backend (`backend/.env`)

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/resumeiq

# Authentication
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d

# AI Service URL (internal)
AI_SERVICE_URL=http://localhost:8000

# CORS
ALLOWED_ORIGINS=http://localhost:5173

# File Upload
MAX_FILE_SIZE_MB=10
UPLOAD_DIR=./uploads
```

### AI Service (`ai-service/.env`)

```env
# Google Gemini API
GEMINI_API_KEY=your_gemini_api_key_here

# FastAPI settings
APP_ENV=development
APP_PORT=8000

# LangChain (optional tracing)
LANGCHAIN_TRACING_V2=true
LANGCHAIN_API_KEY=your_langchain_api_key

# Model config
GEMINI_MODEL=gemini-1.5-pro
MAX_TOKENS=4096
TEMPERATURE=0.7
```

---

## 🔄 API Workflow

### Resume Analysis Pipeline

```
POST /api/resume/analyze
        │
        ├── Auth Middleware validates JWT
        │
        ├── Multer processes uploaded PDF
        │
        ├── Backend forwards to AI Service:
        │       POST http://ai-service:8000/analyze
        │
        ├── AI Service:
        │       ├── Extracts text via PyMuPDF
        │       ├── Constructs LangChain prompt chain
        │       ├── Calls Gemini API
        │       └── Returns structured JSON response
        │
        ├── Backend stores result in MongoDB
        │
        └── Frontend receives and renders analysis
```

### ATS Scoring Flow

```
POST /api/resume/ats-score
        │
        ├── Resume text extracted
        ├── Target job role provided by user
        ├── AI Service compares resume keywords vs. role keywords
        ├── Generates match percentage + missing keyword list
        └── Returns { score: 78, missing: [...], suggestions: [...] }
```

### Resume Roast Flow

```
POST /api/resume/roast
        │
        ├── Same text extraction pipeline
        ├── Special Roast prompt loaded (witty, brutally honest tone)
        ├── Gemini generates roast commentary per section
        └── Returns { roastSections: [...], overallVerdict: "..." }
```

### Job Discovery Flow

```
GET /api/jobs?role=engineer&location=remote
        │
        ├── Backend queries aggregated job sources
        ├── Filters results against user resume keywords (if provided)
        ├── Returns ranked job listings
        └── Frontend renders job cards with match indicators
```

---

## 📊 Performance & UX

### Smooth Scrolling with Lenis

ResumeIQ uses **Lenis** — an open-source, lightweight smooth scroll library — to replace the browser's default abrupt scroll behavior with physics-based, momentum-driven scrolling.

```typescript
// utils/lenis.ts
import Lenis from "lenis";

export const initLenis = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return lenis;
};
```

### Performance Strategies

| Strategy | Implementation |
|---|---|
| 🖼️ Code Splitting | React lazy + Suspense per route |
| 📦 Bundle Optimization | Vite rollup chunking |
| 🌐 API Caching | Axios request deduplication |
| 🔄 Optimistic UI | Immediate visual feedback before API resolves |
| 🗜️ Response Compression | Express compression middleware |
| 🎯 Targeted Re-renders | Zustand sliced selectors |

---

## 👨‍💻 Developer Experience

<details>
<summary>DX highlights that make contributing easy</summary>

- **TypeScript everywhere** — end-to-end type safety from frontend forms to backend models
- **Vite dev server** — sub-100ms HMR for instant feedback during UI development
- **Consistent code style** — ESLint + Prettier configured and enforced via pre-commit hooks
- **Modular service structure** — each service is independently runnable; no need to spin up the full stack to work on one service
- **Comprehensive `.env.example` files** — zero guessing on required environment variables
- **Docker Compose dev overrides** — `docker-compose.dev.yml` enables hot-reload inside containers
- **Clear API contracts** — all inter-service communication follows documented JSON schemas

</details>

---

## 🔒 Security Considerations

| Layer | Measure |
|---|---|
| 🔑 **Authentication** | JWT tokens with configurable expiry, HTTP-only cookies option |
| 🔒 **Password Security** | Bcrypt hashing with salting (rounds: 12) |
| 🌐 **CORS Policy** | Strict origin whitelist via environment variable |
| 🐳 **Container Isolation** | Services communicate only over internal Docker bridge network |
| 📁 **File Uploads** | Multer validates MIME type, rejects non-PDF files, enforces size limit |
| 🔐 **Secrets Management** | All secrets in `.env` files, never committed to version control |
| 🛡️ **API Rate Limiting** | express-rate-limit applied to auth and AI endpoints |
| 📊 **Input Validation** | All API inputs validated with Zod schemas before processing |

---

## 🧱 Challenges Faced During Development

This section is intentionally candid — these were real walls hit during development, not textbook problems.

### 1. Docker Networking Was a Nightmare at First

The biggest time sink was getting inter-container networking right. Service names as hostnames sounds simple until your AI service can't reach MongoDB because you forgot to add it to the right Docker network. Spent hours debugging `connection refused` errors that turned out to be `networks:` omissions in `docker-compose.yml`. Lesson: **always explicitly define networks for every service.**

### 2. Docker Compose Service Dependency Ordering

`depends_on` in Docker Compose only waits for a container to *start*, not for the service *inside* it to be *ready*. The backend was crashing on startup because MongoDB's TCP port was open but the replica set wasn't initialized yet. Had to implement health check polling with retry logic in the backend's DB connection code.

### 3. AI Response Consistency

Getting Gemini to return *consistently structured* JSON responses — especially for the Roast feature — required significant prompt engineering. Early iterations returned beautifully written roasts... as unstructured markdown prose. Had to invest heavily in prompt templating with explicit output schema instructions and fallback parsing logic.

### 4. Managing Asynchronous Workflows

The resume analysis pipeline involves: file upload → text extraction → LangChain chain → Gemini API call → MongoDB write → SSE stream to frontend. Each step is async, each can fail independently. Building robust error propagation across this chain without losing context was genuinely hard — required careful `try/catch` boundaries at every service boundary.

### 5. Scaling Architecture Decisions Mid-Project

Started with a monolithic Express backend. Midway through, realized that the AI service was creating unbearable coupling — Python LLM logic tangled with Node.js auth logic. The refactor to extract the AI service as a separate FastAPI microservice was painful but worth every hour. The codebase clarity afterward was transformative.

### 6. CORS in Multi-Container Setup

During development, CORS was configured for `localhost`. In Docker, services talk via service names (`http://backend:5000`), not `localhost`. Took an embarrassingly long time to realize the frontend in Docker was hitting a different hostname than expected. Fixed with environment-aware CORS configuration.

### 7. File Upload Across Service Boundaries

Forwarding a multipart file from the Express backend to the FastAPI AI service required streaming the buffer rather than the raw `req.file` object. Getting `form-data` to serialize correctly across the Node → Python boundary took considerable experimentation.

---

## 🔮 Future Improvements

| Feature | Description | Priority |
|---|---|---|
| 🎤 **AI Interview Simulator** | Real-time conversational mock interviews with AI feedback | High |
| 📜 **Resume Versioning** | Save and compare multiple resume versions over time | High |
| 📊 **Advanced Analytics Dashboard** | Track ATS score trends, application funnel, interview conversion | Medium |
| 🌍 **Multi-Language Support** | Resume analysis in Spanish, French, German, Hindi | Medium |
| 🤝 **Job Recommendation Engine** | ML-powered job matching based on resume embedding similarity | High |
| 👥 **Team / Recruiter Dashboard** | Invite team members, review candidate resumes, track hiring pipeline | Medium |
| 🔔 **Job Alert Notifications** | Email/push alerts when new matching jobs are posted | Low |
| 📱 **Mobile App** | React Native companion app for on-the-go job tracking | Low |
| 🧪 **A/B Resume Testing** | Test which resume version gets more responses | Medium |
| 🧑‍🏫 **Career Coach Mode** | Long-form conversational AI mentor for career guidance | High |

---

## 🚢 Deployment Notes

### Current Deployment

ResumeIQ is deployed on **Render** — a modern cloud platform with auto-deploy from GitHub, managed SSL, and Docker support.

| Service | Render Service Type | URL |
|---|---|---|
| Frontend | Static Site / Web Service | `resumeiq-frontend-v8en.onrender.com` |
| Backend | Web Service (Node.js) | Internal |
| AI Service | Web Service (Python) | Internal |
| MongoDB | External (MongoDB Atlas) | Internal |

### Deployment Checklist

```bash
# 1. Ensure all .env variables are set in Render's environment panel
# 2. Build commands configured per service
# 3. Health check endpoints configured (/health on backend)
# 4. MongoDB Atlas IP whitelist includes 0.0.0.0/0 or Render outbound IPs
# 5. Docker builds verified locally before pushing
```

### Production Build Commands

```bash
# Frontend production build
cd frontend && npm run build
# Output: frontend/dist/

# Backend production
cd backend && npm run build
# Output: backend/dist/

# Docker production stack
docker compose -f docker/docker-compose.prod.yml up -d --build
```

---

## 🤝 Contributing

Contributions are what make the open-source community extraordinary. Every PR, issue, or suggestion makes ResumeIQ better for everyone.

### Contribution Workflow

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/ResumeIQ.git
cd ResumeIQ

# 3. Create a feature branch (use descriptive names)
git checkout -b feat/ai-interview-simulator
# or
git checkout -b fix/ats-score-calculation
# or
git checkout -b docs/update-architecture-diagram

# 4. Make your changes with clean commits
git add .
git commit -m "feat(ai): add conversational interview simulator endpoint"

# 5. Push to your fork
git push origin feat/ai-interview-simulator

# 6. Open a Pull Request on GitHub
```

### Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

| Type | When to Use |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `style:` | Formatting, no logic change |
| `refactor:` | Code restructure, no feature/fix |
| `test:` | Adding or updating tests |
| `chore:` | Build, CI, config changes |

### Pull Request Guidelines

- ✅ PRs should target the `dev` branch, not `main`
- ✅ Include a clear description of what changed and why
- ✅ Add screenshots for UI changes
- ✅ Ensure your branch is up-to-date with `dev` before opening PR
- ✅ Run linting and type-check before submitting
- ✅ Reference related issues with `Closes #issue_number`

### Reporting Issues

When opening an issue, please include:
1. **Expected behavior**
2. **Actual behavior**
3. **Steps to reproduce**
4. **Environment** (OS, Node version, Docker version)
5. **Relevant logs or screenshots**

---

## 📄 License

```
MIT License

Copyright (c) 2024 ResumeIQ Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

See [LICENSE](./LICENSE) for the full text.

---

## 🙏 Acknowledgements

A genuine thank you to the open-source ecosystem that made ResumeIQ possible:

| Project | Contribution |
|---|---|
| [Lenis](https://github.com/darkroomengineering/lenis) | The buttery smooth scroll magic |
| [Google Gemini](https://ai.google.dev/) | The AI brain powering every analysis |
| [LangChain](https://langchain.com/) | LLM orchestration that actually works |
| [FastAPI](https://fastapi.tiangolo.com/) | The Python microservice backbone |
| [Tailwind CSS](https://tailwindcss.com/) | Making styling fast and beautiful |
| [Framer Motion](https://www.framer.com/motion/) | Animations that feel alive |
| [MongoDB](https://mongodb.com/) | Flexible data storage at every layer |
| [Render](https://render.com/) | Deployment that just works |
| [Docker](https://docker.com/) | Reproducible everything |
| [Vite](https://vitejs.dev/) | Developer experience at light speed |

---

## 👤 Author

<div align="center">

### Built with 💙 by [Krish](https://github.com/krish12388)

[![GitHub](https://img.shields.io/badge/GitHub-krish12388-181717?style=for-the-badge&logo=github)](https://github.com/krish12388)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/krish12388)

*If ResumeIQ helped you land a better job, star the repo ⭐ — it means the world.*

</div>

---

<div align="center">

**[⬆ Back to Top](#-resumeiq)**

<br/>

*ResumeIQ — Because your resume deserves better than a spellcheck.*

[![Live Demo](https://img.shields.io/badge/🚀%20Try%20ResumeIQ%20Live-brightgreen?style=for-the-badge)](https://resumeiq-frontend-v8en.onrender.com/)

</div>
