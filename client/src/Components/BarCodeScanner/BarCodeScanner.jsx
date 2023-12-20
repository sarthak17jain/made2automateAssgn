import React, {useState} from 'react';
import Header from '../Header';
import Html5QrcodePlugin from './Html5QrcodePlugin';
import ProductCard from '../ProductCard';


function BarCodeScanner() {
    const [ productDetails, setproductDetails ] = useState();

    return (
        <div>
            <Header title="Scan Barcode of Product"/>
            <div style={{marginTop:"15px", display:"flex", justifyContent:"center"}}>
                <Html5QrcodePlugin
                    fps={10}
                    qrbox={350}
                    disableFlip={false}
                    productDetails={productDetails}
                    setproductDetails={setproductDetails}
                />
            </div>
            {productDetails && <ProductCard productDetails={productDetails}/>}
        </div>
    )
}

export default BarCodeScanner;