import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Customer/pages/HomePage/HomePage'
import Products from './Customer/Components/Products/Products'
import { Routes, Route } from "react-router-dom";
import Layout from './Layout/Layout'
import ProductDetails from './Customer/Components/Products/ProductDetails'
import Cart from './Customer/Components/Cart/Cart'
import Checkout from './Customer/Components/Checkout/Checkout'
import Orders from './Customer/Components/Order/Orders'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          {/* <Route path="/:label1/:label2/:label3" element={<Products />} />  /men/clothing/kurtas  */}
          <Route path="/:label1/:label2/:label3" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/orders" element={<Orders />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
