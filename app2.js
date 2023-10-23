const express = require("express");

const { accountsRouter } = require("./api/accounts/accounts.routes");


const app = express();

app.use(express.json());

app.use('/accounts',accountsRouter)

app.listen(8000, ()=>{
    console.log("Running on port 8000");
})

