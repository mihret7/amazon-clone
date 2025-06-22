// import React from 'react'
import React from "react";

// import react router dom
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import pages
import Landing from "./Pages/Landing/Landing";
// import Auth from "./Pages/Auth/Auth";
import AuthNew from "./Pages/Auth/AuthNew";
// import Payment from "./Pages/Payment/Payment";
import PaymentNew from "./Pages/Payment/PaymentNew";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";

// importing stripe
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js';

// protected route
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";



function Routing() {

  // Load your publishable key from Stripe
  const stripePromise = loadStripe("pk_test_51RSQi7Q3mt58i6YPaKYNT1AyAzGyTevZ1QzZvO8h9ZdD0tXiWJ9Enfl7peaxgdqREeqn6C6XpiYUZ1Mi4T8dGXKj00sBa4y2wa");
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<AuthNew />} />

        <Route
          path="/payments"
          element={
            <ProtectedRoute
              message="You need to login to make a payment"
              redirect="/payments"
            >
              <Elements stripe={stripePromise}>
                <PaymentNew />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              message="You need to login to view your orders"
              redirect="/orders"
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;