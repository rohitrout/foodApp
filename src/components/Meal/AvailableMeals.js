import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const dummyMeals = [
  {
    id: "f1",
    name: "Noodles",
    description: "Chawi Noodles with finest veggies",
    price: 40,
  },
  {
    id: "f2",
    name: "Burger",
    description: "Classy Burger, American Cheese",
    price: 90,
  },
  {
    id: "f3",
    name: "Roll",
    description: "Chickem Roll, Keema, delicious",
    price: 45,
  },
  {
    id: "f4",
    name: "Golgappa",
    description: "Spicy Golgappa i.e. panipuri",
    price: 10,
  },
];

const AvailableMeals = () => {
  const mealList = dummyMeals.map((meal) => (
    
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
   
  ));

  return (
    <section className={classes.meals}>
        <Card>
      <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
