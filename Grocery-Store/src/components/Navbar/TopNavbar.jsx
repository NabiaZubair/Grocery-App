import React from 'react'
import logo from "../../assets/logo/image.png"
import Styles from './Navbar.module.css'
import {Search,Heart,CircleUserRound,ShoppingCart,MapPin} from 'lucide-react'

const Navbar = () => {
  return (
    <nav  className={Styles.nav}>
        <div className={Styles.logoWrapper}>
            <img src={logo} alt="logo" className={Styles.logo} />
        </div>

        <div className={Styles.location}>
            <h4>Delivery to</h4>
            <button type="button" className={Styles.locationBtn}><MapPin size={18} /><span>Pakistan</span></button>
        </div>

        <form className={Styles.search} role='search'>
            <input type="text"
             placeholder='what are you looking for'/>
            <button type='submit'><Search size={22} /></button>
        </form>

        <div className={Styles.cartSection}>
            <button type="button"><Heart /></button>
             <button type='button'><CircleUserRound /></button>
              <button type="button"><ShoppingCart /></button>
        </div>

    </nav>
  )
}

export default Navbar
