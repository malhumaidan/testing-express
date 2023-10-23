const accounts = require("../../accounts");


function getAllAccounts(req,res){
    res.status(200).json(accounts);
}

function addAccount(req,res){

    const generatedId = accounts.length + 1
    const newAcc = {
        "id": generatedId,
        ...req.body
    }
    accounts.push(newAcc);
    res.status(200).json(accounts);
}

function deleteAccount(req,res){

    const id = req.params.accountId;
    const account = accounts.find((account)=> account.id == id);
    
    if(!account) res.status(404).json({ message: "not found"});
    
    const newAccounts = accounts.filter((account)=> account.id !== +id);
    res.status(200).json(newAccounts);
}

function updateAccount(req,res){

    const id = req.params.accountId;
    const account = accounts.find((account)=> account.id == id);

    if(!account)res.status(404).json({ message: "not found"});

    account.username = req.body.username;
    account.funds = req.body.funds;
    res.status(200).json(account);
}

function getAccount(req,res) {
    const id = req.params.accountId;
    const account = accounts.find((a)=> a.id == id);
    if(!account) return res.status(404).json({message: "not found"})
    res.status(200).json(account);
}

function getAccountByUsername(req,res) {
    const username = req.params.username;
    const currency = req.query.currency;
    const account = accounts.find((acc)=> acc.username == username);
    if(!account) return res.status(404).json({message: "username not found"})
    if(currency == "usd") account.fundsInUSD = account.funds * 3.33;
    res.status(200).json(account);
}

module.exports = {getAllAccounts, addAccount, deleteAccount, updateAccount, getAccount,getAccountByUsername}