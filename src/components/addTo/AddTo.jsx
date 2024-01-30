import React from 'react'
import styles from "./addTo.module.css"
import AddBox from '@/components/addBox/AddBox'

const AddTo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h1>Download the extension</h1>
        <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
      </div>
      <div className={styles.addToContainer}>
        <AddBox imageSrc = "/logo-chrome.png" browserName = "Chrome" version ={62} height={102} width={100} />
        <AddBox imageSrc = "/logo-firefox.png" browserName = "Firefox" version ={55} height={102} width={100} />
        <AddBox imageSrc = "/logo-opera.png" browserName = "Opera" version ={46} height={102} width={100} />
      </div>

    </div>
  )
}

export default AddTo