
const User = require('../models/user-model')

const home = async (req, res) => {
    try {
            
        res
        .status(200)
        .send("Home Page")
        
    } catch (error) {
        res.status(400).send({msg : "Page Not Found"});
    }
};

const register = async (req, res) => {
    try {
        console.log(req.body);
        
        const {username, email, phone, password} = req.body;

        const userExists = await User.findOne({email: email})

        if(userExists){
            res.status(400).json({message: "User Already Exists!"})
        }

        const createdUser = await User.create({
            username,
            email, 
            phone,
            password
        })
        
        res.status(200).json({message : createdUser})


    } catch (error) {
        res.status(400).send({msg : "Page Not Found"});
    }
};

module.exports = {home, register}