import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

// React router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from 'app/store';

// Stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Styling
import './index.css';

const App = lazy(() => import('app/App'));
const Cart = lazy(() => import('components/cart/Cart'));
const Checkout = lazy(() => import('components/checkout/Checkout'));

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK as string);

render(
  <React.StrictMode>
    <Suspense fallback={<div />}>
      <Provider store={store}>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
              </Route>
              <Route path="*" element={<div>Page not found.</div>} />
            </Routes>
          </BrowserRouter>
        </Elements>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
