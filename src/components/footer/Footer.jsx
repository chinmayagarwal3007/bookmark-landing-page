import React from 'react'
import Image from 'next/image'
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tags}>
      <Image src="/logo-bookmark_light.png" alt='logo' width={148} height={25} />
      <p>FEATURES</p>
      <p>PRICING</p>
      <p>CONTACT</p>
      </div>

      <div className={styles.social}>
        <Image src="/icon-facebook.png" alt='facebook' height={24} width={24} />
        <Image src="/icon-twitter.png" alt='twitter' height={24} width={24} />
      </div>
    </div>
  )
}

export default Footer