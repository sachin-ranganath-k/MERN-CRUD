import axios from "axios";

export const addUser = async (data) => {
  const URL = "http://localhost:8000";   //Setup done in server (index.js)

  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error...!");
  }
};
