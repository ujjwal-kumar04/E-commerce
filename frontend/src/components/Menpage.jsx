

import tshirt2 from "../Assets/tshirt2.png"
import formal from "../Assets/formal.png"
import jeans from "../Assets/jeans.png"
import shorts from "../Assets/shorts.png"
import Navbar from '../pages/Navbar'
import { products } from "../pages/ProductList";
import Productcard from "../pages/Productcard";


export default function Menpage() {
  const menProducts = products.filter((item) => item.category === "Men");
  return (
    <>
    <Navbar/>
    <div style={{margin:" 2px 10vh 5px 10vh",width:"90%"}}>
        <div className="header">
            <h2>Men's Fashion</h2>
            
          </div>
     <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
 
   <Productcard products={menProducts} />
    
    
    </div>
    
    </div>
    </>
  )
}
