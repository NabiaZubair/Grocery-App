import Potato from "../assets/bestSelling/Potatoes.jpeg"
import Apple from "../assets/bestSelling/APPLE-RED.webp"
import Chicken from "../assets/bestSelling/chicken.jpg"
import Eggs from '../assets/bestSelling/eggs.jpeg'
import Fish from '../assets/bestSelling/fish.jpeg'
import Milk from "../assets/bestSelling/milk.jpeg"

const bestSellingProducts = [
  {
    discount: "20% OFF",
    image: Potato,
    name: "Fresh Potatoes",
    quantity: "1 kg",
    reviews: 33,
    price: 2.49
  },
  {
    discount: "15% OFF",
    image: Apple,
    name: "Red Apples",
    quantity: "1 kg",
    reviews: 47,
    price: 3.99
  },
  {
    discount: "25% OFF",
    image: Milk,
    name: "Fresh Milk",
    quantity: "1 Liter",
    reviews: 28,
    price: 2.29
  },
  {
    discount: "10% OFF",
    image: Chicken,
    name: "Fresh Chicken",
    quantity: "1 kg",
    reviews: 52,
    price: 6.99
  },
  {
    discount: "20% OFF",
    image: Fish,
    name: "Fresh Fish",
    quantity: "1 kg",
    reviews: 36,
    price: 8.49
  },
  {
    discount: "15% OFF",
    image: Eggs,
    name: "Farm Fresh Eggs",
    quantity: "12 pieces",
    reviews: 41,
    price: 3.49
  }
];

export default bestSellingProducts;