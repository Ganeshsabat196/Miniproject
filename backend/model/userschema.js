import mongoose from 'mongoose'
 
// student Registration Schema
const User =  new mongoose.Schema({
    email: {
        type: String,
        unique:true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Pass: {
        type: String,
        // required: true
    }
})


const Newuser = mongoose.model('User',User);
export default Newuser;