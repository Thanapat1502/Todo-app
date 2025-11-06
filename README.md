# 🧩 Todo App (Full-Stack NestJS + NextJS + Docker)

> A small-scale **Todo management app** built for learning and demonstration — focusing on backend design with **NestJS**, authentication via **Passport + Cookies**, and full containerization with **Docker**.

---

## 🚀 Tech Stack

| Layer           | Technology                                | Description                       |
| --------------- | ----------------------------------------- | --------------------------------- |
| **Frontend**    | [Next.js 14](https://nextjs.org/)         | React-based frontend with SSR     |
|                 | [TailwindCSS](https://tailwindcss.com/)   | Utility-first CSS framework       |
|                 | [shadcn/ui](https://ui.shadcn.com)        | Elegant UI components             |
| **Backend**     | [NestJS](https://nestjs.com/)             | TypeScript backend framework      |
|                 | [TypeORM](https://typeorm.io/)            | ORM for SQL databases             |
|                 | [PassportJS](https://www.passportjs.org/) | Authentication (JWT + Cookies)    |
| **Database**    | [PostgreSQL](https://www.postgresql.org/) | SQL database                      |
| **Container**   | [Docker](https://www.docker.com/)         | Full-stack containerization       |
| **State / API** | Zustand + Axios                           | Lightweight state and API manager |

---

## 🧠 Project Overview

**Todo App** is a full-stack demo application demonstrating:

- 🔐 Cookie-based JWT authentication
- 🧍 Role-based access (User / Admin)
- ✅ Task CRUD management (Add, Edit, Delete, Toggle)
- 🧱 Modular NestJS structure with services, guards, and repositories
- 🖥️ Admin dashboard with sidebar navigation and user management
- 💾 Persistent PostgreSQL database
- 🐳 Fully containerized using Docker Compose

---

## 📁 Project Structure

```
project-root/
│
├── backend/ # NestJS backend
│ ├── src/
│ ├── Dockerfile
│ └── ...
│
├── frontend/ # Next.js frontend
│ ├── app/
│ ├── components/
│ ├── Dockerfile
│ └── ...
│
├── db/
│ └── seed.sql # Sample data for demo (auto-loaded on first run)
│
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Quick Start (with Docker)

### 🐳 1. Prerequisites

Make sure you have:

- [Docker](https://www.docker.com/) installed
- [Docker Compose](https://docs.docker.com/compose/) v2 or newer

---

### 🚀 2. Run the app

From the **project root**, run:

```bash
docker compose up --build
```

### Docker will automatically:

- Build and start all containers (frontend, backend, db, pgadmin)

- Initialize database with sample data from db/seed.sql

### Once started:

- Frontend → http://localhost:3000

- Backend → http://localhost:4000

- pgAdmin → http://localhost:8080
  (admin@admin.com
  / admin)

  ***

### 💾 3. Test Accounts

Role Email Password
👑 Admin admin1@email.com Passw0rd
👤 User front3@email.com Passw0rd

---

### 🔧 4. Commands

| Command                   | Description                                   |
| ------------------------- | --------------------------------------------- |
| docker compose up --build | Build and start all containers                |
| docker compose down       | Stop all containers                           |
| docker compose down -v    | Stop and clear database volume                |
| docker logs <container>   | View container logs (e.g., backend, frontend) |

---

## 🔐 Authentication Flow

User logs in via /auth/login

Backend validates credentials → issues JWT

Token is stored as HTTP-only cookie

Middleware and guards validate cookies on protected routes

Frontend stores minimal session info in Zustand for UI rendering

---

## 🧭 Features Summary

📝 Add, edit, delete, toggle tasks

✅ Status animation (Pending ↔ Done)

🧍 Admin dashboard with sidebar navigation

🔒 Middleware-based access control for /admin routes

🎨 Responsive UI using Shadcn + Tailwind

🧩 Modular NestJS + NextJS code structure

🐳 Run everything with one docker compose up

---

## 🤝 Contributing

This project is intended as a learning sandbox for developers exploring:

- Full-stack Dockerized development

- NestJS + NextJS integration

- Cookie-based JWT authentication

Feel free to fork, modify, and extend this repo. Pull requests welcome!

---

## 🪄 Author

Thanapat Tongyam
Full-stack Web Developer
[🔗 GitHub](https://github.com/Thanapat1502)
[• LinkedIn](www.linkedin.com/in/thanapat-tongyam)
