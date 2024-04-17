import { useLocation, useParams } from 'react-router-dom';

import BackLink from '../../components/BackLink';
import { getProductById } from '../../fakeApi';

const ProductDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state ?? '/products';

  const { id } = useParams();
  const product = getProductById(id);
  return (
    <main>
      <BackLink to={backLinkHref}>Back to products</BackLink>
      <img src="https://via.placehoder.com/960x240" alt="" />
      <h2>
        Product - {product.name} - {id}
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magni
        aspernatur eveniet harum minus, placeat debitis tempora nostrum cumque
        alias et quam mollitia, ea eligendi velit vitae odit. Harum, numquam.
      </p>
    </main>
  );
};

export default ProductDetails;
