// import Productcard from "./Productcard"



// import { products } from "./ProductList";



// export default function Featureitem() {
//    const menProducts = products.filter((item) => item.category === "Men");
//    const womenProducts = products.filter((item) => item.category === "Women");
//    const kidsProducts = products.filter((item) => item.category === "Kids");
//   return (
//     <><div style={{margin:" 2px 10px 5px 10px",width:"100%"}}>
//     <div className="header">
//         <h2>Featured Items</h2>
//         <a href="#">Show all →</a>
//       </div>
// <div style={{ display: 'flex', gap: '50px',marginTop:"15px", justifyContent: 'center', flexWrap: 'wrap' }}>

// <Productcard products={menProducts} />

// </div>

//  <div style={{ display: 'flex', gap: '50px',marginTop:"15px", justifyContent: 'center', flexWrap: 'wrap' }}>

//  <Productcard products={womenProducts} />
// </div>
// <div style={{ display: 'flex', gap: '50px',padding:"20px",marginTop:"15px", justifyContent: 'center', flexWrap: 'wrap' }}>

 
// <Productcard products={kidsProducts} />

// </div>
// </div>

//     </>
//   )
// }
// Featureitem.jsx
import Productcard from "./Productcard";
import { products } from "./ProductList";
import "./Featureitem.css";

export default function Featureitem() {
  const menProducts = products.filter((item) => item.category === "Men");
  const womenProducts = products.filter((item) => item.category === "Women");
  const kidsProducts = products.filter((item) => item.category === "Kids");

  return (
    <div className="feature-container">
      <div className="feature-header">
        <h2>Featured Items</h2>
        <a href="/Shop">Show all →</a>
      </div>

      <div className="product-section">
        <Productcard products={menProducts} />
      </div>

      <div className="product-section">
        <Productcard products={womenProducts} />
      </div>

      <div className="product-section last">
        <Productcard products={kidsProducts} />
      </div>
    </div>
  );
}

