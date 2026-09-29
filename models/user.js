const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true,
        validate(val){
            if(val<=0){
                throw new Error("age must be positive number")
            }
        }
    },

    city: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User