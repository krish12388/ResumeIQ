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

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express_5-000000?style=flat-square&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=flat-square&logo=docker&logoColor=white)
![Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=flat-square&logo=google&logoColor=white)

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
  - [Why Microservices?](#why-microservices)
  - [Service Overview](#service-overview)
  - [Inter-Service Communication](#inter-service-communication)
  - [Responsibility Boundaries](#responsibility-boundaries)
  - [Docker Container Architecture](#docker-container-architecture-1)
- [System Design Notes](#-system-design-notes)
- [Folder Structure](#-folder-structure)
- [Installation & Setup](#-installation--setup)
- [Development Commands](#-development-commands)
- [Docker Section](#-docker-section)
- [Environment Variables](#-environment-variables)
- [API Workflow](#-api-workflow)
- [Performance & UX](#-performance--ux)
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
- 🏗️ Clean microservices architecture across dedicated Node.js services
- 🐳 Fully Dockerized for consistent deployment across any environment
- 🔐 Google OAuth integration for frictionless sign-in

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
| Google OAuth Sign-In | ✅ | ❌ |
| Dockerized Deployment | ✅ | ❌ |
| Smooth Scrolling UX (Lenis) | ✅ | ❌ |
| Open Source | ✅ | ❌ |

### Why Centralized Job Discovery Matters

Traditional job searches are scattered. Candidates visit LinkedIn, Indeed, Naukri, Glassdoor, and company career pages independently. ResumeIQ aggregates opportunities and presents them alongside your resume analysis, giving you **context-aware job suggestions** aligned with your actual skill profile.

</details>

---

## 🚀 Key Features

### 1. 🤖 AI Resume Analysis
Powered by **Google Gemini**, ResumeIQ performs a deep-dive analysis of your resume — identifying skill gaps, weak action verbs, missing keywords, formatting issues, and overall impact. It doesn't just scan; it *understands* your career narrative.

### 2. 🎯 ATS Compatibility Scoring
Modern recruitment runs through Applicant Tracking Systems that reject resumes before a human ever reads them. ResumeIQ simulates ATS parsing, scores your resume on keyword density, formatting compliance, section completeness, and role alignment — giving you a percentage score with actionable fixes.

### 3. 💡 AI Suggestions & Improvements
Every weakness identified comes with a concrete AI-generated improvement. Want a better summary line? Need to quantify your achievements? ResumeIQ suggests specific rewrites, not vague advice.

### 4. 🗺️ Centralized Job Discovery System
A unified job discovery panel powered by **SerpApi** aggregates job opportunities matched against your resume profile. One platform, zero tab-switching.

### 5. 🎤 Interview Report Generation
After resume analysis, ResumeIQ generates a personalized interview preparation report — anticipating questions a recruiter might ask based on your resume gaps, role target, and experience level.

### 6. 🔥 Resume Roast Feature
*The crowd favorite.* When you need brutal honesty instead of polished corporate feedback, hit **Roast My Resume**. Our AI tears into your resume with sharp, witty, painfully accurate commentary. It's the feedback your friends were too kind to give you — wrapped in humor, packed with truth, and surprisingly actionable.

> *"Your resume says 'team player' in 2024. Bold choice."* — ResumeIQ Roast Engine

### 7. 🌊 Smooth UX with Lenis Scroll
ResumeIQ uses **Lenis** — a high-performance smooth scrolling library — to deliver a buttery, momentum-based scrolling experience. Every page transition feels intentional. Every scroll feels alive.

### 8. 🔐 Authentication & Google OAuth
Secure **JWT-based authentication** with **Google OAuth** (`@react-oauth/google` + `googleapis`) lets users sign in quickly. Session management ensures your resume data, analysis history, and job tracking are private and persistent.

### 9. ⚡ Real-Time Feedback Loop
AI analysis results are streamed and rendered in real-time — no waiting on full-page reloads. Users see their scores, suggestions, and roast feedback as it generates.

### 10. 🐳 Dockerized Deployment
Each service runs inside a Docker container built on **Node 22 Alpine** and deployed as a lean **distroless Node 22** image. Docker Compose orchestrates the full stack with a single command.

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
| React | UI Framework | 19.x |
| Vite | Build Tool & Dev Server | 8.x |
| Tailwind CSS | Utility-first Styling | 4.x |
| Lenis | Smooth Scroll Animation | 1.x |
| React Router | Client-side Routing | 7.x |
| Axios | HTTP Client | 1.x |
| Recharts | Data Visualization / Charts | 3.x |
| React Hot Toast | Toast Notifications | 2.x |
| @react-oauth/google | Google OAuth Sign-In | 0.13.x |

> **Note:** The frontend is written in plain **JavaScript** (not TypeScript). No Zustand, no Framer Motion, no React Hook Form.

### Auth Service (Node.js)

| Technology | Purpose | Version |
|---|---|---|
| Node.js | Runtime Environment | 22.x |
| Express.js | REST API Framework | 5.x |
| MongoDB | Primary NoSQL Database | — |
| Mongoose | ODM for MongoDB | 9.x |
| JWT (`jsonwebtoken`) | Authentication Tokens | 9.x |
| Bcrypt | Password Hashing | 6.x |
| googleapis | Google OAuth verification | 171.x |
| cookie-parser | Cookie Handling | 1.x |
| CORS | Cross-Origin Security | 2.x |

### Main / AI Service (Node.js)

| Technology | Purpose | Version |
|---|---|---|
| Node.js | Runtime Environment | 22.x |
| Express.js | REST API Framework | 5.x |
| @google/genai | Google Gemini AI SDK | 2.x |
| pdf-parse | PDF Text Extraction | 2.x |
| Multer | File Upload Handling | 2.x |
| Zod | Input Validation & Schema | 4.x |
| zod-to-json-schema | Schema serialization for AI | 3.x |
| Mongoose | ODM for MongoDB | 9.x |
| serpapi | Job Discovery via Search API | 2.x |

> **Note:** There is **no Python service, no FastAPI, and no LangChain** in this project. All AI logic runs through the Node.js main service using the `@google/genai` SDK directly.

### DevOps & Infrastructure

| Technology | Purpose |
|---|---|
| Docker | Containerization (Node 22 Alpine → Distroless Node 22) |
| Docker Compose | Multi-service Orchestration |
| Render | Cloud Deployment Platform |
| GitHub | Version Control |
| dotenv | Environment Variable Management |
| nodemon | Development Hot Reload |

---

## 🏗️ Architecture

### Why Microservices?

ResumeIQ is deliberately built as a **microservices-based platform** rather than a single monolithic Express application. This was not an accidental complexity — it was a purposeful architectural decision rooted in the nature of the problem domain.

#### The Monolith Problem

A single Express app handling auth, AI analysis, file uploads, job discovery, and PDF parsing sounds simple to start. In practice it creates serious structural problems:

```
Monolith Reality:
──────────────────────────────────────────────────
One codebase, every concern tangled together
       │
       ├── Auth bug? Redeploy the entire app
       ├── Gemini API slow? Blocks all other requests
       ├── File upload crash? Takes down login too
       ├── Want to scale AI calls? Must scale everything
       └── New developer? Needs context for all features
```

Auth logic and AI logic have completely different:
- **Failure modes** — a JWT signing error should never affect PDF parsing
- **Scaling needs** — AI calls are expensive; auth calls are cheap
- **Deployment cadence** — auth rarely changes; AI prompts iterate constantly
- **Security surface** — file upload handling should be isolated from credential management

Keeping them in one process means one failure domain, one deployment risk, and one scaling bottleneck for everything.

#### The Microservices Solution

```
Microservices Reality:
──────────────────────────────────────────────────
Each service owns exactly one responsibility
       │
       ├── Auth Service    → identity, sessions, OAuth
       ├── Main/AI Service → resume intelligence, jobs
       └── Each deploys, scales, and fails independently
```

ResumeIQ splits into **two backend services** — a natural, justified boundary:

| Concern | Service | Why Separated |
|---|---|---|
| User identity, JWT issuance, Google OAuth, password hashing | **Auth Service** | Security-sensitive; must be isolated from file I/O and AI calls |
| Resume upload, PDF parsing, Gemini AI, ATS scoring, roast, job discovery | **Main/AI Service** | Heavy I/O and external API calls; needs independent scaling |

#### Benefits Realized in ResumeIQ

| Benefit | Concrete Impact |
|---|---|
| 🔒 **Fault Isolation** | Gemini API timeout or rate-limit doesn't affect user login |
| 📈 **Independent Scaling** | Main service (AI-heavy) can be scaled up on Render without touching auth |
| 🚀 **Independent Deployments** | Updating a Gemini prompt only redeploys the main service |
| 🧩 **Separation of Concerns** | Auth owns identity; main service owns intelligence — no overlap |
| 🛡️ **Smaller Security Surface** | File upload handling (Multer, pdf-parse) is never in the same process as password hashing (bcrypt) or token signing |
| 👥 **Parallel Development** | Auth and AI features can be developed and tested completely independently |
| 🐳 **Container Isolation** | Each service runs in its own distroless container; a crash is fully contained |

---

### Service Overview

ResumeIQ is split into three independent Node.js services plus a React frontend. Each service communicates over REST on Docker's internal bridge network — only the ports you explicitly expose are reachable from outside.

```
┌─────────────────────────────────────────────────────────────────┐
│                         CLIENT LAYER                            │
│          React 19 + Tailwind CSS 4 + Lenis + Vite 8             │
└───────────────┬──────────────────────────┬──────────────────────┘
                │                          │
                │ /auth/*                  │ /api/*
                ▼                          ▼
┌───────────────────────────┐  ┌───────────────────────────────┐
│       Auth Service        │  │       Main / AI Service       │
│   Express 5 · Node 22     │  │     Express 5 · Node 22       │
│                           │  │                               │
│  • JWT issuance & verify  │  │  • Resume upload (Multer)     │
│  • Google OAuth (googleapis│  │  • PDF parsing (pdf-parse)    │
│  • Password hash (bcrypt) │  │  • AI analysis (@google/genai)│
│  • User registration      │  │  • ATS scoring (Gemini)       │
│  • Session management     │  │  • Resume Roast (Gemini)      │
│                           │  │  • Interview report (Gemini)  │
│  Port: 3001               │  │  • Job discovery (SerpApi)    │
└───────────┬───────────────┘  │  • Input validation (Zod)     │
            │                  │                               │
            │                  │  Port: 3002                   │
            └────────┬─────────┘
                     │
                     ▼
        ┌────────────────────────┐
        │       Data Layer       │
        │   MongoDB · Mongoose   │
        │   Port: 27017          │
        └────────────┬───────────┘
                     │
                     ▼
        ┌────────────────────────┐
        │     External APIs      │
        │  Google Gemini API     │
        │  Google OAuth API      │
        │  SerpApi               │
        └────────────────────────┘
```

---

### Inter-Service Communication

Services talk to each other over **Docker's internal bridge network** (`resumeiq-net`). Docker Compose service names act as hostnames — no service is reachable from the public internet except through explicitly published ports.

```
Frontend  →  Auth Service    (via VITE_AUTH_URL, e.g. http://auth-service:3001)
Frontend  →  Main Service    (via VITE_API_URL,  e.g. http://main-service:3002)
Main Svc  →  Auth Service    (JWT verification on protected routes)
Both Svcs →  MongoDB         (via MONGO_URI = mongodb://mongodb:27017/resumeiq)
Main Svc  →  Gemini API      (external HTTPS, GEMINI_API_KEY)
Main Svc  →  SerpApi         (external HTTPS, SERPAPI_KEY)
Auth Svc  →  Google OAuth    (external HTTPS, GOOGLE_CLIENT_ID/SECRET)
```

No service reaches into another service's database collection directly. Each owns its own data domain.

---

### Responsibility Boundaries

A clear boundary rule was enforced throughout development:

> **If it's about who you are → Auth Service.**  
> **If it's about what your resume says → Main/AI Service.**

This single rule prevented scope creep and kept each service's `package.json` lean and purposeful. The auth service has zero AI dependencies. The main service has zero password/OAuth dependencies. They share only the JWT secret to verify tokens.

---

### Docker Container Architecture

Each service uses an identical **multi-stage Dockerfile** pattern: build on Node 22 Alpine (small, fast), then copy the production-only output into a **distroless Node 22** image. Distroless has no shell, no package manager, no OS utilities — just the Node runtime and your app. This dramatically reduces the attack surface and image size.

```dockerfile
# Stage 1 — Install production deps only
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev      # strips devDependencies
COPY . .

# Stage 2 — Minimal runtime, no shell
FROM gcr.io/distroless/nodejs22-debian12
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3002
CMD ["index.js"]
```

All four containers share a single Docker bridge network so they resolve each other by name:

```
┌──────────────────────────────────────────────────────────┐
│                  Docker Network: resumeiq-net             │
│                                                           │
│  ┌──────────┐   ┌──────────────┐   ┌──────────────────┐  │
│  │ frontend │   │ auth-service │   │  main-service    │  │
│  │  :5173   │   │    :3001     │   │      :3002       │  │
│  └──────────┘   └──────┬───────┘   └────────┬─────────┘  │
│                        │                    │             │
│                 ┌──────▼────────────────────▼──────┐      │
│                 │           mongodb                │      │
│                 │            :27017                │      │
│                 └──────────────────────────────────┘      │
└──────────────────────────────────────────────────────────┘
```

---

## 🗂️ System Design Notes

<details>
<summary>Expand system design details</summary>

### Data Flow: Resume Analysis Pipeline

```
1. User uploads PDF resume via frontend (multipart/form-data)
        ↓
2. Main Service receives upload → Multer processes the file
        ↓
3. pdf-parse extracts raw text from the PDF
        ↓
4. Extracted text + job role context sent to Google Gemini
   via @google/genai SDK with Zod-validated structured output
        ↓
5. Gemini returns structured JSON: { score, weaknesses, suggestions, keywords }
        ↓
6. Result stored in MongoDB (Mongoose) with user session reference
        ↓
7. Response streamed back to frontend for real-time rendering
        ↓
8. User sees live ATS score, suggestions, and optional Roast feedback
```

### Input Validation

All API inputs are validated with **Zod** schemas before any processing. `zod-to-json-schema` is used to serialize schemas into JSON Schema format, which can be passed to Gemini to enforce structured output.

### Job Discovery

Job listings are fetched on-demand via **SerpApi** (`serpapi` package used on both frontend and main service). Results are filtered against the user's resume keywords at request time and are **not persisted** to MongoDB.

### Authentication Flow

The auth service handles all user registration, login, and Google OAuth token verification (`googleapis`). It issues JWTs that the main service validates on protected routes.

</details>

---

## 📁 Folder Structure

```bash
ResumeIQ/
│
├── frontend/                          # React 19 + Vite 8 frontend
│   ├── public/
│   │   └── assets/                    # Static images, icons, fonts
│   ├── src/
│   │   ├── components/                # Reusable UI components
│   │   │   ├── ui/                    # Base design system components
│   │   │   ├── layout/               # Navbar, Footer, PageWrapper
│   │   │   ├── resume/               # ResumeUploader, ATSScoreChart, RoastPanel
│   │   │   ├── jobs/                 # JobCard, JobFilters, JobGrid
│   │   │   └── interview/            # ReportCard, QuestionList
│   │   ├── pages/                    # Route-level page components
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ResumeAnalysis.jsx
│   │   │   ├── JobDiscovery.jsx
│   │   │   ├── InterviewReport.jsx
│   │   │   ├── ResumeRoast.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── services/                 # Axios API clients
│   │   │   ├── api.js
│   │   │   ├── resumeService.js
│   │   │   ├── authService.js
│   │   │   ├── jobService.js
│   │   │   └── interviewService.js
│   │   ├── utils/
│   │   │   └── lenis.js              # Lenis smooth scroll initializer
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .env.example
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── Dockerfile
│
├── auth-service/                     # Auth microservice (Node.js / Express 5)
│   ├── index.js                      # App entry point
│   ├── controllers/
│   │   └── authController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── authRoutes.js
│   ├── config/
│   │   └── db.js
│   ├── .env.example
│   ├── package.json
│   └── Dockerfile
│
├── main-service/                     # Main + AI service (Node.js / Express 5)
│   ├── index.js                      # App entry point
│   ├── routers/
│   │   ├── analyze.js                # Resume analysis endpoints
│   │   ├── roast.js                  # Resume Roast engine
│   │   ├── ats.js                    # ATS scoring logic
│   │   ├── interview.js              # Interview report generation
│   │   └── jobs.js                   # Job discovery via SerpApi
│   ├── services/
│   │   ├── geminiService.js          # @google/genai integration
│   │   └── pdfParser.js              # pdf-parse text extraction
│   ├── models/
│   │   ├── Resume.js
│   │   └── Analysis.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── upload.js                 # Multer config
│   │   └── validate.js               # Zod validation middleware
│   ├── .env.example
│   ├── package.json
│   └── Dockerfile
│
├── docker/
│   ├── docker-compose.yml
│   ├── docker-compose.dev.yml
│   └── docker-compose.prod.yml
│
├── .gitignore
├── .dockerignore
├── README.md
└── LICENSE
```

---

## ⚙️ Installation & Setup

### Prerequisites

| Tool | Required Version | Install |
|---|---|---|
| Node.js | >= 22.x | [nodejs.org](https://nodejs.org) |
| npm | >= 10.x | Bundled with Node |
| Docker | >= 24.x | [docker.com](https://docker.com) |
| Docker Compose | >= 2.x | Bundled with Docker Desktop |
| Git | >= 2.x | [git-scm.com](https://git-scm.com) |

> **No Python required.** All services are Node.js.

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/krish12388/ResumeIQ.git
cd ResumeIQ
```

---

### 2️⃣ Environment Configuration

```bash
# Frontend
cp frontend/.env.example frontend/.env

# Auth Service
cp auth-service/.env.example auth-service/.env

# Main / AI Service
cp main-service/.env.example main-service/.env
```

---

### 3️⃣ Frontend Setup (Manual)

```bash
cd frontend
npm install
npm run dev
```

> Frontend runs at `http://localhost:5173`

---

### 4️⃣ Auth Service Setup (Manual)

```bash
cd auth-service
npm install
npm run dev
```

---

### 5️⃣ Main / AI Service Setup (Manual)

```bash
cd main-service
npm install
npm run dev
```

---

### 6️⃣ Full Stack via Docker (Recommended)

```bash
docker compose -f docker/docker-compose.yml up --build
```

This single command starts:
- ✅ React frontend (port 5173)
- ✅ Auth service
- ✅ Main / AI service (port 3002)
- ✅ MongoDB instance (port 27017)

---

## 💻 Development Commands

### Frontend

```bash
cd frontend

npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Lint the codebase
```

### Auth Service

```bash
cd auth-service

npm run dev        # Start with nodemon (hot reload)
npm start          # Start production server
```

### Main / AI Service

```bash
cd main-service

npm run dev        # Start with nodemon (hot reload)
```

---

## 🐳 Docker Section

### Multi-Stage Dockerfile Pattern

Every service uses the same optimized pattern:

```dockerfile
# Stage 1: Build (strips devDependencies)
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .

# Stage 2: Run (minimal distroless image)
FROM gcr.io/distroless/nodejs22-debian12
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3002
CMD ["index.js"]
```

This results in lean, secure production images with no shell, no package manager, and no unnecessary tooling.

### Key Docker Commands

```bash
# Build and start all services
docker compose -f docker/docker-compose.yml up --build

# Start in detached mode
docker compose -f docker/docker-compose.yml up -d --build

# Stop all containers
docker compose -f docker/docker-compose.yml down

# Stop and remove volumes (fresh DB)
docker compose -f docker/docker-compose.yml down -v

# View logs (follow mode)
docker compose -f docker/docker-compose.yml logs -f

# Rebuild a single service
docker compose -f docker/docker-compose.yml up --build main-service

# View resource usage
docker stats
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
      - VITE_AUTH_URL=http://auth-service:3001
      - VITE_API_URL=http://main-service:3002
    depends_on:
      - auth-service
      - main-service
    networks:
      - resumeiq-net

  auth-service:
    build:
      context: ../auth-service
      dockerfile: Dockerfile
    environment:
      - MONGO_URI=mongodb://mongodb:27017/resumeiq
      - JWT_SECRET=${JWT_SECRET}
      - GOOGLE_CLIENT_ID=${GOOGLE_CLIENT_ID}
      - GOOGLE_CLIENT_SECRET=${GOOGLE_CLIENT_SECRET}
    depends_on:
      - mongodb
    networks:
      - resumeiq-net

  main-service:
    build:
      context: ../main-service
      dockerfile: Dockerfile
    ports:
      - "3002:3002"
    environment:
      - MONGO_URI=mongodb://mongodb:27017/resumeiq
      - GEMINI_API_KEY=${GEMINI_API_KEY}
      - SERPAPI_KEY=${SERPAPI_KEY}
      - JWT_SECRET=${JWT_SECRET}
    depends_on:
      - mongodb
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
VITE_AUTH_URL=http://localhost:3001/api
VITE_API_URL=http://localhost:3002/api
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_SERPAPI_KEY=your_serpapi_key
```

### Auth Service (`auth-service/.env`)

```env
PORT=3001
NODE_ENV=development

MONGO_URI=mongodb://localhost:27017/resumeiq

JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

ALLOWED_ORIGINS=http://localhost:5173
```

### Main / AI Service (`main-service/.env`)

```env
PORT=3002
NODE_ENV=development

MONGO_URI=mongodb://localhost:27017/resumeiq

JWT_SECRET=your_super_secret_jwt_key

# Google Gemini
GEMINI_API_KEY=your_gemini_api_key

# Job Discovery
SERPAPI_KEY=your_serpapi_key

# File Upload
MAX_FILE_SIZE_MB=10

ALLOWED_ORIGINS=http://localhost:5173
```

---

## 🔄 API Workflow

### Resume Analysis Pipeline

```
POST /api/resume/analyze
        │
        ├── JWT validated via authMiddleware
        ├── Multer processes uploaded PDF
        ├── pdf-parse extracts raw text
        ├── Zod validates request body
        ├── @google/genai calls Gemini with structured output schema
        │       (zod-to-json-schema converts Zod schema → JSON Schema for Gemini)
        ├── Result stored in MongoDB
        └── Frontend receives and renders analysis
```

### ATS Scoring Flow

```
POST /api/resume/ats-score
        ├── PDF text extracted via pdf-parse
        ├── Target job role provided by user
        ├── Gemini compares resume keywords vs. role keywords
        └── Returns { score: 78, missing: [...], suggestions: [...] }
```

### Resume Roast Flow

```
POST /api/resume/roast
        ├── Same PDF extraction pipeline
        ├── Roast-specific prompt sent to Gemini
        └── Returns { roastSections: [...], overallVerdict: "..." }
```

### Job Discovery Flow

```
GET /api/jobs?role=engineer&location=remote
        ├── SerpApi queried for live job listings
        ├── Results optionally filtered against resume keywords
        └── Frontend renders job cards with match indicators
```

---

## 📊 Performance & UX

### Smooth Scrolling with Lenis

```javascript
// utils/lenis.js
import Lenis from "lenis";

export const initLenis = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time) {
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
| 🐳 Lean Docker Images | Distroless Node 22 for minimal attack surface |

---

## 🔒 Security Considerations

| Layer | Measure |
|---|---|
| 🔑 **Authentication** | JWT tokens with configurable expiry + Google OAuth via `googleapis` |
| 🔒 **Password Security** | Bcrypt hashing with salting |
| 🌐 **CORS Policy** | Strict origin whitelist via environment variable |
| 🐳 **Container Security** | Distroless production images — no shell, no package manager |
| 📁 **File Uploads** | Multer validates MIME type, enforces size limits, rejects non-PDF files |
| 🔐 **Secrets Management** | All secrets in `.env` files, never committed to version control |
| ✅ **Input Validation** | All API inputs validated with Zod schemas before processing |

---

## 🧱 Challenges Faced During Development

### 1. Docker Networking

Getting inter-container networking right was the biggest time sink. Service names as hostnames sounds simple until your main service can't reach MongoDB because of missing `networks:` declarations in `docker-compose.yml`. Lesson: **always explicitly define networks for every service.**

### 2. Docker Compose Service Dependency Ordering

`depends_on` only waits for a container to *start*, not for the service inside to be *ready*. The backend was crashing on startup because MongoDB's TCP port was open but not yet accepting connections. Fixed with retry logic in the DB connection code.

### 3. Structured Output from Gemini

Getting Gemini to return consistently structured JSON — especially for the Roast feature — required careful prompt engineering combined with **Zod schemas serialized via `zod-to-json-schema`** to pass explicit output schemas to the model. Early iterations returned beautifully written roasts as unstructured markdown prose.

### 4. PDF Parsing Edge Cases

`pdf-parse` handles most PDFs well, but heavily formatted or image-based resumes can produce garbled or empty text. Added fallback handling and user-facing error messaging for unreadable PDFs.

### 5. Google OAuth Across Services

Coordinating Google OAuth between the frontend (`@react-oauth/google`), the auth service (`googleapis`), and JWT issuance required careful token handoff design to avoid race conditions and token leakage.

### 6. CORS in Multi-Container Setup

During development, CORS was configured for `localhost`. In Docker, services communicate via service names, not `localhost`. Fixed with environment-aware CORS configuration using `ALLOWED_ORIGINS`.

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

ResumeIQ is deployed on **Render** with auto-deploy from GitHub.

| Service | Render Service Type |
|---|---|
| Frontend | Static Site / Web Service |
| Auth Service | Web Service (Node.js) |
| Main / AI Service | Web Service (Node.js) |
| MongoDB | External (MongoDB Atlas) |

### Deployment Checklist

```bash
# 1. Set all .env variables in Render's environment panel
# 2. Confirm build commands per service (npm install && npm start)
# 3. Configure health check endpoints (/health on each service)
# 4. Whitelist Render outbound IPs in MongoDB Atlas
# 5. Verify Docker builds locally before pushing
```

---

## 🤝 Contributing

### Contribution Workflow

```bash
# 1. Fork the repository

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/ResumeIQ.git

# 3. Create a feature branch
git checkout -b feat/ai-interview-simulator

# 4. Commit your changes
git commit -m "feat(ai): add conversational interview simulator endpoint"

# 5. Push and open a Pull Request
git push origin feat/ai-interview-simulator
```

### Commit Convention

| Type | When to Use |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `refactor:` | Code restructure, no feature/fix |
| `chore:` | Build, CI, config changes |

### Pull Request Guidelines

- ✅ Target the `dev` branch, not `main`
- ✅ Include a clear description of what changed and why
- ✅ Add screenshots for UI changes
- ✅ Run lint before submitting (`npm run lint`)
- ✅ Reference related issues with `Closes #issue_number`

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

---

## 🙏 Acknowledgements

| Project | Contribution |
|---|---|
| [Lenis](https://github.com/darkroomengineering/lenis) | Buttery smooth scroll |
| [Google Gemini](https://ai.google.dev/) | AI brain powering every analysis |
| [@google/genai](https://www.npmjs.com/package/@google/genai) | Official Gemini Node.js SDK |
| [SerpApi](https://serpapi.com/) | Job discovery search API |
| [Tailwind CSS](https://tailwindcss.com/) | Fast, beautiful styling |
| [Recharts](https://recharts.org/) | ATS score visualizations |
| [MongoDB](https://mongodb.com/) | Flexible data storage |
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
