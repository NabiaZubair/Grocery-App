import dairy from '../assets/images/Dairy.webp'
import Fruits from '../assets/images/Fruits.png'
import Juice from '../assets/images/Juice.png'
import meat from '../assets/images/Meat.png'
import nuts from '../assets/images/nuts.png'
import spices from '../assets/images/spices.webp'
import vegetables from '../assets/images/vegetables.png'

const categories = [
  {
    id: 1,
    title: "Fruits",
    image: Fruits,
    items: 22,
    bgColor:"#f3f3b5"
  },
  {
    id: 2,
    title: "Vegetables",
    image: vegetables,
    items: 35,
    bgColor:"#d8f3b5"
  },
  {
    id: 3,
    title: "Dairy",
    image: dairy,
    items: 18 ,
    bgColor:"#b5f2f3"
  },
  {
    id: 4,
    title: "Drinks",
    image: Juice,
    items: 15,
    bgColor:"#f3d8b5"
  },
  {
    id: 5,
    title: "Meat",
    image: meat,
    items: 7,
    bgColor:"#b5f3db"
  },
  {
    id: 6,
    title: "Nuts",
    image: nuts,
    items: 8,
    bgColor:"#f3b5c4"
  },
  {
    id: 7,
    title: "Spices",
    image: spices,
    items: 10,
    bgColor:"#b5b5f3"
  }
];
export default categories