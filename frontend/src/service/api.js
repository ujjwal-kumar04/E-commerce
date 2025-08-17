import axios from 'axios';
import Swal from "sweetalert2";
const URL = "http://localhost:8000";

export const addUser = (data) => axios.post(`${URL}/register`, data);
export const loginUser = (data) => axios.post(`${URL}/login`, data);
export const getUserInfo = (username) =>
  axios.get(`${URL}/userinfo`, { params: { username } });

export const useCart = () => {
  const addToCart = async (product) => {
    const userData = JSON.parse(localStorage.getItem("loggedInUser"));
    const username = userData?.user?.username || userData?.user?.email || userData?.user?.mobile;

    if (!username) {
      alert("Please login first");
      return;
    }

    try {
      await axios.post("http://localhost:8000/cart", {
        username,
        product,
      });               Swal.fire({
                          toast: true,
                          position: 'top',
                          icon: 'success',
                          title: 'Item added to cart!',
                          showConfirmButton: false,
                          timer: 2000,
                          timerProgressBar: true
                        });
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return { addToCart };
};
export const useWatchlist = () => {
  const addToWatchlist = async (product) => {
    const userData = JSON.parse(localStorage.getItem("loggedInUser"));
    const username = userData?.user?.username || userData?.user?.email || userData?.user?.mobile;

    if (!username) {
      alert("Please login first");
      return;
    }

    try {
      await axios.post("http://localhost:8000/watchlist", {
        username,
        product,
      });
      
        Swal.fire({
                          toast: true,
                          position: 'top',
                          icon: 'success',
                          title: 'Added to watchlist!',
                          showConfirmButton: false,
                          timer: 2000,
                          timerProgressBar: true
                        });
    } catch (error) {
      console.error("Failed to save watchlist:", error);
    }
  };

  return { addToWatchlist };
};
