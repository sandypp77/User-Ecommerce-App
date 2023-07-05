import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../../../../User/ecommerce-app/src/utils/axiosconfig";

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog/`);
  return response.data;
};

const getBlog = async (blogData) => {
  console.log(blogData);
  const response = await axios.get(`${base_url}blog/${blogData}`);
  return response.data;
};

const blogService = { getBlogs, getBlog };

export default blogService;
