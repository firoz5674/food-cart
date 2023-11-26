import './App.css';
import "./assets/styles/main.scss"
import TopHeader from './layout/TopHeader';
import MainHeader from './layout/MainHeader';
import Navbar from './layout/Navbar';
import Filter from './components/filter';
import Card from './components/card';
import Login from "./components/login";
import Register from "./components/register";
import Cart from "./components/cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'swiper/css';
import 'swiper/css/pagination';
import ProductSlider from './components/product-slider/ProductSlider';
import offer1 from "./assets/images/food-offer.jpg";
import offer2 from "./assets/images/offer2.jpg";
import offer3 from "./assets/images/food4.jpg";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <TopHeader />
          <MainHeader />
          <Navbar />
          {/* <div className='col-md-3 col-lg-3'>
                  <div className='filter-section'>
                    <Routes>
                      <Route exact path={"/" || "/home"} element={<Filter />} />
                    </Routes>
                  </div>
                  <ProductSlider />
                  <div className='offer-image'>
                    <img src={offer1} className='img-fluid' alt="offer1" />
                    <img src={offer2} className='img-fluid' alt="offer2" />
                    <img src={offer3} className='img-fluid' alt="offer3" />
                  </div>
                </div> */}

          {/* <ProductSlider /> */}
          <Routes>
            <Route exact path={"/" || "/home"} element={<Card />} />
          </Routes>
          <Routes>
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
