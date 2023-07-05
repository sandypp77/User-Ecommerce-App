import axios from 'axios';
import { base_url } from "../../utils/baseUrl";
import { config } from "../../utils/axiosconfig";

const register = async (userData) => {
  const response = await axios.post(`${base_url}user/register`, userData);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${base_url}user/login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getAUser = async (id) => {
  const response = await axios.get(`${base_url}user/single-user/${id}`, config);
  return response.data;
};

const getUserWishList = async () => {
  const response = await axios.get(`${base_url}user/wishlist`, config);
  return response.data;
};

const addToCart = async (cartData) => {
  const response = await axios.post(`${base_url}user/cart`, cartData, config);
  return response.data;
};

const getCart = async () => {
  const response = await axios.get(`${base_url}user/cart`, config);
  return response.data;
};

const removeProductFromCart = async (cartId) => {
  const response = await axios.delete(
    `${base_url}user/delete-product-cart/${cartId}`,
    config
  );
  return response.data;
};

const updateProductQuantityFromCart = async (cartDetail) => {
  const response = await axios.put(
    `${base_url}user/update-product-cart/${cartDetail.cartItemId}/${cartDetail.quantity}`,
    {},
    config
  );
  return response.data;
};

const createOrder = async (orderDetail) => {
  console.log(orderDetail);
  const response = await axios.post(
    `${base_url}user/cart/create-order`,
    orderDetail,
    config
  );
  return response.data;
};

const getMyOrders = async () => {
  const response = await axios.get(`${base_url}user/get-orders`, config);
  return response.data;
};

const updateUser = async (userDetail) => {
  const response = await axios.put(
    `${base_url}user/update`,
    userDetail,
    config
  );
  return response.data;
};

const forgotPasswordToken = async (data) => {
  const response = await axios.post(
    `${base_url}user/forgot-password-token`,
    data,
    ""
  );
  return response.data;
};

const resetPassword = async (data) => {
  const response = await axios.put(
    `${base_url}user/reset-password/${data.token}`,
    { password: data.password }
  );
  return response.data;
};

const userService = {
  register,
  login,
  getUserWishList,
  addToCart,
  getCart,
  removeProductFromCart,
  updateProductQuantityFromCart,
  createOrder,
  getMyOrders,
  updateUser,
  getAUser,
  forgotPasswordToken,
  resetPassword
};

export default userService;
