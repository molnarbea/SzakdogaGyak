import { useProductContext } from "../contexts/ProductContext";
import Product from "./Product";

function Products() {
  const { productsList, load, error } = useProductContext();

  if (load) {
    return (
      <p>
        <i>Termékek betöltése</i>
      </p>
    );
  }
  if (error) {
    return (
      <p>
        <i>{error}</i>
      </p>
    );
  }

  return (
    <>
      {productsList.map((product, i) => {
        return <Product product={product} key={i} />;
      })}
    </>
  );
}

export default Products;
