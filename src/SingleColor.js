import { useState, useEffect } from 'react'
import rgbToHex from './utils'


const SingleColor = ({weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false)
    const hexValue = `#${hexColor}`
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 2500)
        return () => {
            clearTimeout(timeout)
        }
    }, [alert])

  return (
    <article
        className={`color ${index > 10 && 'color-light'}`}
        style={{backgroundColor:hexValue}}
        onClick={() => {
            setAlert(true)
            navigator.clipboard.writeText(hexValue)
        }}
    >
        <p className="percent-value">{weight}%</p>
        <p className="color-value">{hexValue}</p>
        {alert && <p className={`alert color ${index > 10 && 'color-light'}`}> copied to clipboard</p>}
    </article>
  )
}

export default SingleColor