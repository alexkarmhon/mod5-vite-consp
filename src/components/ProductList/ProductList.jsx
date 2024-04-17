import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import css from './ProductList.module.css';

const ProductList = ({ products }) => {
  
  const location = useLocation();
  return (
    <div className={css.container}>
      {products.map(product => (
        <div key={product.id} className={css.cardWrapper}>
          <Link to={`${product.id}`} state={location}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <h3 className={css.productName}>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ProductList;
