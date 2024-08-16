const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/ConnectNetwork",{
}).then(() =>{
    console.log("Connection Successful");
    
}).catch((errro) =>{
    console.log(error);  
});