const mongoose = require('mongoose');

exports.dbConn = async() => {
    try{
        const dbURL = "mongodb+srv://abinash1401:Abinash2001@cluster0.aaihros.mongodb.net/?retryWrites=true&w=majority"
        await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log(`Database connected`);
    }catch(err){
        console.log(`Database connection error: ${err}`);
    }
}