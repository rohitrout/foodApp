import {useState} from 'react'
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meal/Meals';
import CartProvider from './store/CartProvider';



function App() {
const [showCart, setShowCart] = useState(false)

  const cartShownHandler=()=>{
    setShowCart(true)
  }
  const hideCartHandler=()=>{
    setShowCart(false)
  }
  return (
    <CartProvider>
    
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={cartShownHandler}/>
      <Meals/>
    
    </CartProvider>
  );
}

export default App;
