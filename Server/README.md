# 🏥 Health Information Management System

A simple backend API for doctors to manage clients and health programs such as HIV care, TB, Malaria etc.

---


---

## 📦 Features

- Create and manage Health Programs
- Register and enroll Clients into Programs
- Search for Clients
- View detailed Client Profiles
- Public API for external systems to access client profiles
- Clean and professional code structure
- RESTful API design
- Ready for production deployment

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication (optional setup)
- Render Deployment

---

## 🛤️ API Endpoints

| Method | Route | Description |
| :----: | :--- | :---------- |
| POST | `/api/programs` | Create a health program |
| GET | `/api/programs` | Get all programs |
| GET | `/api/programs/:id` | Get single program |
| POST | `/api/clients` | Register a client |
| POST | `/api/clients/:clientId/enroll` | Enroll client to programs |
| GET | `/api/clients/search?query=` | Search clients |
| GET | `/api/public/clients/:clientId` | Public client profile |


## 🚀 Getting Started Locally

```bash
git clone https://github.com/yourusername/health-info-system.git
cd health-info-system
npm install
npm run start

Create a .env file:

PORT=4000
MONGO_URI=your_mongodb_uri
