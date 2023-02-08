const baseURL = 'https://api.tvmaze.com';

const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${baseURL}${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default fetchData;
