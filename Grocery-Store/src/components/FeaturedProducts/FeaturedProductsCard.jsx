import React from 'react'
import Apple from '../../assets/FeaturedProductImages/APPLE-RED.webp'
import styles from './FeaturedProductCard.module.css'
import { Heart, ShoppingCart } from "lucide-react"

const FeaturedProductsCard = ({featuredProducts}) => {
    return (

        <div className={styles.container}>
            <div className={styles.top}>
                <span className={styles.disscount}>{featuredProducts.discount}</span>
                <button className={styles.heart}>
                    <Heart size={24} />
                </button>
                <img className={styles.cardImg} src={featuredProducts.image} />
            </div>
            <div className={styles.bottem}>
                <div className={styles.bottemText}>
                    <h3>{featuredProducts.name}</h3>
                    <p>{featuredProducts.price}</p>
                </div>
                <div className={styles.imageContainer}>
                <button className={styles.btn}>Add to Cart<ShoppingCart size={22}/></button>
                </div>
            </div>
        </div>

    )
}

export default FeaturedProductsCard
