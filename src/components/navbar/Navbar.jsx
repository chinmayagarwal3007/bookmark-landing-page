'use client'
import React, { useState } from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'

const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [imageUrl, setImageUrl] = useState('/icon-hamburger.png');
    const [backgroundColor, setBackgroundColor] = useState('white');

    const handleClick = () => {
      // Toggle between the two image URLs
      setImageUrl((prevImageUrl) =>
        prevImageUrl === '/icon-hamburger.png'
          ? '/icon-close.png'
          : '/icon-hamburger.png'
      );

      setBackgroundColor((prevColor) => (prevColor === 'white' ? 'rgba(37, 43, 70, 0.9)' : 'white'));
    };

  return (
    <div className={styles.container} style={{ backgroundColor: backgroundColor}}>

      <div className={styles.image}>
          <Image src="/logo-bookmark.png" alt='logo' width={148} height={25} className={styles.logo}/> 
      </div>

      <div className={styles.links}>
        <p className={styles.link}>FEATURES</p>
        <p className={styles.link}>PRICING</p>
        <p className={styles.link}>CONTACT</p>
        <button className={styles.button}>LOGIN</button>
      </div>

      <div className={styles.hamburger} onClick={() => {setOpen(!open);handleClick()}}>
        <Image src={imageUrl} alt='hamburger' width={18} height={15}   /> 
      </div>

    {
      open && 
      
      <div className={styles.mobileLinks}>

        <div className={styles.upperHalf}>
        <p className={styles.mobileLink}>FEATURES</p>
        <hr className={styles.hr} />
        <p className={styles.mobileLink}>PRICING</p>
        <hr className={styles.hr} />
        <p className={styles.mobileLink}>CONTACT</p>
        <hr className={styles.hr} />
        <button className={styles.mobileButton}>LOGIN</button>
        </div>


        <div className={styles.social}>
          <Image src="/icon-facebook.png"  alt='facebook-logo' width={24} height={24} />
          <Image src="/icon-twitter.png"  alt='twitter-logo' width={24} height={20} />
        </div>


      </div>
    }



    </div>
  )
}

export default Navbar