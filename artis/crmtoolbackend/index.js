import express from 'express'

var app=express()

app.get("/",(req,res)=>{
    res.send("Sever Healthy")
})

app.listen(5000,console.log("Listening on port 5000"))