# Amazon Clone

A modern Amazon-inspired e-commerce web application built with **React (Vite)**, **Firebase** (database & authentication), and **Stripe** for payment integration.

[View on GitHub](https://github.com/mihret7/amazon-clone)

---

## Features

- 🔥 **React (Vite)** frontend for a fast and responsive user experience
- 🔐 **Firebase Authentication**: Secure login & registration
- 🛒 **Product Listing**: Browse products, detailed product pages
- 🛍️ **Shopping Cart**: Add, remove, and update items in your cart
- 💳 **Checkout & Stripe Payments**: Seamless and secure payment integration
- ☁️ **Firebase Database**: Real-time product, user, and order management

---

## Demo

> _amazon-clone-by-mihret.netlify.app_

---

## Getting Started

### Prerequisites

- Node.js & npm installed
- Firebase project (with Authentication & Firestore enabled)
- Stripe account for payment processing

### Local Setup

1. **Clone this repo:**
    ```bash
    git clone https://github.com/mihret7/amazon-clone.git
    cd amazon-clone
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure Environment Variables:**
    - Copy `.env.sample` to `.env` and fill in your Firebase and Stripe credentials.

4. **Run the application:**
    ```bash
    npm run dev
    ```

5. Visit `http://localhost:5173` in your browser.

---

## Project Structure

```
src/
  components/      # Reusable UI components
  pages/           # Application pages (Home, Product, Cart, Checkout, etc.)
  firebase.js      # Firebase configuration and initialization
  App.jsx          # Main App component
  main.jsx         # Entry point
```

---

## Technologies Used

- **Frontend:** React, Vite, CSS/Styled Components
- **Backend & Auth:** Firebase (Firestore, Authentication)
- **Payments:** Stripe

---



## Author

- [mihret7](https://github.com/mihret7)
