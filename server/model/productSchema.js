import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const productSchema = new mongoose.Schema({
    productImage: Object,
    imageURL: String,
    ProductName: String,
    ProductId: String,
    ManufacturerName: String,
    ProductDescription: String,
    ProductQuantity: String,
    PriceperPiece: String,
    Category: String
});

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'product');

const products = mongoose.model('product', productSchema);

export default products;