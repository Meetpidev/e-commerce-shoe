import Product from "./Product.jsx";
import "./Product.css";
function ProductTab() {
  return (
    <>
      <div className="Productcls">

        <Product title="Adidas ZX" idx={0} />
        <Product title="Adidas ZX" idx={1} />
        <Product title="Adidas ZX" idx={2} />
        <Product title="Adidas ZX" idx={3} />
        <Product title="Adidas ZX" idx={4} />
        <Product title="Adidas ZX" idx={5} />

      </div>

      <button className="more">
        More
      </button>
    </>
  );
}
export default ProductTab;
