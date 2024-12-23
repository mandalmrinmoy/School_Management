const express=require("express")
const morgan = require("morgan")
const dotenv=require("dotenv").config()
const db=require("./config/db")
const bodyParser=require("body-parser")
const cors = require('cors');
app.use(cors());

const app=express()

app.use(morgan("dev"))
app.use(express.json())
app.use(bodyParser.json())
app.use(express.json())

app.use('/api',require("./routes/schoolRoutes"))

app.get('/',(req,res)=>{
    res.send("Welcome")
})

db.query('SELECT 1').then(()=>{
    console.log("DB connected")
    const port=process.env.PORT || 3000
    app.listen(port,()=>{
        console.log("Server Running!!!")
    })
}).catch((error)=>{
    console.log(error)
})

