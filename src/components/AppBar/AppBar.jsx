import { Link, NavLink } from 'react-router-dom';

import clsx from 'clsx';

import Button from '../Button/Button';
import css from './AppBar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const AppBar = ({openModal}) => {
  return (
    <header className={css.header}>
      <Link to="/">
        <p className={css.logo}>
          <span role="image" aria-label="shirt icon">
            👔
          </span>{' '}
          MerchStore
        </p>
      </Link>

      <nav className={css.nav}>
        <div className={css.linkWrapper}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </div>
        <div className={css.linkWrapper}>
          <NavLink to="/about" className={buildLinkClass}>
            About
          </NavLink>
        </div>
        <div className={css.linkWrapper}>
          <NavLink to="/products" className={buildLinkClass}>
            Products
          </NavLink>
        </div>
      </nav>
      <Button type={'button'} onClick={openModal}>
        LogIn
      </Button>
    </header>
  );
};

export default AppBar;
