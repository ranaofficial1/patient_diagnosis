import axios from 'axios';


const API_URL = process.env.REACT_APP_URL;
const USERNAME = process.env.REACT_APP_USERNAME;
const PASSWORD = process.env.REACT_APP_PASSWORD;


const fetchApiData = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`,
      },
    });
    return response.data;
    
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchApiData;