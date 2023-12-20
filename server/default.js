import Product from './model/productSchema.js';
import { products } from './constants/product.js';

const DefaultData = async () => {
    try {
        await Product.deleteMany({});
        const doc = await Product.create({detailsOfProducts: products});
        // console.log(doc);
        console.log('Data imported Successfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

export default DefaultData;