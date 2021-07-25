const functions = require("firebase-functions");
const express= require('express'); 
const cors=require('cors');
const stripe= require('stripe') ('sk_test_51JH8hgKuYEIBE7kKSnAHFQlua6le49SmqIbVH7UeEfk4OHrbMgPlHJtvdTi2yA9ovvGOTx6Qxsv3bkCvVtRamH2900JJTCFU0c');

//APP config
const app=express();

//Mid
app.use(cors({origin:true})); 
app.use(express.json()); 

//API route
app.get('/', (request, response)=> response.status(200).send('hello'))
app.post('/payments/create', async(request,response)=>{
    const total=request.query.total;

    console.log('payment req recieved AAA', total); 
    const paymentIntent=await stripe.paymentIntent.create({
        amount:total,
        currency:'usd',
    })
    
    //OK, created
    response.status(201)
}) 
//listen command

exports.api=functions.https.onRequest(app)