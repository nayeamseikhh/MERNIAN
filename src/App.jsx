import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import RootLayout from "./Layout/RootLayout/RootLayout";
import Home from "./Pages/Home";
import Profile from "./Pages/PublicProfile";
import AboutPage from "./Pages/About/AboutPage";
import FriendsPage from "./Pages/Friends/FriendsPage";
import Product from "./Pages/Product";
import Store from "./Pages/Store";
import ProductUpload from "./GlobalComponents/ProductUpload";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import Checkout from "./Pages/Checkout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/friend" element={<FriendsPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product_upload" element={<ProductUpload />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product_details" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
