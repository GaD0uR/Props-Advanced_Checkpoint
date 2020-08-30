import React from "react";
import "./App.css";
import ProductTable from "./ProductTable";
import * as ReactBootStrap from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <h1>Table Products</h1>
      <ReactBootStrap.Table>
        <ProductTable data={products} />
      </ReactBootStrap.Table>
    </div>
  );
}

const products = [
  {
    price: 100,
    name: "iphone",
    category: "Electronics",
  },
  {
    price: 150,
    name: "jeans",
    category: "Clothes",
  },
  {
    price: 540,
    name: "Samsung",
    category: "Electronics",
  },
];

export default App;
