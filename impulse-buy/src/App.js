// Import JS files
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Featured from "./pages/Featured/Featured";
import Products from "./pages/Products/Products";
// From CheckOut
import Cart from "./pages/CheckOut/Cart/Cart";
import Payment from "./pages/CheckOut/Payment/Payment";
import Purchases from "./pages/CheckOut/Purchases/Purchases";
import Shipment from "./pages/CheckOut/Shipment/Shipment"; // End  of Check out

import AboutUs from "./pages/AboutUs/AboutUs";

// Import from router-dom
import { Routes, Route } from "react-router-dom";

// Import css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/featured" element={<Featured />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SignUp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/shipment" element={<Shipment />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
