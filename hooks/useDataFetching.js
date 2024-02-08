import axios from "axios";

const BASE_URL = process.env.EXPO_API_PUBLIC_URL;

export const useDataFetching = async (endpoint, id = null, filtre = null) => {
  try {
    let url = `${BASE_URL}/${endpoint}`;

    if (id) {
      url += `/${id}`;
    }

    if (filtre) {
      url += `?filtre=${filtre}`;
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
    const response = await axios.get(`${BASE_URL}/studios/${studioId}/jeux`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data for studio:", error);
    throw error;
  }
};

export const fetchLastUpdatedGameForUser = async (userId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/gameList/${userId}/lastUpdated`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data for last game :", error);
    throw error;
  }
};

export const useAddToGameList = async (userId, gameId, etat, note) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/gameList`,
      {
        userId,
        gameId,
        etat,
        note,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

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
  } catch (error) {
    console.error("Error adding game to the list:", error);
    throw error;
  }
};

export const addToFavorites = async (userId, type, id) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/favorisList`,
      {
        userId,
        type,
        id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
