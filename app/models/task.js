const mongoose=require('mongoose')
const Schema = mongoose.Schema
const taskSchema = new Schema({
    name: {
        type: String,
    
    },
    game:{
        type:String,
       
    },
    partner:{
        type:String
    }
})

const Task = mongoose.model('Task', taskSchema)

module.exports=Task