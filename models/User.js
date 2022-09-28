let mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    name:{
        type: 'string',
        required: true,
    },
    age: Number,
 
  
})

module.exports = mongoose.model('User', userSchema);