import "./Header.scss"
import {ReactComponent as Dogs} from "../Assets/dogs.svg"
import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <div className='Header'>
      <nav className='container'>
        <Link className="logo" to="/" aria-label="Dogs - Home"><Dogs/></Link>
        <Link className="login" to="/login">Login / Criar</Link>
      </nav>
    </div>
  )
}

export default Header