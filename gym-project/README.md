# 🏋️ Gym Management System

A modern, full-stack Gym Management System built with the MERN stack (MongoDB, Express.js, React, Node.js) and TypeScript. This application allows gym owners to manage members, memberships, and navigate through a premium user interface.

## ✨ Features

- **Adding Members**: Register new members with details like Name, Age, Membership Type, Duration, Fees, and Join Date.
- **View Members**: Browse all registered members in a responsive grid layout with search functionality.
- **Member Details**: Click on any member to view full details in a beautiful modal popup.
- **Update Member**: Edit member information (e.g., fees, duration) with an autofilled form.
- **Delete Member**: Remove members from the system with a confirmation safeguard.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS, supporting Desktop, Tablet, and Mobile.
- **Premium UI/UX**: Smooth animations using Framer Motion, glassmorphism effects, and dark mode aesthetics.
- **Form Validation**: Robust input validation using Zod and React Hook Form.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, CLSX, Tailwind Merge
- **Animations**: Framer Motion
- **Icons**: React Icons
- **State/Form Management**: React Hook Form, Zod
- **Networking**: Axios
- **Notifications**: React Hot Toast

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Environment**: Dotenv
- **CORS**: Enabled for secure cross-origin requests

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites
- Node.js installed on your machine.
- MongoDB installed and running locally (or a cloud connection string).

### 1. Backend Setup

Navigate to the `Backend` directory and install dependencies:

```bash
cd Backend
npm install
```

Start the backend server:

```bash
npm start
# or
node index.js
```
*The server will start on `http://localhost:3000`.*

### 2. Frontend Setup

Navigate to the `Frontend/gym-project` directory and install dependencies:

```bash
cd Frontend/gym-project
npm install
```

Start the development server:

```bash
npm run dev
```
*The application will open at `http://localhost:5173` (or similar).*

## 📁 Project Structure

```
gym-project/
├── Backend/                 # Express Server & Database
│   ├── config/              # DB Configuration
│   ├── controller/          # Route Logic
│   ├── model/               # Mongoose Models
│   ├── routes/              # API Routes
│   └── index.js             # Entry Point
│
└── Frontend/gym-project/    # React Application
    ├── src/
    │   ├── api/             # Axios Client
    │   ├── components/      # Reusable Components (Navbar, MemberForm, etc.)
    │   ├── pages/           # Page Components (Home, ViewMember, etc.)
    │   ├── types/           # TypeScript Interfaces
    │   └── App.tsx          # Main Router
    └── index.css            # Tailwind Imports
```

## 📝 API Endpoints

- `GET /` - Fetch all members
- `POST /add` - Add a new member
- `GET /:id` - Get single member details
- `PUT /:id` - Update a member
- `DELETE /:id` - Delete a member

## 🛡️ License

This project is open-source and available for educational purposes.
