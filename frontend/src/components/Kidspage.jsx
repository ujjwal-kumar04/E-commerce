import React from 'react'
import Navbar from '../pages/Navbar'
import Productcard from "../pages/Productcard"
import { products } from "../pages/ProductList";

export default function Kidspage() {
  const KidsProduct = products.filter((item) => item.category === "Kids");
  return (
    <><Navbar/>
    <div style={{margin:" 2px 10vh 5px 10vh",width:"90%"}}>
        <div className="header">
            <h2>Kids Fashion</h2>
           
          </div>
     <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
    
   
        
             <Productcard products={KidsProduct} />
    
    
    </div>
    
    </div>
    </>
  )
}
