import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from './../../store/cart-context';

const HeaderCartButton = (props) => {
  const cartCtx  = useContext(CartContext)

  const noOfCartItems = cartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount;
  },0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
