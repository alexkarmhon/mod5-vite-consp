import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  const handleBackdropClick = evt => {
    evt.target === evt.currentTarget && onClose();
  };
  const handleEsc = evt => {
    evt.code === 'Escape' && onClose();
  };
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modalContent}>{children}</div>
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
