const express = require("express");

const accountsController = require("./accounts.controllers");

const accountsRouter = express.Router();


accountsRouter.get('/',accountsController.getAllAccounts);

accountsRouter.post('/',accountsController.addAccount);

accountsRouter.delete('/:accountId',accountsController.deleteAccount);

accountsRouter.put('/:accountId',accountsController.updateAccount);

// accountsRouter.get('/:accountId',accountsController.getAccount);

accountsRouter.get('/:username',accountsController.getAccountByUsername);



module.exports={accountsRouter}

