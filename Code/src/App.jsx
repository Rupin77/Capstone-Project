import Product from "./components/Product";
import Home from "./pages/Home";
import Coming_soon from "./pages/coming_soon";
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
      </Routes>
   </Router>
  );
};

export default App;
