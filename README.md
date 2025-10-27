# 🎓 Health Connect — Backend

**Empowering Healthy Living for Students & Staff**

This repository contains the **backend service** for the ** Health Connect** platform — a digital healthcare solution designed for students and staff of **Shahjalal University of Science and Technology ()**.  
It provides secure APIs for health advice, online consultations, specialist appointments, medicine access, and membership plans.

## 🚀 Features

- **Free Health Advice** — chat or call with general practitioners
- **Online Doctor Consultations** — free, secure video/chat sessions
- **Specialist Appointments** — discounted visits and reminders
- **Health Membership Plans** — Bronze / Silver / Gold tiers
- **Medicine Access** — verified partner pharmacies with discounts
- **Secure Data Handling** — HIPAA-compliant and privacy-first

---

## 🧩 Tech Stack

| Component           | Technology                            |
| ------------------- | ------------------------------------- |
| Runtime             | Node.js (Express.js)                  |
| Language            | TypeScript                            |
| Database            | MongoDB (Mongoose ORM)                |
| Authentication      | JWT / OAuth2                          |
| API Format          | REST (JSON)                           |
| Cloud & Storage     | HIPAA-Compliant Cloud / MongoDB Atlas |
| Payment Integration | SSLCommerz / bKash                    |

---

## 📁 Project Structure

```

src/
├── config/        # Environment variables, DB connection
├── controllers/   # Route controllers
├── models/        # Mongoose models
├── routes/        # API route definitions
├── middlewares/   # Auth & validation middlewares
├── utils/         # Helper functions
├── types/         # TypeScript interfaces & DTOs
└── index.ts       # Entry point

```

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/sust-health-connect-backend.git
cd sust-health-connect-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/healthconnect
JWT_SECRET=your_jwt_secret
CLOUD_STORAGE_KEY=your_cloud_key
PAYMENT_GATEWAY_KEY=your_payment_key
```

### 4. Run the project

#### Development

```bash
npm run dev
```

#### Production build

```bash
npm run build
npm start
```

---

## 🧠 API Overview

| Endpoint             | Method | Description                  |
| -------------------- | ------ | ---------------------------- |
| `/api/auth/register` | POST   | Register new user            |
| `/api/auth/login`    | POST   | Authenticate user            |
| `/api/health/advice` | GET    | Fetch health tips & advice   |
| `/api/consultations` | POST   | Schedule online consultation |
| `/api/specialists`   | GET    | List available specialists   |
| `/api/membership`    | GET    | Retrieve membership plans    |
| `/api/pharmacy`      | GET    | Fetch pharmacy partners      |

> Detailed API documentation coming soon via **Swagger / Postman**.

---

## 🛡️ Security & Compliance

- End-to-end encryption for all data transfers
- Role-based access control (Admin, Doctor, Student, Staff)
- Compliance with **HIPAA** and **GDPR** data protection standards
- Secure token-based authentication (JWT)

---

## 🌍 Future Enhancements

- Mental health & counseling services
- Fitness and nutrition tracking
- Integration with Medical Centre
- Expansion to other universities in Sylhet

---

## 🤝 Contribution

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m "Add awesome feature"`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

---

## 🩷 Contact

📧 **[susthealthconnect@gmail.com](mailto:susthealthconnect@gmail.com)**
📍 Sylhet, Bangladesh
🌐 _[Website Coming Soon]_

**“Healthy Campus, Happy Minds – One App for All Your Health Needs.”**
