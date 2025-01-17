const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a product name'],
        },
        quantity: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: Number,
            required: true,
            default: 0,
        },
        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true, // Corrected to 'timestamps' and set to true
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
