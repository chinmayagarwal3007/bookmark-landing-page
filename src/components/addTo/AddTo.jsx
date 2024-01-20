import React from 'react'
import styles from "./addTo.module.css"
import AddBox from '@/components/addBox/AddBox'

const AddTo = () => {
  return (
    <div className={styles.container}>
    <AddBox imageSrc = "/logo-chrome.png" browserName = "Chrome" version ={62} height={102} width={100} />
    <AddBox imageSrc = "/logo-firefox.png" browserName = "Firefox" version ={55} height={102} width={100} />
    <AddBox imageSrc = "/logo-opera.png" browserName = "Opera" version ={46} height={102} width={100} />
    </div>
  )
}

export default AddTo