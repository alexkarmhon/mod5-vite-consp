import { PropTypes } from 'prop-types';

import css from './Button.module.css';

const Button = ({ onClick,type, children }) => {
  return (
    <button type={type} className={css.button} onClick={() => onClick()}>
      <span className={css.btnContent}>{children}</span>
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
