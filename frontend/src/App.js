import React, { useState } from 'react';
// export default App;
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Menpage from "./components/Menpage";
import Womenpage from "./components/Womenpage";
import Kidspage from "./components/Kidspage";
import Shop from "./components/Shop";
import Loginpage from "./Admin/Loginpage";
import RegisterForm from "./Admin/RegisterForm";
import Productdetail from "./pages/Productdetail";
import CartPage from './components/CartPage';
import WatchlistPage from "./components/Watchlistpage";
import ProceedToPayPage from "./components/checkout";
import AboutPage from './Admin/AboutPage';
import Paymentpage from './components/Paymentpage';
import AdminLogin from './Admin/Adminlogin';
import AdminOrdersPage from './Admin/Adminpage';
import Companyinfo from './pages/Companyinfo'
import ContectSection from './pages/Contectsection';

function App(props) {
 const [loggedInUser, setLoggedInUser] = useState(() => {
    const saved = localStorage.getItem('loggedInUser');
    return saved ? JSON.parse(saved).user : null;
  });
  return (
   
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/login" exact element={<Loginpage  setLoggedInUser={setLoggedInUser}/>} />
        <Route path="/userinfo" element={<AboutPage user={loggedInUser} />} />
        <Route path="/aboutus" exact element={<Companyinfo/>} />
        <Route path="/register" exact element={<RegisterForm />} />
        <Route path="/Shop" exact element={<Shop />} />
        <Route path="/Menpage" exact element={<Menpage />} />
        <Route path="/Womenpage" exact element={<Womenpage />} />
        <Route path="/Kidspage" exact element={<Kidspage />} />
        <Route path="/product/:id" element={<Productdetail />} />
        <Route path="/cart" exact element={<CartPage  user={loggedInUser}/>} />
        <Route path="/watchlist" element={<WatchlistPage user={loggedInUser} />} />
        <Route path="/checkout" element={<ProceedToPayPage/>}/>
         <Route path="/admin" exact  element={<AdminLogin/>}/>
         <Route path="admin/orders" element={<AdminOrdersPage/>}></Route>
         <Route path="/payment" element={<Paymentpage />} />
         <Route path="/contect" element={<ContectSection/>}></Route>
      </Routes>
    // </CartProvider>
  );
}



// function App() {
//   const [loggedInUser, setLoggedInUser] = useState(() => {
//     const saved = localStorage.getItem('loggedInUser');
//     return saved ? JSON.parse(saved).user : null;
//   });

//   return (
//     <Routes>
//       <Route path="/" exact element={<Homepage />} />
//       <Route path="/login" element={<Loginpage setLoggedInUser={setLoggedInUser} />} />
//       <Route path="/userinfo" element={<AboutPage user={loggedInUser} />} />
//       <Route path="/register" element={<RegisterForm />} />
//       <Route path="/Shop" element={<Shop />} />
//       <Route path="/Menpage" element={<Menpage />} />
//       <Route path="/Womenpage" element={<Womenpage />} />
//       <Route path="/Kidspage" element={<Kidspage />} />
//       <Route path="/product/:id" element={<Productdetail />} />
//       <Route path="/cart" element={<CartPage user={loggedInUser} />} />
//       <Route path="/watchlist" element={<WatchlistPage />} />
//       <Route path="/checkout" element={<ProceedToPayPage />} />
//       <Route path="/admin" element={<AdminLogin />} />
//       <Route path="/admin/orders" element={<AdminOrdersPage />} />
//     </Routes>
//   );
// }

export default App;
