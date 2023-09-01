import Card from "../UI/Card.js";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem.js";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chole Bathure",
    description: "Dilli se Dilwalon ke liye",
    price: 110
  },
  {
    id: "m2",
    name: "Pav Bhaji",
    description: "Be a Mumbaikar!",
    price: 120
  },
  {
    id: "m3",
    name: "Masala Dosa",
    description: "Evergreen South Indian",
    price: 100
  },
  {
    id: "m4",
    name: "Hyderabadi Biryani",
    description: "Ummm too spicy!!!",
    price: 100
  }
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
