const mongoose = require('mongoose');
const proc = mongoose.Schema({
    category:mongoose.Types.ObjectId,
    pname:String,
    pprice:Number,
    pd:String,
    pimg:String,
   
});
module.exports=mongoose.model("Product",proc)


