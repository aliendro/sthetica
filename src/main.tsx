import { render } from 'react-dom';

// React router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Context
import MenuProvider from 'context/MenuContext';

// Redux
import { Provider } from 'react-redux';
import store from 'app/store';

// Components
import Cart from 'components/cart';
import Checkout, { CheckoutShipping, CheckoutPayment, CheckoutReview } from 'components/checkout';
import Page404 from 'components/page404/Page404';
import About from 'components/about/About';

// Stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Application Component
import EcommerceApp from './components/ecommerceapp';

// Styling
import './index.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK as string);

render(
  <Provider store={store}>
    <MenuProvider>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<EcommerceApp />}>
              <Route path="/shop">
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />}>
                  <Route path="shipping" element={<CheckoutShipping />} />
                  <Route path="payment" element={<CheckoutPayment />} />
                  <Route path="review" element={<CheckoutReview />} />
                </Route>
              </Route>
              <Route path="about" element={<About />} />
            </Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </Elements>
    </MenuProvider>
  </Provider>,
  document.getElementById('root'),
);
