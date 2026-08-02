import React from 'react'
import foodImage from "../../assets/images/healthy-food.jpeg"
import styles from './HomeSection.module.css'
import { ArrowRight } from 'lucide-react'



const HomeSection = () => {
    return (

        <>
            <div className={styles.container}>
                <div className={styles.right}>
                    <h3>WE ARE FRESH MART</h3>
                    <h1>
                        <span>Choose Fesh Mart</span>
                        <span>the best healthy  </span>
                        <span>way to life</span>
                    </h1>
                    <button className={styles.btn}>Shop now <ArrowRight size={22} className={styles.btnArrow} /></button>
                </div>
                <div className={styles.left}>
                    <img className={styles.foodImage} src={foodImage} />
                </div>
            </div>
        </>

    )
}

export default HomeSection
