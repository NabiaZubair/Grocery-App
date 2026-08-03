import React from 'react'
import styles from './Categories.module.css'
import { ArrowRight } from 'lucide-react'
import Cards from './Cards.jsx'
import categories from '../../Data/Categories.js'


const Categories = () => {

  return (
    <div>

      <div className={styles.categories}>
        <h2>Browse Our Hottest </h2>
        <div className={styles.heading}>
          <h1>Categories</h1>
          <button className={styles.btn}>Show all <span className={styles.icon}><ArrowRight size={20} /></span></button>
        </div>
      </div>

      <div className={styles.cardContainer}>
        {categories.map((category) => (
          <Cards key={category.id}
            category={category} />
        ))}
      </div>

    </div>
  )
}

export default Categories
