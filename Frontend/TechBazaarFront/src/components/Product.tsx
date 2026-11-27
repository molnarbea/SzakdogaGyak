import type { ProductType } from "../types/ProductType";

interface ProductProps {
  product: ProductType;
}

function Product({ product }: ProductProps) {
  return <div>
    <p>{product.id}</p>
    <p>{product.title}</p>
    <p>{product.description}</p>
    <p>{product.color}</p>
    <p>{product.condition_status}</p>
    <p>{product.price}</p>
    <p>{product.is_active}</p>
    <p>{product.is_sold}</p>
  </div>;
}

export default Product;
