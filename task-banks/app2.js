const express = require("express");

const connectDb = require('../database');

const { accountsRouter } = require("./accounts/accounts.routes");


const app = express();

app.use(express.json());

app.use('/accounts',accountsRouter)



connectDb();

app.listen(8000, ()=>{
    console.log("Running on port 8000 app2");
})

