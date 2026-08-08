import React from 'react'
import fruitsVegetables from "../../assets/images/vegetablesFruits.png"
import styles from './sale.module.css'

const Sale = () => {
  return (
    <div className={styles.container} >
      <div className={styles.text}>
        <p>SPECIAL OFFER</p>
        <h2>Summer Sale!</h2>
        <p>Get up to 30% OFF on all fresh fruits and vegetables</p>
        <button>Shop Now</button>
      </div>
      <div className={styles.saleTag}>
        <p>UP To</p>
        <h3>20%</h3>
        <p>OFF</p>
      </div>
      <div>
      <img className ={styles.Image} src={fruitsVegetables}/>
      </div>
    </div>
  )
}

export default Sale
