import React from 'react'
import styles from './BestSales.module.css'
import Card from './Card.jsx'
import BestSellingProducts from "../../Data/BestSelling.js"


const BestSales = () => {
    return (
        <div className={styles.container}>
            <h2>Best Selling products </h2>
            <div className={styles.card}>
                {BestSellingProducts.map((product)=>(
                    <Card
                        id={product.name}
                        product={product} />
                ))}

            </div>
        </div>
    )
}

export default BestSales
