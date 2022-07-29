import React, { useState } from 'react'
import {HashRouter as Router,Routes,Route} from "react-router-dom";

// components import
import Authentication from './Components/Authentication';
import About from './Components/About';
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home';
import Product from './Components/Product';
import ProductByCategory from './Components/ProductByCategory';
import Cart from './Components/Cart';

// context
export const loginContext = React.createContext(null);

function App() {
  const [user,setUser] = useState(localStorage.getItem('user')?true:false);
  const [cartCount, setCartCount] = useState(localStorage.getItem('cartCount')?parseInt(localStorage.getItem('cartCount')):0);
  const [cart,setCart] = useState([]);
  return (
    <>
      <loginContext.Provider value={{user,setUser,cartCount,setCartCount,cart,setCart}}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductByCategory />} />
            <Route path='/products/:productId' element={<Product />}/>
            <Route path="/auth" element={<Authentication />}/>
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<NoMatchPage />} />
          </Routes>
          <Footer />
        </Router>
      </loginContext.Provider>
    </>
  )
}

const NoMatchPage = () => {
  return (<div>no match</div>);
}

export default App