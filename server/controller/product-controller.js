import Product from '../model/productSchema.js';

export const getProducts = async (request, response) => {
    try {
        console.log("getproductscalled");
        const products = await Product.find({});
        const retObj = (({ __v, _id, ...o }) => o)(products);
        response.json(retObj);
    }catch (error) {
        console.log("server getProducts error: "+error);
    }
}

export const modifyProduct = async (request, response) => {
    try {
        console.log("server modifyProduct called");
        const {productId} = request.body;
        console.log(request.params.ProductId);
        const product = await Product.findOne({ 'ProductId': request.params.ProductId});
        console.log(product);
        return res.status(201).end();
    }catch (error) {
        console.log("modifyProduct error: "+error);
        response.status(500).send("Something went wrong");
    }
}

export const addItem = async (req, res) => {
    const {userEmail, data: product} = req.body;
    try{
        const cartDoc = await cartModel.findOne({email: userEmail});
        let cart = cartDoc.cartItems;
        console.log(product);
        let itemIndex = -1;
        //findIndex runs only if cart isn't empty
        if(cart.length){
            itemIndex = cart.findIndex(p => p.id == product.id);
        }

        // Check if product exists or not
        if(itemIndex > -1){
            let productItem = cart[itemIndex];
            productItem.quantity++;
            cart[itemIndex] = productItem;
        }else {
            cart.push(product);
        }
        await cartDoc.save();
        return res.status(201).end();     
    } catch (err) {
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}