import Product from "./components/Product";
import Home from "./pages/Home";
import Coming_soon from "./pages/coming_soon";
import SignIn from "./pages/Sign-in";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";

const App = () => {
  return (
  <Router>
      <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/Products" element={<ProductList />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/coming_soon" element={<Coming_soon />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      </Routes>
   </Router>
  );
};

export default App;
