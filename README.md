<!-- # 🛒 Shopping Todo App (NestJS + Next.js + Docker)

A small fullstack web app built to demonstrate modern web development stack.

## Tech Stack
- Frontend: Next.js + TailwindCSS
- Backend: NestJS + Prisma + PostgreSQL
- Containerization: Docker & Docker Compose

## Features
- User: Register, Add/Delete shopping items
- Admin: View all users and their items

## Run Locally
```bash
git clone ...
docker-compose up --build -->

# 🧩 Todo App (Full-Stack NestJS + NextJS + Docker)

> A small-scale **Todo management app** built for learning purposes — focusing on understanding backend structure with **NestJS**, authentication with **Passport + Cookies**, and containerization via **Docker**.

---

## 🚀 Tech Stack

| Layer           | Technology                                | Description                         |
| --------------- | ----------------------------------------- | ----------------------------------- |
| **Frontend**    | [Next.js 14](https://nextjs.org/)         | React-based frontend with SSR/ISR   |
|                 | [TailwindCSS](https://tailwindcss.com/)   | Utility-first styling               |
|                 | [shadcn/ui](https://ui.shadcn.com)        | Elegant UI components               |
| **Backend**     | [NestJS](https://nestjs.com/)             | TypeScript backend framework        |
|                 | [TypeORM](https://typeorm.io/)            | ORM for SQL databases               |
|                 | [PassportJS](https://www.passportjs.org/) | Authentication (JWT + Cookies)      |
| **Database**    | PostgreSQL (SQL)                          | Primary data store                  |
| **Container**   | [Docker](https://www.docker.com/)         | Containerization for full-stack dev |
| **Other Tools** | Axios, Zustand                            | API client and state management     |

---

## 🧠 Project Overview

**Todo App** is a demo full-stack web application that demonstrates:

- 🔑 Authentication with JWT (cookie-based)
- 🧍 Role-based Access Control (User / Admin)
- ✅ Task management system (CRUD)
- 🧱 Modular NestJS architecture with services, guards, and interceptors
- 🖥️ Frontend admin dashboard with sidebar navigation and breadcrumb
- 💾 Persistent SQL database using TypeORM
- 🐳 Full Docker support for local development

---

## 📁 Project Structure

project-root/
│
├── backend/ # NestJS backend
│ ├── src/
│ ├── Dockerfile
│ └── .env
│
├── frontend/ # Next.js frontend
│ ├── app/
│ ├── components/
│ ├── Dockerfile
│ └── .env
│
├── docker-compose.yml
└── README.md

---

Setup

---

🧰 Commands Reference
Command Description
npm run dev Run development server
npm run build Build production version
npm run start Start production server
docker-compose up Run all containers
docker-compose down Stop and remove containers
🔐 Authentication Flow

User logs in via /auth/login

Backend issues JWT token and sets it as HTTP-only cookie

Frontend stores role & minimal session info in Zustand (for UI)

Middleware protects /admin route using cookie validation

🧭 Features Summary

📝 Add, edit, delete tasks

✅ Toggle task status (Pending / Done)

🎨 Smooth animation for task update and delete

🧍 Admin dashboard with sidebar + table view

🔒 Middleware-based route protection

⚙️ Role management via JWT payload

🧱 Containerized full-stack system

📸 Screenshots (optional)

Add your UI screenshots here for better documentation.

🤝 Contributing

Feel free to fork, modify, and experiment with this project.
It’s designed to be a learning sandbox for practicing NestJS + NextJS integration.

🪄 Author

Thanapat Tongyam
Full-stack Web Developer
