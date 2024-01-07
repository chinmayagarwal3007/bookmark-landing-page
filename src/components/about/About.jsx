import React from 'react'
import styles from "./about.module.css"
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.container}>

      <div className={styles.info}>
        <h1 className={styles.heading}>A Simple Bookmark Manager</h1>
        <p className={styles.content}>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className={styles.buttons}>
        <button className={styles.chrome}>Get it on  Chrome</button>
        <button className={styles.firefox}>Get it on  Firefox</button>
        </div>
      </div>

      <div className={styles.image}>
        <Image src='/illustration-hero.png' alt='img' width = {657} height={466} className={styles.img} />
        <div className={styles.block}></div>
      </div>

    </div>
  )
}

export default About