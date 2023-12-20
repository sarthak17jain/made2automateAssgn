import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/DashBoard/Dashboard';
import AddProduct from './Components/AddProduct';
import ProductSuccess from './Components/ProductSuccess';
import Products from './Components/Products';
import ProductsContextProvider from './ProductsContextProvider';
import ProductCard from './Components/ProductCard';
import BarCodeScanner from './Components/BarCodeScanner/BarCodeScanner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <ProductsContextProvider>
            <BrowserRouter>
                <ToastContainer/>
                <Routes>
                    <Route path='/' element={<Dashboard/>}/>
                    <Route path='/barcodescanner' element={<BarCodeScanner/>}/>
                    {/* <Route path='/' element={<ProductCard/>}/> */}
                    <Route path='/addProduct' element={<AddProduct/>}/>
                    <Route path='/products' element={<Products />}/>
                    <Route path='/addedProduct' element={<ProductSuccess />}/>
                </Routes>
            </BrowserRouter>
        </ProductsContextProvider>
    );
}

export default App;
