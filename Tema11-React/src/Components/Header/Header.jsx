import React from 'react';
import "./Header.css";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header = () => {
  return (
    <header>
        <img id='logoHeader' src="https://images.rappi.com/marketplace/mascotaspetshop-1675780946132.jpeg" alt="Logo de la tienda"/>
        <div>
            <h1>Pet-Shop My Happy-House</h1>        
            <p>Su Mejor mascota del Mundo Mundial</p>
        </div>
        <div><AddShoppingCartIcon/></div>
    </header>
  )
}

export default Header