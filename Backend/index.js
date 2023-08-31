require('dotenv').config();
const exp = require("express")  
const app = exp();  //Convert into a App
app.use(exp.static('public'))
const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
const fu = require("express-fileupload");
app.use(fu());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shantanu:gayen123@cluster0.ajlgcxu.mongodb.net/FoodDelhiveryApp?retryWrites=true&w=majority');

const Category = require("./routes/Category.js");
const Product = require("./routes/Product.js");
const Auth = require("./routes/Auth");

app.get("/",(req,res) =>{
    res.send("Hello Express");
});

app.use("/cat",Category);
app.use("/pro",Product);
app.use("/auth",Auth);

app.listen(2000); //Set port number