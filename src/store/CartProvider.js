import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        // ...state,
        items: state.items.concat(action.payload),
        totalAmount: state.totalAmount + action.payload.price * action.payload.amount
      };
    case "REMOVE":
      return {};
  }
  return state;
};

const CartProvider = (props) => {
  const initialState = { items: [], totalAmount: 0 };

  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const addToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      payload: item,
    });
  };

  const removeFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      payload: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
