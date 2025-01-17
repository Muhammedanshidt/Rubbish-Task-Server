const mongoose = require('mongoose')


const serviceSchema = mongoose.Schema({
    type: {
        type: String,
        require: true
    },
    category: {
         type: String,
         required: true
    },
    description: { type: String },
    pricing: [
      {
        label: { type: String, required: true }, 
        price: { type: Number, required: true }, 
      },
    ],

})


module.exports = mongoose.model("Service", serviceSchema)