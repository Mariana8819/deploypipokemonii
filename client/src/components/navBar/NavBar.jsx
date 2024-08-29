import React from 'react';
import { Link } from 'react-router-dom';
import style from './NavBar.module.css';


export default function NavBar() {
  return (
    <div className={style.searchbox}>
    <nav className={style.homenav}>
      <Link to='/home' className={style.homebtn}>
        Home
      </Link>
      <Link to='/create' className={style.homebtn}>
        Create Pokémon
      </Link>
      <Link to='/' className={style.homebtn}>
        Inicio
      </Link>
    </nav>
  </div>
  )
}


