// // src/ProductcardDetails.jsx
// import { useParams } from "react-router-dom";

// import"./Productdetail.css"

// import  {products} from "./ProductList";



// export default function Productcarddetails() {
//   const { id } = useParams();
 
//   const productList = products.find((p) => p.id === id);

//   if (!productList) return <h2>Product Not Found</h2>;

//   return (
    
//     <div class="product-detail-container">
//     <div class="image-section">
//       <img src={productList.img} alt="Men Cotton Shirt"/>
//     </div>

//     <div class="info-section">
//       <h2>{productList.name}</h2>
//       <p class="rating">★★★★☆ <span>(4.3)</span></p>

//       <p class="description">
//         Premium cotton shirt with a perfect fit, soft feel, and modern look.
//         Ideal for daily wear and semi-formal occasions.
//       </p>

//       <div class="price">
//         <span class="new-price">₹{productList.price}</span>
//         <span class="old-price">₹{productList.originalprice}</span>
//         <span class="discount">{productList.discount}</span>
//       </div>

//       <div class="details">
//         <p><strong>Brand:</strong> UrbanStyle</p>
//         <p><strong>Color:</strong> Sky Blue</p>
//         <p><strong>Category:</strong> Men Shirt</p>

//         <label for="size"><strong>Size:</strong></label>
//         <select id="size" name="size">
//           <option value="S">S</option>
//           <option value="M" selected>M</option>
//           <option value="L">L</option>
//           <option value="XL">XL</option>
//         </select>
//       </div>

//       <div class="actions">
//         <button class="add-to-cart">Add to Cart</button>
//         <button class="buy-now">Buy Now</button>
//       </div>
//     </div>
//   </div>
//   );
// }
// src/ProductcardDetails.jsx
import { useParams } from "react-router-dom";
import { useCart } from "../components/cartContext";
import { products } from "./ProductList"; // correct path
import "./Productdetail.css";

export default function Productcarddetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id); // Ensure id is number

  if (!product) return <h2>Product Not Found</h2>;

  return (
    <div className="product-detail-container">
      <div className="image-section">
        <img src={product.img} alt={product.name} />
      </div>

      <div className="info-section">
        <h2>{product.name}</h2>
        <p className="rating">★★★★☆ <span>(4.3)</span></p>

        <p className="description">
          Premium cotton shirt with a perfect fit, soft feel, and modern look.
          Ideal for daily wear and semi-formal occasions.
        </p>

        <div className="price">
          <span className="new-price">₹{product.price}</span>
          <span className="old-price">₹{product.originalprice || 999}</span>
          <span className="discount">{product.discount || "50% off"}</span>
        </div>

        <div className="details">
          <p><strong>Brand:</strong> UrbanStyle</p>
          <p><strong>Color:</strong> Sky Blue</p>
          <p><strong>Category:</strong> {product.category}</p>

          <label htmlFor="size"><strong>Size:</strong></label>
          <select id="size" name="size" defaultValue="M">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div className="actions">
          <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
