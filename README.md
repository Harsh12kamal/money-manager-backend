# 💰 Money Manager – Backend

This is the backend service for the **Money Manager Web Application**, built using **Node.js, Express.js, and MongoDB Atlas**.  
It provides REST APIs to manage income, expenses, accounts, transfers, dashboards, and reports.

🔗 **Live Backend URL (Render):**  
https://money-manager-backend-ra94.onrender.com/

---

## 🚀 Features Implemented

- Add & manage **Income and Expenses**
- Track transactions with:
  - Date & Time
  - Category
  - Division (Office / Personal)
- **Edit transactions within 12 hours** (restricted after that)
- **Filter transactions** by:
  - Category
  - Division
  - Date range
- **Dashboard summary**:
  - Daily
  - Weekly
  - Monthly
  - Yearly
- **Category-wise summary**
- **Account management**
- **Account-to-account transfer**
- Automatic account balance updates
- MongoDB Atlas integration
- Deployed on **Render**

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Deployment:** Render
- **Utilities:** Day.js, dotenv, CORS

---

## 📁 Project Structure

money-manager-backend/
│
├── config/
│ └── db.js
├── controllers/
│ ├── accountController.js
│ ├── dashboardController.js
│ └── transactionController.js
├── middlewares/
│ └── editRestriction.js
├── models/
│ ├── Account.js
│ └── Transaction.js
├── routes/
│ ├── accountRoutes.js
│ ├── dashboardRoutes.js
│ └── transactionRoutes.js
├── utils/
│ └── dateHelpers.js
├── .env
├── server.js
├── package.json
└── README.md



---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

npm install


Server will run on:

---

## 🌐 API Endpoints

### 🔹 Accounts

| Method | Endpoint | Description |
|------|--------|------------|
| GET | `/api/accounts` | Get all accounts |
| POST | `/api/accounts` | Create a new account |
| POST | `/api/accounts/transfer` | Transfer amount between accounts |

---

### 🔹 Transactions

| Method | Endpoint | Description |
|------|--------|------------|
| GET | `/api/transactions` | Get all transactions |
| POST | `/api/transactions` | Add income or expense |
| PUT | `/api/transactions/:id` | Edit transaction (within 12 hours) |
| GET | `/api/transactions/category-summary` | Category-wise summary |

#### Filters
/api/transactions?category=Food
/api/transactions?division=office
/api/transactions?startDate=2025-01-01&endDate=2026-12-31


---

### 🔹 Dashboard Summary

| Type | Endpoint |
|----|--------|
| Daily | `/api/dashboard/summary?type=daily` |
| Weekly | `/api/dashboard/summary?type=weekly` |
| Monthly | `/api/dashboard/summary?type=monthly` |
| Yearly | `/api/dashboard/summary?type=yearly` |

---

## ⛔ Edit Restriction Rule

- Transactions **can only be edited within 12 hours**
- After 12 hours → API returns **403 Forbidden**

---

## 🚀 Deployment

- Backend is deployed using **Render**
- Connected to **MongoDB Atlas**
- Code hosted on **GitHub**

---

## 📌 Repository

**GitHub Repository:**  
https://github.com/Harsh12kamal/money-manager-backend

---

## ✅ Status

✔ All backend requirements implemented  
✔ APIs tested using Postman  
✔ Successfully deployed on Render  

---

## 📄 License

This project is created for educational purposes.
