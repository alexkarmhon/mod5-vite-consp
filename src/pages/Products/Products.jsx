import ProductList from '../../components/ProductList';
import { getProducts } from '../../fakeApi';

const Products = () => {
  const products = getProducts();
  return (
    <main>
      <h2>Products</h2>
      <ProductList products={products} />
    </main>
  );
};

export default Products;
