const mongoose = require('mongoose');
const catsc = mongoose.Schema({
    categoryname:String
});
module.exports=mongoose.model("Category",catsc)