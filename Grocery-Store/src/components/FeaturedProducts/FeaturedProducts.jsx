import React from 'react'
import Cards from "./FeaturedProductsCard"
import featuredProducts from '../../Data/featuredProducts.js'
import  styles from "./FeaturedProducts.module.css"

const FeaturedProducts = () => {
  return (
    <div className={styles.productContainer}>
      
      <h2>Features Products</h2>
      <div className={styles.categories}>
        <button>All Products</button>
        <button>Fruits and vegetables</button>
        <button>Dairy & Eggs</button>
        <button>meet and fish</button>
        <button>Bakery</button>
        <button>Beverages</button>
        <button>Snacks</button>
      </div>

      <div className={styles.products}>
     {featuredProducts.map((product) =>(
      <Cards
      key={product.id} 
      featuredProducts={product}/>
     ))}
     </div>
     
    </div>
  )
}

export default FeaturedProducts
