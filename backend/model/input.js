import mongoose from 'mongoose'
 
// student Registration Schema
const input =  new mongoose.Schema({
    wpm: {
        type: String,
        unique:true,
        required: true
    },
    accuracy: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        // required: true
    }
})


const Datainp = mongoose.model('Data',input);
export default Datainp;