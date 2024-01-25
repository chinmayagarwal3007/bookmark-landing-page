import React from 'react'
import Image from 'next/image'
import styles from "./addBox.module.css"

const AddBox = ({ imageSrc, browserName, version, height, width }) => {
  return (
    <div className={styles.container}>
        <Image src={imageSrc} alt='browserImg' height={height} width={width} className={styles.img}/>
        <h1>Add to {browserName}</h1>
        <p>Minimum version {version}</p>
        <hr className={styles.line} />
        <button className={styles.btn}>Add & Install Extension</button>
    </div>
  )
}

export default AddBox