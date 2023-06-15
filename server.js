const express = require('express')
const cors =require('cors')
const path= require('path')
const app =express()
const db=require('./db.js')
const bodyParser=require('body-parser')
const router=require('./routers')



const PORT=process.eventNames.PORT || 80



//db connection
db.connect();


//middleware

app.use(bodyParser.json({limit:"50mb"}))
app.use(bodyParser.urlencoded({extended:true, limit:"50mb"}))

app.use(express.json())


//header
app.use((req,res,next)=>
{
    res.header('Access-Control-Allow-Origin',"*")
    res.header('Access-Control-Allow-Headers',"*")
    next()
})



//api
app.use('/api',router)




//static resources
app.use('/upload',express.static(path.join(__dirname,'/../uploads')))
app.use(express.static(path.join(__dirname,"../../../../../../../../Users/Tabasum/OneDrive/Desktop/Webcode/stackoverf/build")))


app.get('*',(req,res)=>{

    try
    {

        res.sendFile(path.join(`${__dirname}../../../../../../../../Users/Tabasum/OneDrive/Desktop/Webcode/stackoverf/build/index.html`))
    }
    catch(e)
{
    res.send('somthing went wrong')
}})


//cors
app.use(cors())


// app.get("/", function (req, res) {
//     res.send("🙋‍♂️, 🌏 🎊✨🤩");
//   });
//server listening

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));