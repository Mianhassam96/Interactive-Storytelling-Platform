import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Backend URL (make sure it matches your server)

export const getStories = async () => {
  try {
    const response = await axios.get(`${API_URL}/stories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stories:', error);
  }
};

export const getStoryById = async (storyId) => {
  try {
    const response = await axios.get(`${API_URL}/stories/${storyId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching story:', error);
  }
};

// More API functions like POST, PUT, DELETE can be added here as needed
