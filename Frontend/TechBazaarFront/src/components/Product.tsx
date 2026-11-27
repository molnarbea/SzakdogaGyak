import type { ProductType } from "../types/ProductType";

interface ProductProps {
  product: ProductType;
}

function Product({ product }: ProductProps) {
  return <div>
    <p>ID: {product.id}</p>
    <p>Title: {product.title}</p>
    <p>Description: {product.description}</p>
    <p>Color: {product.color}</p>
    <p>Condition: {product.condition_status}</p>
    <p>Price: {product.price}</p>
    <p>Active: {product.is_active}</p>
    <p>Sold: {product.is_sold}</p>
  </div>;
}

export default Product;
