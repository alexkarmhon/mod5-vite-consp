import { Link, Route, Routes } from 'react-router-dom';

import clsx from 'clsx';

import About from '../../pages/About';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import ProductDetails from '../../pages/ProductDetails';
import Products from '../../pages/Products';
import Mission from '../Mission';
import Reviews from '../Reviews';
import Team from '../Team';
import css from './App.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const App = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Link to="/" className={buildLinkClass}>
          <p className={css.logo}>
            <span role="image" aria-label="shirt icon">
              👔
            </span>{' '}
            MerchStore
          </p>
        </Link>
        <nav className={css.nav}>
          <div className={css.linkWrapper}>
            <Link to="/" className={buildLinkClass}>
              Home
            </Link>
          </div>
          <div className={css.linkWrapper}>
            <Link to="/about" className={buildLinkClass}>
              About
            </Link>
          </div>
          <div className={css.linkWrapper}>
            <Link to="/products" className={buildLinkClass}>
              Products
            </Link>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
