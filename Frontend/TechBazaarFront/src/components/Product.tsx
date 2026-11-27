import type { ProductType } from "../types/ProductType";
import "../css/publicPage.css";

interface ProductProps {
  product: ProductType;
}

function Product({ product }: ProductProps) {
  return <section className="kartya">
    <h2>Title: {product.title}</h2>
    <img src={product.img} alt="kép" />
    <p><strong>ID:</strong> {product.id}</p>
    <p><strong>Description:</strong> {product.description}</p>
    <p><strong>Color:</strong> {product.color}</p>
    <p><strong>Condition:</strong> {product.condition_status}</p>
    <p><strong>Price:</strong> {product.price}</p>
    <p><strong>Active:</strong> {product.is_active}</p>
    <p><strong>Sold:</strong> {product.is_sold}</p>
  </section>;
}

export default Product;
