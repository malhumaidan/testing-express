const express = require("express");
const products = require("./data");

const app = express();
app.use(express.json());


app.get('/api/products', (req,res)=>{
    res.json(products);
});


app.post('/api/products',(req,res)=>{
    
    products.push(req.body)

    res.status(201).json(products);
})

app.get('/api/products/:id',(req,res)=>{
    const id = req.params.id
    const product = products.find((product)=> product.id == id);
    res.status(200).json(product)
})

app.listen(8000, ()=>{
    console.log("Running on port 8000");
})

