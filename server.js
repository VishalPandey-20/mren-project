const express = require('express');
const app = express()
var cors = require('cors')
const db = require("./databaseConnection/connection");
const router = require("./routes/router");
const dotenv = require("dotenv").config();
app.use(express.json())
app.use(cors())
app.use("/",router);

const port = process.env.PORT || 7899
app.listen(port,()=>{
    console.log(`server is running on http:localhost:${port}`);
})