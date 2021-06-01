import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const AuthNav = () => {
  return (
    <nav>
      <NavLink
        className="header__link"
        activeClassName="header__link-active"
        exact
        to={routes.register}
      >
        Реєстрація
      </NavLink>
      <NavLink
        className="header__link"
        activeClassName="header__link-active"
        to={routes.login}
      >
        Вхід
      </NavLink>
    </nav>
  );
};

export default AuthNav;
