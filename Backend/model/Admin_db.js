const mongoose = require('mongoose');
const catsc = mongoose.Schema({
    name:String,
    email:String,
    password:String,
});
module.exports=mongoose.model("Admin",catsc)