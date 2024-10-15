import "./NavBar.css";

import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <ul className="list-nav">
        <Link to={"/"} className="li-nav">Inicio</Link>
        <Link to={"/details"} className="li-nav">Detalles</Link>
        <Link className="li-nav">Acerca de</Link>
    </ul>
  )
}

export default NavBar