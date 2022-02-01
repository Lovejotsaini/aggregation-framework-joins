const Task=require('../models/task')

const taskCltr={}

taskCltr.list=(req,res)=>{
    Task.find()
    .then((tasks) => {
        res.json(tasks)
    })
    .catch((err) => {
        res.json(err)
    })
}
taskCltr.create=(req,res)=>{
     const body = req.body
    const task = new Task(body)
    task.save()
        .then((task) => {
          res.status(201).json(task)
        })
        .catch((err) => {
            res.json(err)
        })
}
taskCltr.delete=(req,res)=>{
    const id = req.params.id
    Task.findByIdAndDelete(id)
        .then((task) => {
            res.json(task)
        })
        .catch((err) => {
            res.json(err)
        })
}
taskCltr.update=(req,res)=>{
    const id = req.params.id
    console.log(id)
    const body = req.body
    Task.findByIdAndUpdate(id, body, { new: true })
        .then((task) => {
            res.json(task)
        }).catch((err) => {
            res.json(err)
        })
}


module.exports=taskCltr