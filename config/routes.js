const express=require('express')
const router=express.Router()
//controller
const candidateCltr=require('../app/controllers/CandidateCltr')
const taskCltr = require('../app/controllers/taskcltr')
const joining=require('../app/controllers/joining')

//candidate
router.get('/api/candidate',candidateCltr.list)
router.post('/api/candidate',candidateCltr.create)
router.delete('/api/candidate/:id',candidateCltr.delete)
router.put('/api/candidate/:id',candidateCltr.update)

//tasks
router.get('/api/tasks',taskCltr.list)
router.post('/api/tasks',taskCltr.create)
router.delete('/api/tasks/:id',taskCltr.delete)
router.put('/api/tasks/:id',taskCltr.update)

//joins
router.get('/api/joining',joining.list)

module.exports=router