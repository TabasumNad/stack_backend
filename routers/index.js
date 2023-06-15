const express= require('express')
const router = express.Router()

const questionRouter =require('./Quetion.js')
const answerRouter =require('./Answers.js')
const commentRouter =require('./Comment.js')



router.get('/',(req,res)=>{
    res.send("Welcome to StackOverFlow Clone")
})

router.use('/question',questionRouter);
router.use('/answer',answerRouter);
router.use('/comment',commentRouter);


module.exports=router;