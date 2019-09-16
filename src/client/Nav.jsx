// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HOME_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE
} from '../shared/routes';

const Nav = () => (
  <nav>
    <ul>
      {[
        { route: HOME_PAGE_ROUTE, label: 'Home' },
        { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' }
      ].map(link => (
        <li key={link.route}>
          <NavLink to={link.route} activeStyle={{ color: 'limegreen' }} exact>
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
