const express = require("express");

const connectToDb = require("./database/connectDB")
const ProductModel = require("./database/productModel")

const app = express();

// connect to db
connectToDb()

// We need JSON
app.use(express.json())

app.get("/", (request, response) => {
    response.send("Hello there!")
})

// RESOURCE -- Products
// Get List of product
app.get("/products", async (request, response) => {
    // request to db
    const productList = await ProductModel.find()
    response.json(productList)
})

// Create a Product
app.post("/products", async(request, response) => {
    const productData = request.body;
    const newProduct = await ProductModel.create(productData)
    response.json(newProduct)
})

// Get product by Id
app.get("/products/:id", async(request, response) => {
    const productId = request.params.id;
    const newProduct = await ProductModel.findById(productId)
    response.json(newProduct)
})

// Delete a product by Id
app.delete("/products/:id", async(request, response) => {
    const productId = request.params.id;
    const deletedProduct = await ProductModel.findOneAndDelete({_id: productId})
    response.json(deletedProduct)
})

// Updated a product by Id
app.patch("/products/:id", async(request, response) => {
    const productId = request.params.id;
    const productUpdate = request.body;
    const newProduct = await ProductModel.findOneAndUpdate({_id: productId}, productUpdate, {new: true})
    response.json(newProduct)
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})