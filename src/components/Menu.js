import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ changeMenuMarker, page }) => (
  <div className="navbar-menu-option-container">
    <Link to='/' onClick={() => changeMenuMarker('Start')}>
      <span
        className="navbar-menu-option"
        style={{ borderColor: page === 'start' ? '#B8130D' : null }}
      >
        Start
      </span>
    </Link>
    <Link to='/favorites' onClick={() => changeMenuMarker('lista')}>
      <span
        className="navbar-menu-option"
        style={{ borderColor: page === 'lists' ? '#B8130D' : null }}
      >
        Favorites
      </span>
    </Link>
  </div>
);

export { Menu };
