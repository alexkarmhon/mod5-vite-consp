import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import About from '../../pages/About';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import ProductDetails from '../../pages/ProductDetails';
import Products from '../../pages/Products';
import AppBar from '../AppBar/AppBar';
import LoginForm from '../LoginForm/LoginForm';
import Mission from '../Mission';
import Modal from '../Modal/Modal';
import Reviews from '../Reviews';
import Team from '../Team';
import css from './App.module.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={css.container}>
      <AppBar openModal={toggleModal} />
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
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
