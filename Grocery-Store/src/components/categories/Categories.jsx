import styles from './Categories.module.css'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { useRef } from 'react'
import Cards from './Cards.jsx'
import categories from '../../Data/Categories.js'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const Categories = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div>

      <div className={styles.categories}>
        <h1> Shop By Categories</h1>
        <button className={styles.btn}>Show all <span className={styles.icon}><ArrowRight size={20} /></span></button>
      </div>

      <div className={styles.container}>
        <button ref={prevRef} className={ styles.prevArrow}>
          <ArrowLeft size={24} />
        </button>
        <button ref={nextRef}  className={styles.nextArrow}>
          <ArrowRight size={24} />
        </button>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}

          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;

          }}

          loop={true}
          slidesPerView={6.2}
          className={styles.swiper}>

          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Cards category={category} />
            </SwiperSlide>
          ))}
        </Swiper>



      </div>
    </div >
  )
}

export default Categories
