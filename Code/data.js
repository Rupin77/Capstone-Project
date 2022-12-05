const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const { MongoClient } = require('mongodb');
const mongodb = require('mongodb');

app.use(cors());
app.use(express.json());



const main = async () => {

    mongoose.connect("mongodb+srv://burr:rupin123@clickdb.ojxlzbo.mongodb.net/?retryWrites=true&w=majority", 
    { 
        useNewUrlParser: true,
    }
    );

    const CartModel = require('./CartSchema.js');
   

    const uri = "mongodb+srv://burr:rupin123@clickdb.ojxlzbo.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        const FoodCollection = client.db('Products').collection('foodData');
        const CartCollection = client.db('Products').collection('Cart');
        const AccountCollection = client.db('Account').collection('login');

        app.get("/food", async (req, res) => {
            const cursor = FoodCollection.find({});
            const food = await cursor.toArray();
            res.send(food)
        })
        app.get("/cart", async (req, res) => {
            const cursor = CartCollection.find({});
            const food = await cursor.toArray();
            res.send(food)
        })

        app.post("/cart", async (req, res) => { 
            const title = req.body.title;
            const type = req.body.type;
            const description = req.body.description;
            const price = req.body.price;
            const img = req.body.img;

            const cart = new CartModel({title: title, type: type, description: description, price: price, img: img});

            try {
                await cart.save();
                res.send("success");
            } catch (err) {
                console.log(err);
            }
        });


        app.delete("/delete/:id", async (req, res) => {
            const id = req.params.id;
            await CartCollection.deleteOne({_id: new mongodb.ObjectId(id)});
            res.send("deleted");
        })
        
    } catch (error) {
        console.log(error);
    } finally {
    }
};

main().catch(console.error);


app.listen(3001, () => {
    console.log("Server running on port 3001... peany weany");
});