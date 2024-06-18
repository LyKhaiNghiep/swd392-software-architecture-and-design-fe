import axios from "axios";

export const loginUser = async (data) => {
    console.log('API URL:', process.env.REACT_APP_API_URL); // Dòng gỡ lỗi
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/auth`, data);
        return res.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}
export const signupUser = async (data) => {
    console.log('API URL:', process.env.REACT_APP_API_URL); // Dòng gỡ lỗi
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, data);
        return res.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}