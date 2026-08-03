import React from 'react'
import styles from './features.module.css'
import {Warehouse,House,ShoppingBag,Tag} from 'lucide-react'
const Features = () => {
  return (
    <div className={styles.container}>
      <div><Warehouse size={50} color="green" />Product from organic form</div>
      <div><House size={50} color="green"/>Free Home Delivery</div>
      <div><ShoppingBag size={50} color="green"/> Promotion of the week</div>
      <div><Tag size={50} color="green" />-20% off on all vegetables</div>
    </div>
  )
}

export default Features
