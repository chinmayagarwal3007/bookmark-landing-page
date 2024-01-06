import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>

      <div className={styles.image}>
          <Image src="/logo-bookmark.png" alt='logo' width={148} height={25} className={styles.logo}/> 
      </div>

      <div className={styles.links}>
        <p className={styles.link}>FEATURES</p>
        <p className={styles.link}>PRICING</p>
        <p className={styles.link}>CONTACT</p>
        <button className={styles.button}>LOGIN</button>
      </div>

      <div className={styles.hamburger}>
        <Image src="/icon-hamburger.png" alt='hamburger' width={18} height={15}   /> 
      </div>
    </div>
  )
}

export default Navbar