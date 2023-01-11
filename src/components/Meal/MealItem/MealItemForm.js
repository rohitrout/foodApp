import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [ amountIsValid, setAmountIsValid]= useState(true);

  const submitHandler=(e)=>{
      e.preventDefault();
      const enteredAmount= amountInputRef.current.value;

      if(enteredAmount<1 || enteredAmount >5 || enteredAmount.trim().length===0){
        setAmountIsValid(false)
        return;
      }

      props.onAddToCart(enteredAmount)

  }      
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
      ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter valid between (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
