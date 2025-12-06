import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import './Nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        MyApp
      </Link>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/filter" className="nav-link" onClick={closeMenu}>
            Filter
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/ui" className="nav-link" onClick={closeMenu}>
            Ui
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/interact" className="nav-link" onClick={closeMenu}>
            Interact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/todo" className="nav-link" onClick={closeMenu}>
            ToDo
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/state" className="nav-link" onClick={closeMenu}>
            State
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
