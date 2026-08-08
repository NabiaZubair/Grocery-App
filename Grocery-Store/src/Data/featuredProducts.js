import banana from "../assets/FeaturedProductImages/banana.jpeg"
import broccoli from '../assets/FeaturedProductImages/boroccoli.jpg'
import eggs from '../assets/featuredProductImages/eggs.jpeg'
import fish from "../assets/FeaturedProductImages/fish.jpeg"
import grapes from '../assets/FeaturedProductImages/grapes.webp'
import meat from "../assets/FeaturedProductImages/meat.jpg"
import milk from '../assets/FeaturedProductImages/milk.jpeg'
import tomato from "../assets/FeaturedProductImages/tomato.jpeg"
import Apple from "../assets/FeaturedProductImages/APPLE-RED.webp"
const featuredProducts = [
  {
    id: 1,
    name: "Fresh Eggs",
    category: "Dairy",
    discount: "20% OFF",
    price: "$3.00",
    image: eggs,
  },
  {
    id: 2,
    name: "Whole Milk",
    category: "Dairy",
    discount: "15% OFF",
    price: "$2.50",
    image: milk,
  },
   {
    id: 3,
    name: " Fresh Broccoli",
    category: "Vegetables",
    discount: "15% OFF",
    price: "$2.80",
    image: broccoli,
  },
  {
    id: 4,
    name: "Fresh red apples",
    category: "Fruits",
    discount: "18% OFF",
    price: "$3.20",
    image: Apple,
  },
  {
    id: 5,
    name: "Fresh Bananas",
    category: "Fruits",
    discount: "12% OFF",
    price: "$1.99",
    image: banana,
  },
  {
    id: 6,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    discount: "20% OFF",
    price: "$2.30",
    image:tomato,
  },
   {
    id: 8,
    name: "Fresh Meat",
    category: "Meat",
    discount: "15% OFF",
    price: "$11.00",
    image: meat,
  },
  {
    id: 9,
    name: "grapes",
    category: "Fruits",
    discount: "10% OFF",
    price: "$5.99",
    image: grapes,
  },
  
];

export default featuredProducts;