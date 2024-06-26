
const User = require('../models/user-model')
const bcrypt = require('bcrypt')

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

        
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const createdUser = await User.create({
            username,
            email, 
            phone,
            // password : hash_password,
            password,
        });
        
        res.status(200)
        .json({
            msg : "Registration Succesful!", 
            token: await createdUser.generateToken(), 
            userId: createdUser._id.toString(),
        })


    } catch (error) {
        res.status(401).json("Internal Server Error");
    }
};


const login = async (req, res) =>{
    try {
        const {email, password} = req.body;

        const userExits = await User.findOne({email});

        if(!userExits){
            return res.status(400).json({message : "Invalid Crenditials"});
        }

        const user = await bcrypt.compare(password, userExits.password);
        
        if(user){
                res.status(200)
                .json({
                msg : "Login Succesful!", 
                token: await userExits.generateToken(), 
                userId: userExits._id.toString(),
            })

        }else{
            res.status(401).json({message : "Invalid Crenditials"})

        }

    } catch (error) {
        res.status(500).json("Internal Server Error!")
    }
}

module.exports = {home, register, login}