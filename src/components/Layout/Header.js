import { Fragment } from "react";
import mealImage from "../../assets/mealImage.jpg";
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>foodApp</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="mealHeader" />
      </div>
    </Fragment>
  );
};

export default Header;
