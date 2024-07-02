const express = require('express');
const app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}));

const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');

// routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API server updated")
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
})

// app.get('/api/products', async (req, res) => {
//     try {
//         const products = await Product.find({});
//         res.status(200).json(products);
//     } catch(error) {
//         res.status(500).json({message: error.message})
//     }
// })

// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product)
//     } catch(error) {
//         res.status(500).json({message: error.message})
//     }
// })

// Update a product

// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);

//         if(!product) {
//             return res.status(404).json({message: "Product not found!!!"})
//         }

//         const updatedProduct = await Product.findById(id);
//         return res.status(200).json(updatedProduct);
//     } catch(error) {
//         return res.status(500).json({message: error.message})
//     }
// })

// Delete a product
// app.delete('/api/products/:id', async (req, res) => {
//     try {
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);

//         if(!product) {
//             return res.status(404).json({message: "Product not found"})
//         }

//         res.status(200).json({message: "Product deleted successfully!!!"});
//     } catch(error) {
//         res.status(500).json({message: error.message})
//     }
// })

mongoose.connect('mongodb+srv://admin:gv88nkURBnDJMFly@cluster0.t6xarqt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
 .then(() => {
    console.log("Connected to Database!")
    app.listen(3000, () => {
        console.log("App is running on port 3000");
    })
    
 })
.catch(() => {
    console.log("Connection Failed!!!")
})