import Navbar from 'components/navbar';
import { Outlet } from 'react-router-dom';
import Footer from 'components/footer';
import { CartOverlay } from 'components/cart';

const App = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
    <CartOverlay />
  </>
);

export default App;
