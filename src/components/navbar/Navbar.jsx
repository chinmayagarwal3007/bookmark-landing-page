'use client'
import React, { useState } from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'

const Navbar = () => {

    const [open, setOpen] = useState(true)

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

      <div className={styles.hamburger} onClick={() => setOpen(!open)}>
        <Image src="/icon-hamburger.png" alt='hamburger' width={18} height={15}   /> 
      </div>

    {
      open && 
      
      <div className={styles.mobileLinks}>

        <div>
        <p className={styles.mobileLink}>FEATURES</p>
        <hr />
        <p className={styles.mobileLink}>PRICING</p>
        <hr />
        <p className={styles.mobileLink}>CONTACT</p>
        <hr />
        <button className={styles.mobileButton}>LOGIN</button>
        </div>


        <div>
          <Image src="/icon-facebook.png"  alt='facebook-logo' width={24} height={24} />
          <Image src="/icon-twitter.png"  alt='twitter-logo' width={24} height={20} />
        </div>


      </div>
    }



    </div>
  )
}

export default Navbar