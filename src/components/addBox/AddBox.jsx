import React from 'react'
import Image from 'next/image'

const AddBox = ({ imageSrc, browserName, version, height, width }) => {
  return (
    <div>
        <Image src={imageSrc} alt='browserImg' height={height} width={width} />
        <p>Add to {browserName}</p>
        <p>Minimum version {version}</p>
    </div>
  )
}

export default AddBox