import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/Header/AboutUs/AboutUs";
import Contact from "./components/Header/Contact/Contact";
import EditProduct from "./components/Header/EditProduct/EditProduct";
import Header from "./components/Header/Header";
import Home from "./components/Header/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useState } from "react";
import ModalEdit from "./components/ModalEdit/ModalEdit";

function App() {
  const API = "http://localhost:8000/products";

  const [products, setProducts] = useState([]);

  async function getProducts() {
    let result = await axios.get(API);
    setProducts(result.data);
  }

  function addProduct(newProduct) {
    axios.post(API, newProduct);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  const [oneProduct, setOneProduct] = useState(null);

  async function getOneProduct(id) {
    const result = await axios.get(`${API}/${id}`);
    setOneProduct(result.data);
  }
  //update
  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                getProducts={getProducts}
                deleteProduct={deleteProduct}
              />
            }
          />
          <Route
            path="/add"
            element={<EditProduct addProduct={addProduct} />}
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/edit/:id"
            element={
              <ModalEdit
                oneProduct={oneProduct}
                getOneProduct={getOneProduct}
                updateProduct={updateProduct}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
