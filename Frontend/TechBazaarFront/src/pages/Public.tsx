import Products from "../components/Products";
import "../css/publicPage.css";

function Public() {
  return (
    <>
    <h2>Public</h2>
      <p>
        <i>Itt jelenek meg a termékek</i>
      </p>
    <article>
      <Products />
    </article>
    </>
      
  );
}

export default Public;
