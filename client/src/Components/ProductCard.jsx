import { display } from '@mui/system';
import React from 'react';
import default_image from './default_image.png';

function ProductCard({productDetails}) {
    const details = productDetails ? productDetails : {
        productImage: null,
        imageURL: default_image,
        ProductName: 'Length Counter Meter',
        ProductId: '1100AA01',
        ManufacturerName: 'Destotech Pvt. Ltd',
        ProductDescription: 'Typically consists of a mechanical or electronic system that counts the number of rotations of a wheel or shaft, or the number of pulses from an encoder, as the material or object passes through the device',
        ProductQuantity: 12,
        PriceperPiece: '1500',
        Category: 'New Stock'
    };

    return (
        <div style={{width:"80%", margin: "10px auto", padding:"10px", backgroundColor: "rgb(242, 244, 248)", display:"flex", borderRadius:"10px"}}>
            {/* <img style={{display:"block", margin:"10px auto"}} src={details.imageURL} alt="Product Image" width="170px" height="150px"></img> */}
            <img style={{width:"30%", height:"150px"}} src={details.imageURL} alt="Product Image"></img>
            <div style={{width:"70%", marginLeft: "10px"}}>
                <h4 style={{margin: "5px 0"}}>{details.ProductName}</h4>
                <p style={{margin: "8px 0"}}>{details.ProductDescription}</p>
                <p style={{margin:"8px 0", color:"rgb(119, 128, 135)"}}>
                    <span style={{color: "inherit"}}> <strong style={{color: "rgb(72, 58, 230)"}}>Manufacturer:</strong> {details.ManufacturerName} </span>
                    <span style={{marginLeft:"15px", color: "inherit"}}> <strong style={{color: "rgb(72, 58, 230)"}}>ProductId:</strong> {details.ProductId} </span>
                </p>
                <p style={{margin:"8px 0", color:"rgb(119, 128, 135)"}}>
                    <span style={{color: "inherit"}}> <strong style={{color: "rgb(72, 58, 230)"}}>Price (per piece):</strong> {details.PriceperPiece} </span>
                    <span style={{marginLeft:"15px", color: "inherit"}}> <strong style={{color: "rgb(72, 58, 230)"}}>Quantity:</strong> {details.ProductQuantity} pieces</span>
                    <span style={{marginLeft:"15px", color: "inherit"}}> <strong style={{color: "rgb(72, 58, 230)"}}>Category:</strong> {details.Category}</span>
                </p>
            </div>
        </div>
    )
}

export default ProductCard;