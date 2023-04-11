import mongoose from 'mongoose'
 
// student Registration Schema
const Addcontactmsg =  new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})


const Addcontact = mongoose.model('Contact',Addcontactmsg);
export default Addcontact;