
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
  baseURL: 'http://localhost:5000/api', // Adjust if different
});

export default API;

4.Start the development server

npm start

