import api from '.';

const signIn = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/signin', {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export default signIn;
