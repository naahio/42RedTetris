import api from '.';

const signUp = async (username: string, email: string, password: string) => {
  try {
    const response = await api.post('/auth/signup', {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

export default signUp;
