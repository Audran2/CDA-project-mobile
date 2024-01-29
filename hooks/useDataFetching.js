import axios from "axios";

const BASE_URL = "http://192.168.1.90:3000/api"; //si partage de co : 192.168.10.212 / sinon : 192.168.1.34 / pour ordi portable : 192.168.1.90

const useDataFetching = async (endpoint, id = null) => {
  try {
    let url = `${BASE_URL}/${endpoint}`;

    if (id) {
      url += `/${id}`;
    }

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default useDataFetching;
