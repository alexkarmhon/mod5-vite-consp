import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  return <div>Now showing product with ID - {productId}</div>;
};

export default ProductDetails;
