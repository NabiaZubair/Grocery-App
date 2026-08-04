import React from 'react'
import styles from './Categories.module.css'


const Cards = ({ category }) => {

    return (
        <div className={styles.cards}
        style={{backgroundColor:category.bgColor}}>
            <img src={category.image}
                className={styles.cardImage}
            />
            <div className={styles.textContent}>
                <h3 className={styles.cardText}>
                    {category.title}
                </h3>
                <p>({category.items} items)</p>
            </div>
        </div>

    )
}


export default Cards
