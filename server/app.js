const dotenv= require('dotenv')
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' })
require('./db/conn');
// const User = require('./model/UserSchema');

app.use(express.json());
app.use(require('./router/auth'))

const PORT = process.env.PORT;
app.get('/', (req,res) => {
    res.send("hello1")
})



app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
}) 
// console.log("wassup");