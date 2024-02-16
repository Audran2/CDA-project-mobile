import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import store from "./store";
import { setFavorites } from "./slice/userFavoriteSlice";

const BASE_URL = process.env.EXPO_API_PUBLIC_URL;

const configureAxios = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const storeTokenInAsyncStorage = async (token) => {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (error) {
    console.error(
      "Erreur lors du stockage du token dans AsyncStorage :",
      error
    );
  }
};

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/users/login`, {
      email,
      password,
    });
    const token = response.data.token;
    await storeTokenInAsyncStorage(token);
    return token;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const useDataFetching = async (endpoint, id = null, filtre = null) => {
  try {
    let url = `${BASE_URL}/${endpoint}`;

    if (id) {
      url += `/${id}`;
    }

    if (filtre) {
      url += `?filtre=${filtre}`;
    }

    const token = await AsyncStorage.getItem("token");
    if (token) {
      configureAxios(token);
    }

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchDataForStudio = async (studioId) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      configureAxios(token);
      const response = await axios.get(`${BASE_URL}/studios/${studioId}/jeux`);
      return response.data;
    } else {
      throw new Error("Token not found in AsyncStorage");
    }
  } catch (error) {
    console.error("Error fetching data for studio:", error);
    throw error;
  }
};

export const fetchLastUpdatedGameForUser = async (userId) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      configureAxios(token);
      const response = await axios.get(
        `${BASE_URL}/gameList/${userId}/lastUpdated`
      );
      return response.data;
    } else {
      throw new Error("Token not found in AsyncStorage");
    }
  } catch (error) {
    console.error("Error fetching data for last game :", error);
    throw error;
  }
};

export const fetchAverageGameListUser = async (userId) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      configureAxios(token);
      const response = await axios.get(
        `${BASE_URL}/gameList/${userId}/averageData`
      );
      return response.data;
    } else {
      throw new Error("Token not found in AsyncStorage");
    }
  } catch (error) {
    console.error("Error fetching data for the average fields :", error);
    throw error;
  }
};

export const useAddToGameList = async (userId, gameId, etat, note) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      configureAxios(token);
      const response = await axios.post(`${BASE_URL}/gameList`, {
        userId,
        gameId,
        etat,
        note,
      });
      console.log("Server Response:", response.data);
      if (response.status === 201) {
        console.log("Game added to the list successfully!");
        return response.data;
      } else {
        console.error(
          "Failed to add game to the list. Server response:",
          response.status,
          response.data
        );
        throw new Error("Failed to add game to the list");
      }
    } else {
      throw new Error("Token not found in AsyncStorage");
    }
  } catch (error) {
    console.error("Error adding game to the list:", error);
    throw error;
  }
};

export const addToFavorites = async (userId, type, id) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      configureAxios(token);
      const response = await axios.post(`${BASE_URL}/favorisList`, {
        userId,
        type,
        id,
      });
      if (response.status === 200) {
        console.log("Game added to the list successfully!");
        const userFavorites = await useDataFetching("favorisList");
        store.dispatch(setFavorites(userFavorites));
        return response.data;
      } else {
        console.error(
          "Failed to add game to the list. Server response:",
          response.status,
          response.data
        );
        throw new Error("Failed to add game to the list");
      }
    } else {
      throw new Error("Token not found in AsyncStorage");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const removeFromFavorites = async (userId, type, id) => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      configureAxios(token);
      const response = await axios.delete(`${BASE_URL}/favorisList`, {
        data: { userId, type, id },
      });
      if (response.status === 200) {
        console.log("Game removed from the list successfully!");
        const userFavorites = await useDataFetching("favorisList");
        store.dispatch(setFavorites(userFavorites));
        return response.data;
      } else {
        console.error(
          "Failed to remove game from the list. Server response:",
          response.status,
          response.data
        );
        throw new Error("Failed to remove game from the list");
      }
    } else {
      throw new Error("Token not found in AsyncStorage");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
