const Task=require('../models/task')
const Candidate = require('../models/candidate')

joining={}

joining.list=(req,res)=>{
    Task.aggregate([{
        $lookup: {
            from: 'candidates',
            localField: 'game',
            foreignField: 'gme',
            as: 'output'
        }
    }]).then(result => res.json(result)).catch(err => console.log(err))
}

module.exports=joining