const Candidate = require('../models/candidate')

const candidateCltr={}

candidateCltr.list=(req,res)=>{
    Candidate.find()
    .then((tasks) => {
        res.json(tasks)
    })
    .catch((err) => {
        res.json(err)
    })
}
candidateCltr.create=(req,res)=>{
     const body = req.body
    const candidatetask = new Candidate(body)
    candidatetask.save()
        .then((task) => {
          res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })
}
candidateCltr.delete=(req,res)=>{
    const id = req.params.id
    Candidate.findByIdAndDelete(id)
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })
}
candidateCltr.update=(req,res)=>{
    const id = req.params.id
    console.log(id)
    const body = req.body
    Candidate.findByIdAndUpdate(id, body, { new: true })
        .then((task) => {
            res.json(task)
        }).catch((err) => {
            res.json(err)
        })
}



module.exports=candidateCltr