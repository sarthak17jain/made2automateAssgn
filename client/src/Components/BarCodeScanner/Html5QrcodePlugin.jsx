import { height, width } from '@mui/system';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useContext } from 'react';
import { ProductContext } from '../../ProductsContextProvider';
import { toast } from 'react-toastify';
const qrcodeRegionId = "html5qr-code-full-region";

// Creates the configuration object for Html5QrcodeScanner.
const createConfig = (props) => {
    let config = {};
    if (props.fps) {
        config.fps = props.fps;
    }
    if (props.qrbox) {
        config.qrbox = props.qrbox;
    }
    if (props.aspectRatio) {
        config.aspectRatio = props.aspectRatio;
    }
    if (props.disableFlip !== undefined) {
        config.disableFlip = props.disableFlip;
    }
    return config;
};

const Html5QrcodePlugin = (props) => {
    const { products, setProducts } = useContext(ProductContext); 

    useEffect(() => {
        // when component mounts
        const config = createConfig(props);
        const verbose = props.verbose === true;
        // Suceess callback is required.
        // if (!(props.qrCodeSuccessCallback)) {
        //     throw "qrCodeSuccessCallback is required callback.";
        // }
        const html5QrcodeScanner = new Html5QrcodeScanner(qrcodeRegionId, config, verbose);
        // html5QrcodeScanner.render(props.qrCodeSuccessCallback, props.qrCodeErrorCallback);
        html5QrcodeScanner.render((decodedText, decodedResult)=>{
            console.log(decodedText);
            console.log(products);

            let prodObj = products[decodedText];
            console.log(prodObj);

            if(prodObj){
                props.setproductDetails(prodObj);
                html5QrcodeScanner.clear();
            }else{
                toast.error("Product Not Found!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                html5QrcodeScanner.pause();
            }

            console.log(decodedResult);
        }, props.qrCodeErrorCallback);

        // cleanup function when component will unmount
        return () => {
            html5QrcodeScanner.clear().catch(error => {
                console.error("Failed to clear html5QrcodeScanner. ", error);
            });
        };
    }, []);

    return (
        <div id={qrcodeRegionId} style={{width: "600px"}}/>
    );
};

export default Html5QrcodePlugin;
