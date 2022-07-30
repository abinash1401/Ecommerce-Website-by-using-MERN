const express = require('express');
const {dbConn} = require('./config/db')
const productroutes = require('./routes/product')
const userroutes = require('./routes/userSignup')
const cors = require('cors')

const app = express();
const port = 1200;

app.use(express.json());
app.use(cors())
app.use(productroutes);
app.use(userroutes);
dbConn();
app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});
