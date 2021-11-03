import "./App.css";
import Navigation from "./component/Navigation/Navigation";
import ProductCard from "./component/Products/ProductCard";
import "./component/Products/product.css"
import Modal from "./component/Modal/Modal";
import { Fragment, useEffect, useState } from "react";

function App() {
  


  return (
    <Fragment>
      {/* <Modal/> */}
      <Navigation />

      <ProductCard section="men's clothing" />
      <ProductCard section="women's clothing" />
      <ProductCard section="electronics" />
      <ProductCard section="jewelery" />
    </Fragment>
  );
}

export default App;
