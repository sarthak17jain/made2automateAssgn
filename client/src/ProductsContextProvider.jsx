import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
export const ProductContext = createContext(null);

const url = process.env.REACT_APP_SERVER_BASE_URL;

const ProductsContextProvider = ({children}) => {
    const [ products, setProducts ] = useState({});
    useEffect(()=>{
        // console.log("useEffect login context called")
        // try{
        //     const res = checkUser();
        //     console.log(res);
        //     setAccount(res.account);
        // }catch(err){
        //     console.log("client contextprovider error");
        //     console.log(err);
        // }
        const func = async ()=>{
            try{
                console.log("client getProducts called");
                const res = await axios.get(`${url}/productData/allproducts`);   
                console.log(res);
                // const accountDetails = res.data.products;
                // setAccount(accountDetails);
                // setCartData(accountDetails.email);
            }catch(error){
                console.log('error', error);
            }
        }
        func();
    }, []);
    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductsContextProvider;