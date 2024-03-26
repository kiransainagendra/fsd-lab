const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { unstable_renderSubtreeIntoContainer } = require('react-dom');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/saidatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());
//create user
app.post('/api/users',async(req,res)=>{
    try{
const {name,email,age} = req.body;
        const newUser = new User({name,email,age});
        await newUser.save();
        res.status(201),json(newUser);
    }
    catch(error){
        console.error('Error adding user:',error);
        res.status(500).json({message:error.message});
    }
});
app.get('/api/users',async(req,res) =>{
    try{
        const users = await User.find();
        res.json(users);
    }
    catch(error){
        console.error('Error fecthing users:',error);
        res.status(500).json({message:error.message});
    }
});
//get a user by ID
app.get('/api/users/:id',async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        res.json(user);
    }
    catch(error){
        console.error('Error fecthing users:',error);
        res.status(500).json({message:error.message});
    }
});
//update a user
app.put('/api/users/:id',async(req,res)=>{
    try{
        const {name,email,age} = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{name,email,age},{new:true});
        if(!updatedUser){
            return res.status(404).json({message : 'User not found'});
        }
        res.json(updatedUser);
    }
    catch(error){
        console.error('Error updating users:',error);
        res.status(500).json({message:error.message});
    }
});
//Delete a user
app.delete('/api/users/:id',async(req,res)=>{
    try{
        const {name,email,age} = req.body;
        const deletedUser = await User.findByIdAndUpdate(req.params.id);
        if(!deletedUser){
            return res.status(404).json({message : 'User not found'});
        }
        res.json({message:'User deleted'});
    }
    catch(error){
        console.error('Error deleting users:',error);
        res.status(500).json({message:error.message});
    }
});
//start server
app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
});