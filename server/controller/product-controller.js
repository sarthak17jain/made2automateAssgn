import Product from '../model/productSchema.js';

export const getProducts = async (request, response) => {
    try {
        console.log("getProductscalled");
        const docs = await Product.find({});
        const products = docs[0].detailsOfProducts;
        // console.log(products);
        response.json(products);
    }catch (error) {
        console.log("server getProducts error: "+error);
    }
}

export const modifyProduct = async (request, response) => {
    try {
        console.log("server modifyProduct called");
        console.log(request.body);
        const {productId, productDetails} = request.body;
        const docs = await Product.find({});
        const productDoc = docs[0];
        let products = productDoc.detailsOfProducts;
        products = {
            ...products,
            [productId]: productDetails
        }

        productDoc.detailsOfProducts = products;
        await productDoc.save();
        return response.status(201).end();
    }catch (error) {
        console.log("modifyProduct error: "+error);
        response.status(500).send("Something went wrong");
    }
}