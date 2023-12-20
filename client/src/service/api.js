import axios from 'axios';
// import { post } from '../utils/paytm';

const url = process.env.REACT_APP_SERVER_BASE_URL;

export const getProducts = async () => {
    try {
        console.log("client getProducts called");
        return await axios.get(`${url}/productData/allproducts`);
    } catch (error) {
        console.log('Error while getting products', error);
    }
}

export const modifyProduct = async (productId)=>{
    try{
        console.log("client modifyProduct called");
        let response = await axios.post(`${url}/cart/getcart`, {productId: productId});
        console.log(response.data);
    }catch (error) {
        console.log('error', error);
        throw new Error(error);
    }
}