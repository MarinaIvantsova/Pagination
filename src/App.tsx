import { useState } from 'react'
import './App.css'
import SliderPagination from './components/SliderPagination'

function App() {
  const PRODUCTS_PER_PAGE = 4
  let products = []
  for (let i = 1; i <= 100; i++) {
    products.push(i)
  }

  const [currentPage, setCurrentPage] = useState(1)
  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <div className="App">
      <ul>
        {currentProducts.map((product) => (
          <li key={String(product)}>{product}</li>
        ))}
      </ul>

      <SliderPagination
        productsPerPage={PRODUCTS_PER_PAGE}
        totalProducts={products.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default App
