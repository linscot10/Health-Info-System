
# Client Management System (Frontend)

This is the frontend application for the **Client Management System**, built with **React.js**.  
It allows doctors/staff to **register**, **search**, **view profiles**, **enroll clients into programs**, and **manage client information**.

---

## 🚀 Features
- Register new clients
- View list of registered clients
- Search clients by name, email, or phone
- View detailed client profiles
- Enroll clients into programs
- Responsive and mobile-friendly UI
- Loading spinners and basic error handling

---

## 🛠️ Tech Stack
- **Frontend Framework**: React.js
- **HTTP Client**: Axios
- **Routing**: React Router
- **Styling**: Bootstrap 5 + Custom CSS
- **API Communication**: Connected to a Node.js/Express backend (via REST API)

---


## 📥 Installation and Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/linscot10client-management-frontend.git
   cd client-management-frontend

2.Install dependencies
npm install

3.Set the API base URL

Check src/api/api.js

Update the base URL to point to your backend server:

import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:4000/api', // Adjust if different
});

export default API;

4.Start the development server

npm start



# 🏥 Health Information Management System (BACKEND)

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
