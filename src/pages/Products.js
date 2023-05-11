// const Products = () => {
//   // useEffect(() => {
//   //     делаем запрос, если нужно
//   // }, [])

//   return <div>Products</div>;
// };

// export default Products;

import { ProductList } from '../components/ProductList';
import { getProducts } from '../fakeAPI';

const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};

export default Products;
