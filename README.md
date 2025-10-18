## **Features**

### **Frontend Features**
- **Responsive Design**: Fully responsive layout optimized for all devices.
- **User Authentication**: Login, registration, and role-based redirection (Admin/User).
- **Dynamic Navbar**: Includes links to all pages, cart counter, and user dropdown menu.
- **Product Catalog**: Filter and search products by categories with live updates.
- **Cart Management**: Add, remove, increment, and decrement product quantities.
- **Checkout Process**: Order summary, shipping information form, and order placement.
- **Toast Notifications**: Visual feedback for actions like login, logout, and cart operations.

### **Backend (via JSON Server)**
- **Simulated REST API**: Uses JSON Server to handle products, users, and orders.
- **Data Persistence**: Fetches and stores data for users, orders, and products.

---

## **Tech Stack**
- **Frontend**: React, Tailwind CSS, React Router, Framer Motion, React Icons
- **Backend**: JSON Server
- **Deployment**: Vercel (for frontend), JSON Server (for backend)

---

## **Getting Started**

### **Prerequisites**
1. Node.js installed (v14+ recommended).
2. Git installed on your system.
3. A Vercel account for deployment.

---

### **Setup**

#### **1. Install Dependencies**
Run the following command to install the required dependencies:
```bash
npm install
```

#### **2. Start JSON Server**
Run a JSON server to simulate backend APIs:
```bash
npx json-server --watch db.json --port 5000
```
Ensure the `db.json` file is present with the correct structure (e.g., users, products, orders).

#### **3. Start the Development Server**
Launch the React app in development mode:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## **Project Structure**
```
techstore-pro/
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable components (e.g., Navbar, Footer)
│   ├── context/         # Context API for Auth and Cart
│   ├── pages/           # Application pages (Home, Products, Cart, etc.)
│   ├── App.js           # Main app file
│   └── index.js         # React entry point
├── public/              # Public files (index.html, manifest.json)
├── db.json              # JSON Server mock data
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

---

## **Deployment**

### **1. Deploy to Vercel**
#### **Steps to Deploy**
1. Log in to your [Vercel Dashboard](https://vercel.com/).
2. Click on **New Project** and import your Git repository.
3. Set up your **Environment Variables** if required.
4. Click **Deploy** to start the build and deploy process.
5. Your website will be live, and the deployment URL will be provided by Vercel.

### **2. Re-deploy to Vercel**
If you’ve already deployed:
- Push changes to your GitHub repository. Vercel will automatically trigger a redeployment.
- Alternatively, redeploy manually by visiting the Vercel dashboard and clicking **Redeploy**.

---

## **Usage**

### **Authentication**
- Register a new user or log in with an existing account.
- Admin users are redirected to the admin dashboard, while regular users are directed to the products page.

### **Product Features**
- Browse products by category, search by name, and sort by price.
- Add products to the cart and proceed to checkout.

### **Checkout Process**
- Enter shipping information.
- Review the order summary and place the order.

---

## **Environment Variables**
If your project requires environment variables (e.g., API URLs), add them in a `.env` file:
```
REACT_APP_API_URL=http://localhost:5000
```

---

