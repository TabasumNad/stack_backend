const mongoose=require('mongoose')

const url="mongodb+srv://tabbu:tabbu123@cluster0.ezzbjn7.mongodb.net"


module.exports.connect=()=>{
    mongoose.connect(url).then((res)=>console.log("MongoDB Connected successfully"))
    .catch((err)=>console.log('Error',err))
};