import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import SearchItems from './components/SearchItems'
import Cart from './components/Cart'
import { items } from './components/Data'


const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData} />
    <Routes>
      <Route path='/' element = {<Product cart={cart} setCart={setCart} items={data} />}></Route>
      <Route path='/product/:id' element={<ProductDetail />}></Route>
      <Route path='/search/:term' element={<SearchItems />}></Route>
      <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />}></Route>

    </Routes>
    </Router>
    </>
  )
}

export default App