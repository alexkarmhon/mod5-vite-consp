import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import clsx from 'clsx';

import About from '../../pages/About';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import ProductDetails from '../../pages/ProductDetails';
import Products from '../../pages/Products';
import Button from '../Button/Button';
import LoginForm from '../LoginForm/LoginForm';
import Mission from '../Mission';
import Modal from '../Modal/Modal';
import Reviews from '../Reviews';
import Team from '../Team';
import css from './App.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={css.container}>
      <header className={css.header}>
        <p className={css.logo}>
          <span role="image" aria-label="shirt icon">
            👔
          </span>{' '}
          MerchStore
        </p>

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
        <Button type={'button'} onClick={toggleModal}>
          LogIn
        </Button>
      </header>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          {<LoginForm closeModal={toggleModal} />}
        </Modal>
      )}

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
