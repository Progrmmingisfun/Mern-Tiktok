import express from "express";
import mongoose from "mongoose";
import Data from './data.js';
import Videos from "./dbModel.js";
import Cors from 'cors';
import bodyParser from 'body-parser'



// App Config
const app = express();
const port = process.env.PORT || 9000;
app.use(Cors());

// Middleware
app.use(express.json());

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','*');
    res.setHeader("Access-Control-Allow-Methods",'*');
    next()
});


app.use(bodyParser.urlencoded({
    extended: false
  }));


app.use(bodyParser.json({ type: 'application/*+json' }));




// DB Config
const connection_url = 'mongodb+srv://admin:<password>@cluster0.iqekau2.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useNewUrlParser:true,
    //useCreateIndex:true,
    useUnifiedTopology:true,
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!');
   });
    
    

// API endpoints
app.get('/',(req,res) => 
    res.status(200).send('Hello Programmers'));

app.get('/v1/posts',(req,res) => 
    res.status(200).send(Data));   

app.post('/v2/posts',(req,res) => {
    // Post request adds data to the database,send videos to our video collection
    const dbVideos = req.body;
    Videos.create(dbVideos,(err,data)=>{
        if(err){
            res.status(500).send(err);
        }else {
            res.status(201).send(data);
        }
    });
});    


app.get('/v2/posts',(req, res) => {
    Videos.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else {
            res.status(200).send(data);
        }
    });
});
    

// Listener
app.listen(port, () => console.log(`listening on localhost:${port}`));    