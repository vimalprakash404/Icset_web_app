import axios from 'axios';

const ipaddress="http://localhost:3000"; // Replace with your server's URL

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${ipaddress}/users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllGoogle = async () => {
    try {
      const response = await axios.get(`${ipaddress}/google`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const getAllIbm = async () => {
    try {
      const response = await axios.get(`${ipaddress}/ibm`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const getUserById = async (userId) => {
    try {
      const response = await axios.get(`${ipaddress}/user/${userId}`);
      return response.data;
    } catch (error) {
      return undefined;
      throw error;
    }
  };

  export const getGoogleById = async (userId) => {
    try {
      const response = await axios.get(`${ipaddress}/google/${userId}`);
      return response.data;
    } catch (error) {
      return undefined;
      throw error;
    }
  };

  export const getIbmById = async (userId) => {
    try {
      const response = await axios.get(`${ipaddress}/ibm/${userId}`);
      return response.data;
    } catch (error) {
      return undefined;
      throw error;
    }
  };
  
  export const verifyUsersById = async (userId) => {
    try {
      const response = await axios.put(`${ipaddress}/users/${userId}/verify`, {
        verify: true, // You can pass true to verify or false to unverify
      });
      return response.data;
    } catch (error) {
      
      throw error;
    }
  };

  export const lunchUsersById = async (userId) => {
    try {
      const response = await axios.put(`${ipaddress}/users/${userId}/lunch`, {
        lunch: true, // You can pass true to verify or false to unverify
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const verifyGoogleById = async (userId) => {
    try {
      const response = await axios.put(`${ipaddress}/google/${userId}/verify`, {
        verify: true, // You can pass true to verify or false to unverify
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const verifyIbmById = async (userId) => {
    try {
      const response = await axios.put(`${ipaddress}/ibm/${userId}/verify`, {
        verify: true, // You can pass true to verify or false to unverify
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

async function checkServerStatus(seripverURL) {
    try {
      const response = await fetch(ipaddress);
  
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return true;
    }
  }

export default checkServerStatus;