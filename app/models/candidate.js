const mongoose=require('mongoose')
const Schema = mongoose.Schema
const candidateSchema = new Schema({
    gme: {
        type: String
    },
    college:{
        type:String  
    },
    area:{
        type:String
    }
})

const Candidate = mongoose.model('Candidate', candidateSchema)

module.exports=Candidate