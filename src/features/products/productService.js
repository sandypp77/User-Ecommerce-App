import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../../../../User/ecommerce-app/src/utils/axiosconfig";

const getAllProducts = async (data) => {
  console.log(data);
  const response = await axios.get(
    `${base_url}product?${
      data?.brand !== null ? `brand=${data?.brand}&&` : ""
    }${data?.tag !== null ? `tags=${data?.tag}&&` : ""}${
      data?.category !== null ? `category=${data?.category}&&` : ""
    }${data?.minPrice !== null ? `price[gte]=${data?.minPrice}&&` : ""}${
      data?.maxPrice !== null ? `price[lte]=${data?.maxPrice}&&` : ""
    }${data?.sort !== null ? `sort=${data?.sort}&&` : ""}`
  );
  return response.data;
};

const getBrands = async () => {
  const response = await axios.get(`${base_url}brand`);
  return response.data;
};

const getCategory = async () => {
  const response = await axios.get(`${base_url}pCategory`);
  return response.data;
};

const getAProduct = async (id) => {
  const response = await axios.get(`${base_url}product/${id}`);
  return response.data;
};

const rateProduct = async (data) => {
  const response = await axios.put(`${base_url}product/rating`, data, config);
  return response.data;
};

const addToWishList = async (productData) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    { productId: productData },
    config
  );
  return response.data;
};

const productService = {
  getAllProducts,
  getAProduct,
  addToWishList,
  rateProduct,
  getBrands,
  getCategory,
};

export default productService;
