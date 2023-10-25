const {model,Schema} = require("mongoose");

const accountSchema = Schema({
    username: String,
    funds: Number
});

module.exports = model('Account', accountSchema);