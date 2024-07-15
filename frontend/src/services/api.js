import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

export const getTabs = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/tabs`);
  return response.data;
};

export const getEnhancedTabs = async () => {
  const response = await axios.get(`${API_BASE_URL}/api/enhanced-tabs`);
  return response.data;
};
