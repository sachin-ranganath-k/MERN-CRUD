import axios from "axios";

export const addUser = async (data) => {
  const URL = "";

  try {
    return await axios.post(`${URL}/add`, data);
  } catch (error) {
    console.log("Error...!");
  }
};
