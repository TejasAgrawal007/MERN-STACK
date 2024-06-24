const mongoose = require("mongoose")

// const URI = `mongodb://localhost:27017/mern_admin`

const URI = process.env.MONGODB_URI


const connectDB = async () => {
    try {
       await mongoose.connect(URI)
       console.log('Connection Successful To Database!');
    } catch (error) {
        console.log({message : "Database Connection Failed!"});
        process.exit(0)
    }
}

module.exports = connectDB;