import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SliderPagination from './SliderPagination';

function App() {
  const PRODUCTS_PER_PAGE = 4;
  let products = [];
  for(let i = 1; i <= 100; i++) {
    products.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const dataTotal = products.length;

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);


  // const decrement = () => {
  //   if (currentPage !== 1) {
  //     setCurrentPage((prevPage) => prevPage - 1);
  //   }
  // };

  // const increment = () => {
  //   if (dataTotal && currentPage < Math.ceil(dataTotal / PRODUCTS_PER_PAGE)) {
  //     setCurrentPage((prev) => prev + 1);
  //   }
  // };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and TS
        </a>
      </header>
      {currentProducts.map((product) => (
        <ul>
          <li key={product}  />
          {product}
          </ul>
        ))}
      <SliderPagination productsPerPage={PRODUCTS_PER_PAGE}
          totalProducts={products.length}
          currentPage={currentPage}
         
          setCurrentPage={setCurrentPage}/>
    </div>
  );
}

export default App;
