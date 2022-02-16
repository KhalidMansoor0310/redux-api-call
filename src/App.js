import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import ProductComponent from './components/ProductComponent';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
          <Route path='/productlisting' element={<ProductListing />} />
          <Route path='/productdetail/:productId' element={<ProductDetails />} />
          <Route path="/productComponent" element={<ProductComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
