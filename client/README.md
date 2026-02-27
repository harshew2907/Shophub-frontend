# ShopHub - E-Commerce Frontend Assignment

A modern, responsive Product Listing and Cart System built with **React** and **Vite**. This project simulates a real-world e-commerce experience including product fetching, search functionality, and persistent cart management.

## 🚀 Features Implemented

* **Product Listing:** Dynamic fetching from `fakestoreapi.com`.
* **Carousel Hero:** Automatic and manual sliding hero section on the Homepage.
* **Search Functionality:** Real-time product filtering by title.
* **Cart System:** - Add/Remove products.
* Increase/Decrease quantities.
* Live total price calculation.


* **Persistence:** Cart data is saved to `localStorage` (remains after page refresh).
* **Navigation:** Multi-page routing using `react-router-dom`.
* **State States:** Integrated loading spinners and error handling for API calls.

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Routing:** React Router DOM
* **State Management:** React Context API / Hooks (`useState`, `useEffect`)
* **Styling:** External CSS (Custom designed)
* **API:** [Fake Store API](https://fakestoreapi.com)

## 🤖 Resources Used

This project was developed with the assistance of the following AI resources for architectural guidance, debugging, and logic optimization:

* **Gemini (Google)**
* **Claude (Anthropic)**

---

## 🏁 Getting Started

Follow these steps to get the project running on your local machine.

### 1. Prerequisites

Ensure you have **Node.js** (v16 or higher) installed on your computer.

### 2. Installation

Clone the repository and enter the project folder:

```bash
# Navigate to the client directory
cd client

# Install dependencies
npm install

```

### 3. Running the App

Start the development server:

```bash
npm run dev

```

The app will usually be available at `http://localhost:5173`.

---

## 📁 File Structure

```text
src/
├── components/   # Reusable UI (Navbar, Footer, ProductCard)
├── pages/        # Main views (Home, Products, Cart, etc.)
├── context/      # Global state for the Cart
├── styles/       # External CSS files
├── App.jsx       # Routing logic
└── main.jsx      # Entry point

```

## 📝 Assignment Requirements Checklist

* [x] Display products (image, name, price)
* [x] Add to cart
* [x] Increase / decrease quantity
* [x] Remove from cart
* [x] Show total cart value
* [x] Persist cart across refresh
* [x] Loading and error states
* [x] Product search
* [x] Pagination / Infinite scroll
* [x] Checkout simulation

