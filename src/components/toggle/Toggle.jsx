import React, { useContext } from 'react'
import Sun from "../../img/sun.jpg"
import Moon from "../../img/moon.jpg"
import "./toggle.css"
import { ThemeContext } from '../../context'

function Toggle() {
    const theme = useContext(ThemeContext)
    const handleClick = ()=> {
        theme.dispatch({type:"TOGGLE"})
    }
  return (
    <div className='t'>
        <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon" />
        <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}> </div>
    </div>
  )
}

export default Toggle