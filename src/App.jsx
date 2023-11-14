import { useEffect } from "react";
import Home from '../src/navbar/Content/Home';
import Aos from "aos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./navbar/Content/Products";





function App() {
  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />


        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
