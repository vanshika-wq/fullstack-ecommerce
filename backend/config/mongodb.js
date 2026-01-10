import mongoose from "mongoose";

const connectDB = async()=>{

    mongoose.connection.on('connected',()=>{
        console.log("DB connected");
        
    })

    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
    await mongoose.connect(`${uri}/e-commerce`)
}

export default connectDB;