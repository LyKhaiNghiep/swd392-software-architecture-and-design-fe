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

//Để api get user vào link
// export const getDetailsUser = async (id) => {
//     console.log('API URL:', process.env.REACT_APP_API_URL); // Dòng gỡ lỗi
//     try {
//                                                                  //example link "/user/get-details/${id}"
//         const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/register`, {
//             headers: {
//                 token: `Bearer ${access_token}`, 
//             }
//         });
        
//         return res.data;
//     } catch (error) {
//         console.error('Error logging in:', error);
//         throw error;
//     }
// }