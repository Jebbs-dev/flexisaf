import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

// GET request
export const getPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`);
  return response.data;
};

// POST request
export const createPost = async (newPost) => {
  const response = await axios.post(`${API_URL}/posts`, newPost);
  return response.data;
};

// PUT request (replace entire resource)
export const updatePost = async (id, updatedPost) => {
  const response = await axios.put(`${API_URL}/posts/${id}`, updatedPost);
  return response.data;
};

// PATCH request (update part of the resource)
export const patchPost = async (id, partialPost) => {
  const response = await axios.patch(`${API_URL}/posts/${id}`, partialPost);
  return response.data;
};

// DELETE request
export const deletePost = async (id) => {
  const response = await axios.delete(`${API_URL}/posts/${id}`);
  return response.status === 200;
};