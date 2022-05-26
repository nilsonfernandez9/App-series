import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Container">
        <nav className="navbar__nav">
          <h3 className="nav__brand">
            <Link to="/">
              <i className="fas fa-video">Icono de video</i>
            </Link>
          </h3>
          <ul className="nav__links">
            <li className="links__link">
              <link to="/">Inicio</link>
            </li>
            <li className="nav__links">
              <link to="/about">About</link>
            </li>
          </ul>        
        </nav>
      </div>
    </div>
  );
};

export default Navbar;