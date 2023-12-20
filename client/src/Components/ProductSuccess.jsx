import React from 'react';
import ProductCard from './ProductCard';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import Barcode from 'react-barcode';

function ProductSuccess() {
    const headerStyle = {
        fontSize: "1.7rem",
        backgroundColor: "rgb(242, 244, 248)",
        height: "3.5rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
    };
    const barCodeSection = {
        fontSize: "1.2rem",
        backgroundColor: "rgb(242, 244, 248)",
        borderRadius: "10px",
        display: "flex",
        padding: "10px",
        alignItems: "center",
    };
    // const details = {
    //     ProductName: '',
    //     ProductId: '',
    //     ManufacturerName: '',
    //     ProductDescription: '',
    //     ProductQuantity: '',
    //     PriceperPiece: '',
    //     Category: 'New Stock'
    // };
    const location = useLocation();
    const productDetails = location.state==null ? null : location.state.productDetails;
    console.log(productDetails);

    return (
        <div>
            <Header title="Product Description"/>
            <div style={{width:"80%", margin: "10px auto"}}>
                <div style={headerStyle}><strong>Successfully Added Product</strong></div>
            </div>
            <ProductCard productDetails={productDetails}/>
            {/* <div style={{width:"80%", margin: "10px auto", textAlign:"center", height:"50px"}}>
                Barcode
                <img id="barcode"/>
            </div> */}

            <div style={{width:"80%", margin: "10px auto"}}>
                <div style={barCodeSection}>
                    <strong style={{marginRight:"20px"}}>Barcode: </strong>
                    <Barcode value="{productDeuctId}" height={80} width={1.7} displayValue={false}/>
                </div>
            </div>
        </div>
    )
}

export default ProductSuccess;