import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from './pages/Home';
import Category from './pages/Category';
import {headphones, speakers, earphones, data} from './data';
import Product from "./pages/Product";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([])
  const [cartValue, setCartValue] = useState(0)
  const [activeProduct, setActiveProduct] = useState()
  const [activeProductQty, setActiveProductQty] = useState(1)

  useEffect(() => {
    updateCartValue()
  }, [cart])

  useEffect(() => {
    window.scrollTo(0,0)
}, [])
  
  const getActiveProduct = (slug) => {
    let index = data.findIndex(d => d.slug === slug)
    setActiveProduct(data[index])
    return data[index]
  }
  const productQtyIncrement = () => {
    if(activeProductQty < 99){
      setActiveProductQty(activeProductQty + 1)
    }
  }

  const productQtyDecrement = () => {
    if (activeProductQty > 1) {
      setActiveProductQty(activeProductQty - 1)
    }
  }

  const updateCartValue = () => {
    setCartValue(0)
    cart.forEach(item => {
      setCartValue( prevValue => {
        return prevValue + (item.item.price * item.qty) 
      })
    });
  }

  const addToCart = () => {
    let index = cart.findIndex(item => item.item.slug === activeProduct.slug)
    if (index >= 0) {
      let tempCart = [...cart]
      tempCart[index].qty = tempCart[index].qty + activeProductQty
      setCart(tempCart)
    }else{
      setCart([...cart, {item: activeProduct, qty: activeProductQty}])
    }
    setActiveProductQty(1)
  }

  const clearCart = () => {
    setCart([])
    setCartValue(0)
  }

  const updateCart = (item, action) => {
    let index = cart.findIndex(product => product.item.slug === item.slug)
    let tempCart = [...cart]
    if (index >= 0) {
      if (action==='minus' && cart[index].qty > 1) {
        tempCart[index].qty = cart[index].qty - 1
      }else if(action==='plus' && cart[index].qty < 99){
        tempCart[index].qty = cart[index].qty + 1
      }else if(action === 'remove'){
        console.log(index);
        tempCart.splice(index,1)
      }
      setCart(tempCart)
      updateCartValue()
    }
  }

  return (
    <div className="App">
      <Header cart={cart} clearCart={clearCart} cartValue={cartValue} updateCart={updateCart}/>
     <Routes>
       <Route exact path="/" element={<Home />}/>
       <Route path="/headphones" element={<Category name="headphones" products={headphones}/>}></Route>
       <Route path="/speakers" element={<Category name="speakers" products={speakers}/>}></Route>
       <Route path="/earphones" element={<Category name="earphones" products={earphones}/>}></Route>
       <Route path="/product/:id" element={<Product getProduct={getActiveProduct} productQty={activeProductQty} increaseQty={productQtyIncrement} decreaseQty={productQtyDecrement} addToCart={addToCart}/>}></Route>

     </Routes>
    </div>
  );
}

export default App;
