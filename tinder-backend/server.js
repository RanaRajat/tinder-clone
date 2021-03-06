import express from "express";

import mongoose from "mongoose";

import Cards from './dbCards.js';

import cors from "cors";




//app config

const app = express();
const port = process.env.PORT||8001
const connection_url = `mongodb+srv://rajat:Nike21uno@cluster0.el0iy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
//middlewares

app.use(express.json());
app.use(cors());
//db config
const connect = ()=>{
    return mongoose.connect(connection_url);
}


//api endpoints
app.get("/",(req,res)=>{
    res.status(200).send("hello");
});

app.post("/tinder/cards",(req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
});

app.get("/tinder/cards",(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
})

//listener
connect();
app.listen(port,()=>console.log(`listening on localhost:${port}`))