import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <img alt="logo" src="https://static.pi-top.com/images/logo/black-344x140.png" />
    <ul>
      <li>
        <NavLink
          activeClassName="active"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="active"
          to="/todos/add"
        >
          Add
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
