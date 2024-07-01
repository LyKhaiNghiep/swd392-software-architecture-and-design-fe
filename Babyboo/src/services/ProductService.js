import axios from "axios"





export const getAllProduct = async () => {
    console.log('API URL:', process.env.REACT_APP_API_URL); // Dòng gỡ lỗi
    try {
        //để API get all product vô
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/get-all`);
        return res.data;
    } catch (error) {
        console.error('Error logging out in:', error);
        throw error;
    }
}