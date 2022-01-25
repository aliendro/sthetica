type Cart = import('chec__commerce.js/types/cart').Cart;
type LineItem = import('chec__commerce.js/types/line-item').LineItem;
type Price = import('chec__commerce.js/types/price').Price;
type Product = import('chec__commerce.js/types/product').Product;
type ProductCollection = import('chec__commerce.js/features/products').ProductCollection;
type CheckoutToken = import('chec__commerce.js/types/checkout-token').CheckoutToken;
type CheckoutCapture = import('chec__commerce.js/types/checkout-capture').CheckoutCapture;
type CountryList = import('chec__commerce.js/features/services').LocaleListCountriesResponse;
type StateList = import('chec__commerce.js/features/services').LocaleListSubdivisionsResponse;
type Order = import('chec__commerce.js/types/order').Order;
type Locale = {
  [locationCode: string]: string;
};
