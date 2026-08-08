import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HomeSection from './components/HomeSection/HomeSection'
import Features from './components/Features/Features'
import Categories from './components/categories/Categories'
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts'
import Sale from "./components/Sale/Sale.jsx"


const App = () => {
  return (
    <>
    <Navbar />
    <HomeSection />
    <Features />
    <Categories />
    <FeaturedProducts />
    <Sale />
    </>
  )
}

export default App
