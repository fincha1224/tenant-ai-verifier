
# 🏠 Tenant AI Verifier

[![Vercel](https://img.shields.io/badge/deploy-vercel-000000?style=flat&logo=vercel)](https://vercel.com)  
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=nextdotjs)](https://nextjs.org/)  
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-blue?style=flat&logo=tailwind-css)](https://tailwindcss.com/)  
[![Supabase](https://img.shields.io/badge/Supabase-DB-green?style=flat&logo=supabase)](https://supabase.com/)  
[![n8n](https://img.shields.io/badge/n8n-Automation-orange?style=flat&logo=n8n)](https://n8n.io/)  
[![License](https://img.shields.io/badge/License-Private-red?style=flat)](#)

AI-powered Document Verification, Fraud Detection & Credit Assessment for Property Managers.

---

## 🚀 Features

- **Document Intake**
  - Upload multiple required & optional documents
  - Camera, desktop, USB, cloud support
- **AI Document Verification**
  - Detect tampering, identity mismatch, document type errors
- **Credit & Fraud Engine**
  - API-based credit check
  - Fraud scoring
  - Cross-document consistency checks
- **Automated Decisioning**
  - Auto-decide: Approve / Manual Review / Reject
  - Email notifications to property managers
- **Supabase Database**
  - Tables: rental_applications, rental_documents, rental_verifications, ai_agent_decisions, fraud_checks, credit_checks, upload_sessions, audit_logs
- **Next.js Frontend**
  - Mobile-first, fast upload, Vercel-ready
- **n8n Automation**
  - Workflow 1: Document Intake
  - Workflow 2: Fraud + Credit + AI Decision

---

## 📐 System Architecture

Next.js (Vercel)
↓ submits FormData
n8n → Workflow 1
→ Validate uploads
→ Save metadata to Supabase
→ Trigger Workflow 2

n8n → Workflow 2
→ Fraud Detection
→ Credit Check
→ AI Decision Engine
→ Save decision to Supabase
→ Email notifications


---

## 🗂️ Folder Structure

tenant-ai-verifier/
├─ app/
│ ├─ page.tsx
│ ├─ layout.tsx
│ └─ api/
│ └─ submit/route.ts
├─ components/
├─ public/
├─ styles/
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ next.config.mjs
└─ README.md


---

## ⚙️ Environment Variables

Create `.env.local`:

NEXT_PUBLIC_API_BASE=
N8N_WEBHOOK_URL=
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
CREDIT_API_KEY=
CLAUDE_API_KEY=
EMAIL_API_KEY=


---

## 🛠️ Deployment Guide

### 1. Frontend (Vercel)
1. Push project to GitHub  
2. Go to [Vercel](https://vercel.com) → New Project → Import Repository  
3. Add environment variables  
4. Deploy

### 2. Supabase
- Already deployed
- Add Supabase URL & keys to `.env.local`

### 3. n8n
- Already deployed
- Use production webhook:  
  `http://143.198.139.31:5678/webhook/upload-documents`

---

## 🔧 Test Your System

1. Open frontend: `/upload`  
2. Upload sample documents  
3. Check n8n Workflow 1 trigger  
4. Workflow 2 auto-runs → AI + Fraud + Credit  
5. Check Supabase tables for results  
6. Confirm decision emails received  

---

## 🧭 Future Enhancements

- Real-time property manager dashboard  
- Stripe payment integration for application fees  
- Multi-language support  
- PDF AI redaction / OCR + Face Match  
- Equifax/TransUnion integration (optional)  

---

## 👨‍💼 Author
**Dinku Adale**, Industrial Chemist, Computer Scientist, MBA — building AI automation for real estate verification.

---

## ✔ License
Private – Not open-source unless decided otherwise.
