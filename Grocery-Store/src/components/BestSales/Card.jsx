import React from 'react'
import styles from "./card.module.css"
import { Heart, Star,ShoppingCart ,StarHalf} from "lucide-react";


const card = ({product}) => {
  return (
    <div>
       <div className={styles.container}>
            <div className={styles.top}>
                <span className={styles.disscount}>
                    {product.discount}
                    </span>
                <button className={styles.heart}>
                    <Heart size={24} />
                </button>
                <img className={styles.cardImg}
                 src={product.image} 
                 alt={product.name}/>
            </div>
            <div className={styles.bottem}>
                <div className={styles.bottemText}>
                    <h3>{product.name}</h3>
                    <span>{product.quantity}</span>
                    <div><Star /><Star /><Star /><Star /><Star /><StarHalf /></div>
                    <p>{product.price}</p>
                </div>
                <div className={styles.imageContainer}>
                <button className={styles.btn}>Add to Cart<ShoppingCart size={22}/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default card
