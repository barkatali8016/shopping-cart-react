import { CartContext } from "../store/shoppingCartContext.jsx";
import { useContext } from "react";
export default function Product({ id, image, title, price, description }) {
  const context = useContext(CartContext);
  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => context.addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
