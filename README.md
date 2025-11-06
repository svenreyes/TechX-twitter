# TechX Twitter — a campus microblog for UNC TechX

A lightweight Twitter-style feed for TechX members to post updates, react, and keep the convo going.  
I built this as my **TechX initiation project** to showcase full-stack fundamentals and ship a clean, modern social app experience.

> - Demonstrates product thinking: scoped a simple, sticky social experience for a real community.  
> - Shows delivery: auth, posting, feed, and UI polish in a modern Next.js stack.  
> - Highlights pragmatic tradeoffs: Supabase for auth + data, Vercel for ship-fast hosting.

---

## ✨ Features

- **Member feed**: create short posts to share updates with the org  
- **Auth**: email or OAuth (via Supabase)  
- **Modern UI**: responsive layout, accessible components, keyboard-friendly  
- **Fast DX**: TypeScript, Next.js App Router, Tailwind, and shadcn/ui  
- **Deploy-first mindset**: built for Vercel; easy local spin-up for reviewers

> 📌 **Note on the live demo**  
> This was running on a Supabase project. Free projects can hibernate/expire after inactivity.  
> If the demo is asleep, clone and run locally in 2–3 minutes (see below) or re-provision Supabase using the env vars section.

---

## 🧱 Tech Stack

- **Framework**: Next.js (App Router) + TypeScript  
- **UI**: Tailwind CSS, shadcn/ui  
- **Auth & DB**: Supabase (Postgres + Auth)  
- **Hosting**: Vercel

---

## Project Tour

/src/app – App Router pages and route handlers

/src/components – Reusable UI components (shadcn/ui styled)

/src/lib – Client helpers (e.g., Supabase client) and utilities

/public – Static assets

---

## Security & Auth Notes

Protected routes require a valid session from Supabase Auth.

RLS policies ensure users can only create and read posts as permitted.

Client keys are anon keys; privileged operations must remain server-side.
