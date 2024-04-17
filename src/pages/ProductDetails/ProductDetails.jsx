import { useParams } from 'react-router-dom';

import { getProductById } from '../../fakeApi';

const ProductDetails = () => {
  //   const { productId } = useParams();
  //   return <div>Now showing product with ID - {productId}</div>;

  const { id } = useParams();
  const product = getProductById(id);
  return (
    <main>
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
