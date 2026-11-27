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
    <div>
      {productsList.map((product, i) => {
        return <Product product={product} key={i} />;
      })}
    </div>
  );
}

export default Products;
