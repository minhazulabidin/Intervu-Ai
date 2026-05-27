# <p align="center">[Intervu-Ai](https://ai-inter-vu.vercel.app/)</p>

<p align="center">Your AI-powered co-pilot for mastering technical interviews and accelerating career growth.</p>

<p align="center">
  <img alt="Build Status" src="https://img.shields.io/badge/build-passing-brightgreen" />
  <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" />
  <img alt="GitHub Stars" src="https://img.shields.io/github/stars/Intervu-Ai/Intervu-Ai?style=social" />
</p>

---

Intervu AI is a full-stack AI-powered mock interview platform that simulates real-world interview experiences. It allows users to generate personalized interview questions based on job roles and experience, answer them using voice input, and receive instant AI-driven feedback to improve performance.

---

## ✨ Key Features

### 🎯 AI-Powered Interview Generation
Generate custom interview questions based on job position, description, and experience level using Google Gemini AI.

### 🎤 Voice-Based Interview Practice
Answer questions using your microphone with real-time speech-to-text conversion for a realistic interview experience.

### 🧠 Instant AI Feedback
Each answer is analyzed by AI and provides:
- Score (0–10)
- Strengths
- Weaknesses
- Improvement suggestions

### 📊 Performance Dashboard
Track all previous interviews, review feedback, and monitor your improvement over time.

### 🔐 Secure Authentication
Authentication is handled via Clerk with secure webhook-based user synchronization.

### ⚡ Smooth User Experience
Modern UI with loading states, animations, and responsive design for all devices.

---


## 🛠️ Tech Stack

Frontend:
- Next.js (App Router)
- React
- Tailwind CSS
- Zustand
- Framer Motion
- Shadcn UI

Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- Clerk Webhooks
- Nodemailer

AI:
- Google Gemini AI

Deployment:
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

---

## 🔐 Security

- Environment-based configuration
- Strict CORS policy
- Secure authentication with Clerk
- No sensitive data exposed on frontend
- API validation before AI processing

---

## ⚙️ How It Works

1. User creates a mock interview (job role, description, experience)
2. AI generates relevant questions
3. User answers using microphone
4. Speech is converted to text in real time
5. AI evaluates answers and gives feedback
6. Results are stored in dashboard

---

## 🚀 Deployment

This project follows a separated architecture:

- Frontend → Vercel  
- Backend → Render  
- Database → MongoDB Atlas  
- AI → Google Gemini API  

All communication happens through secure REST APIs.

---

## 📈 Performance

- Optimized API calls
- Smooth loading states
- Responsive UI
- Efficient state management (Zustand)
- Fast backend response time

---

## 🧠 Future Improvements

- Live AI interviewer (voice conversation mode)
- Resume-based question generation
- Real-time voice feedback
- Leaderboard system
- Multi-language support

---

## 🧾 License

This project is for educational and portfolio purposes only.

---

## 💡 Note

Intervu AI helps users practice real interview scenarios and improve communication skills through AI-driven feedback loops.
