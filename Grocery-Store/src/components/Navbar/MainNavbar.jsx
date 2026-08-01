import React from 'react'
import styles from './MainNavbar.module.css'
import { ChevronDown } from 'lucide-react'

const MainNavbar = () => {
    return (
        <nav className={styles.nav}>
            <button type='button' className={styles.categories}><span>All Categories </span><ChevronDown size={18} /></button>

            <ul className={styles.navLinks}>
                <li> <a href='/'>Home</a></li>
                <li>  <a href='/about'>About</a></li>
                <li> <a href='/best-sales'>Best Sales</a></li>
                <li> <a href='promotions'>Promotion</a></li>
                <li> <a href='blogs'>Blogs</a></li>
                <li> <a href='contact'>Contact</a></li>
            </ul>

            <div className={styles.contact}>
                <a href="+92 300 1234567">+92 300 1234567</a>
                <button className={styles.btn} type="button">Gift card</button>
            </div>
            
        </nav>
    )
}

export default MainNavbar
