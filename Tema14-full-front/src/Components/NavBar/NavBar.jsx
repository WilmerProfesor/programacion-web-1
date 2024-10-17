import "./NavBar.css";

import { Link } from "react-router-dom";

import Button from '@mui/material/Button';

const NavBar = () => {
  return (
    <nav>
      <Link to={"/"} >
        <Button sx={{margin:3, width:150}} variant="contained">Inicio</Button>
      </Link>
      <Link to={"/characters"} >
        <Button sx={{margin:3, width:150}} variant="contained">Aliens</Button>
      </Link>
      <Link to={"/characters"} >
        <Button sx={{margin:3, width:150}} variant="contained">Humans</Button>
      </Link>
      <Link to={"/about"} >
        <Button sx={{margin:3, width:150}} variant="contained">Acerca de</Button>
      </Link>
    </nav>
  )
}

export default NavBar