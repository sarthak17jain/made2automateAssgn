import React, { useState, useContext, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import defaultImage from './default_image.png';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Header from './Header';
import { ProductContext } from '../ProductsContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const detailInitialValues = {
    productImage: null,
    imageURL: defaultImage,
    ProductName: '',
    ProductId: '',
    ManufacturerName: '',
    ProductDescription: '',
    ProductQuantity: '',
    PriceperPiece: '',
    Category: 'New Stock'
};

const imgBtnStyle = {
    display: "block",
    padding: "8px 10px",
    cursor: "pointer",
    margin: "5px auto",
    width: "fit-content",
    fontSize: "1rem",
    backgroundColor: "rgb(21, 101, 192)",
    color: "white",
    borderRadius: "4px"
}

const inpStyle = {
    margin: "7px 0"
}

function AddProduct() {
    const [ details, setDetails ] = useState(detailInitialValues);
    const onInputChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    }
    const handleImgUpload = (e) => {
        // e.preventDefault();
        const reader = new FileReader();
        const inFile = e.target.files[0];
        reader.readAsDataURL(inFile);

        reader.onloadend = () => {
            setDetails({...details, 
                productImage: inFile, 
                imageURL: reader.result
            })
        };
    };

    const navigate = useNavigate();

    const { products, setProducts } = useContext(ProductContext); 
    const handleSubmit = () => {
        if(details.ProductId){
            setProducts({
                ...products,
                [toString(details.ProductId)] : details
            });
            navigate('/addedProduct', { state: { productDetails: details } });
        }else{
            toast.error("Please fill all inputs!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div>
        <Header title="ADD PRODUCT"/>
        <div style={{width:"80%", margin: "10px auto"}}>
            <img style={{display:"block", margin:"10px auto"}} src={details.imageURL} alt="Product Image" width="170px" height="150px"></img>

            <label style = {imgBtnStyle} htmlFor="imgUploadInp">
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="imgUploadInp"
                    type="file"
                    onChange={(e) => handleImgUpload(e)}
                />
                <strong>Upload Image</strong>
            </label> 

            <TextField fullWidth sx={inpStyle} variant="outlined" onChange={(e) => onInputChange(e)} name='ProductName' label='Product Name' />
            <TextField fullWidth sx={inpStyle} variant="outlined" onChange={(e) => onInputChange(e)} name='ProductId' label='Product Id' />
            <TextField fullWidth sx={inpStyle} variant="outlined" onChange={(e) => onInputChange(e)} name='ManufacturerName' label='Manufacturer Name' />
            <TextField fullWidth sx={inpStyle} variant="outlined" onChange={(e) => onInputChange(e)} name='ProductDescription' label='Product Description' />
            <TextField fullWidth sx={inpStyle} variant="outlined" onChange={(e) => onInputChange(e)} name='PriceperPiece' label='Price (per piece)' />
            <TextField fullWidth sx={inpStyle} variant="outlined" onChange={(e) => onInputChange(e)} name='ProductQuantity' label='Product Quantity' />

            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth sx={inpStyle}>
                <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={details.Category}
                label="Select Category"
                name="Category"
                onChange={(e) => onInputChange(e)}
                >
                <MenuItem value={"New Stock"}>New Stock</MenuItem>
                <MenuItem value={"Dead Stock"}>Dead Stock</MenuItem>
                </Select>
            </FormControl>
            </Box>

            <Link to='/'>
                <Button sx={{float: "left", margin: "5px 10px", backgroundColor:"rgb(236, 101, 104)"}} variant="contained">Cancel</Button>
            </Link>

            <Button sx={{float: "right", margin: "5px 10px", backgroundColor:"rgb(74, 148, 137)"}} variant="contained" onClick={() => handleSubmit()}>
                Save Changes
            </Button>
        </div>
        </div>
    )
}

export default AddProduct;