import axios from 'axios';

//const API_URL = 'https://fakestoreapi.com';
const API_URL = 'https://dummyjson.com';
export const getShopItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch shop items.');
  }
};

export const getItemcategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/categories`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch shop items categories.');
  }
};