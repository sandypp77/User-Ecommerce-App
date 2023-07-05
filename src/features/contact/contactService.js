import axios from "axios";
import { base_url } from "../../utils/baseUrl";
import { config } from "../../../../../User/ecommerce-app/src/utils/axiosconfig";

// const getContacts = async () => {
//   const response = await axios.get(`${base_url}enquiry/`);
//   return response.data;
// };

// const getContact = async (ContactData) => {
//   const response = await axios.get(`${base_url}enquiry/${ContactData}`);
//   return response.data;
// };

const createContact = async (ContactData) => {
  const response = await axios.post(`${base_url}enquiry/`, ContactData);
  return response.data;
};

const ContactService = { createContact };

export default ContactService;
