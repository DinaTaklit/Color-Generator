import { useState, useEffect } from 'react'
import rgbToHex from './utils'


const SingleColor = ({weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false)
    const hexValue = `#${hexColor}`
  return (
    <article
        className={`color ${index > 10 && 'color-light'}`}
        style={{backgroundColor:hexValue}}
    >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
        {alert && <p className="alert"> copied to clipboard</p>}
    </article>
  )
}

export default SingleColor