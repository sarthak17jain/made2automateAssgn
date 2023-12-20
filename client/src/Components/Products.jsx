import React, { useState, useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import Header from "./Header";
import { ProductContext } from "../ProductsContextProvider";

function Products() {
    const { products, setProducts } = useContext(ProductContext);

    return (
        <div>
            <Header title="PRODUCTS" />
            {/* {products.map((product) => (
                <ProductCard productDetails={product} />
            ))}  */}
            {Object.entries(products).map(([key, value]) => (
                <ProductCard productDetails={value} />
            ))}
        </div>
    );
}

export default Products;
