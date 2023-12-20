import { getProducts } from './service/api';
import { createContext, useState, useEffect } from 'react';
export const ProductContext = createContext(null);

const ProductsContextProvider = ({children}) => {
    const [ products, setProducts ] = useState({});

    useEffect(()=>{
        const fetchProducts = async ()=>{
            try{
                const res = await getProducts();
                console.log(res.data);
                setProducts(res.data);
            }catch(error){
                console.log('error', error);
            }
        }
        fetchProducts();
    }, []);
    
    return (
        <ProductContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductsContextProvider;