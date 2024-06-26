import { useSearchParams } from 'react-router-dom';

import ProductList from '../../components/ProductList';
import SearchBox from '../../components/SearchBox';
import { getProducts } from '../../fakeApi';

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';
  const visibleProducts = products.filter(product =>
    product.name.toLowerCase().includes(productName.toLowerCase()),
  );
  const updateQueryString = name => {
    const nextParam = name !== '' ? { name } : {};
    setSearchParams(nextParam);
  };
  return (
    <main>
      <h2>Products</h2>
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} />
    </main>
  );
};

export default Products;
