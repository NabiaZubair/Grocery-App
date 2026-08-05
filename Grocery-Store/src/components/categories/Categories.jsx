import React, { useRef } from 'react'
import styles from './Categories.module.css'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Cards from './Cards.jsx'
import categories from '../../Data/Categories.js'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const Categories = () => {

  return (
    <div>

      <div className={styles.categories}>
        <h1> Shop By Categories</h1>
        <button className={styles.btn}>Show all <span className={styles.icon}><ArrowRight size={20} /></span></button>
      </div>

      <div className={styles.container}>

        <Swiper
          modules={[Navigation]}
          navigation
          loop={true}
          slidesPerView={5.2}
          spaceBetween={6}>
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Cards category={category} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>





  )
}

export default Categories
