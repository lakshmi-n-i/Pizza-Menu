const mongoose = require("mongoose");
var mongoURL = 'mongodb+srv://idkwhattodo:wt123$@cluster0.ogqcho0.mongodb.net/menu'
mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})
var db = mongoose.connection
db.on("connected",()=>{
    console.log("Database connection is successful");
})

db.on("error",()=>{
    console.log("Mongo db connection failed");
})
module.exports = mongoose
