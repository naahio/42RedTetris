import api from '.';

const signOut = async () => {
  try {
    const response = await api.post('/auth/signout');
    return response.data;
  } catch (error) {
    return error;
  }
};

export default signOut;
