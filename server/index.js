const express = require('express')
const app = express()
const bodyParser= require('body-parser')
const cors= require('cors')
const  mongoose =require('mongoose')
app.use(bodyParser.json())
app.use(cors())

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
const imtahan = new  mongoose.Schema({
    names:String,
    imageURL:String,
    price:Number
})
const Bay= mongoose.model("Bay",imtahan)
app.get("/api/hey",async(req,res)=>{
    const{names}=req.query
    const newGet =await Bay.find()
    if(!names){
        res.send(newGet)
    }
    else{
        const serached=  newGet.filter((x)=>x.names.toLowerCase().trim().includes(names.toLowerCase().trim()))
        res.send(serached)
    }
})
app.get("/api/hey/:id", async(req,res)=>{
    const id =req.params.id
    const deleted= await  Bay.findById(id)
    res.send(deleted)
})
app.post("/api/hey",async(req,res)=>{
    const{names,imageURL,price}=req.body
    const newPost = new Bay({
        names:names,
        price:price,
        imageURL:imageURL
    })
    await newPost.save()
    res.send(newPost)
})
app.delete("/api/hey/:id", async(req,res)=>{
    const id =req.params.id
    const deleted= await Bay.findByIdAndDelete(id)
    res.send(deleted)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
mongoose.connect("mongodb+srv://leyla:aztuleyla@cluster0.scnangv.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("MongoDB Connection")
})