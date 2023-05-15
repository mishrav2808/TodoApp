const todolist = require('../models/todolist');

const router = require('express').Router();

const Todos = require('../models/todolist');

router.get('/tasks', async (req,res)=>{
    try{
        const todos = await Todos.find();
        console.log(todos);
        res.send(todos);
    }catch(err){
        res.json(err);
    }
});

router.post('/addtasks', async (req,res) => {
    try{
        console.log(req.body.task_desc);
        const addtasks = new Todos(
            {
                task:req.body.task_desc
            }
        );
        await addtasks.save();
        res.send(addtasks);
    }catch(err){
        res.json(err);
    }
});

router.post('/updatetasks', async (req, res) => {
    try{
        console.log(req.body);
        const task = await Todos.findById(req.body.taskid);
        task.is_Completed = true;
        await task.save();
        res.send(task);
    }catch(err){
        res.json(err);
    }
});

router.post('/deletetask', async (req, res) => {
    try{
            const tasktodelete = await Todos.findById(req.body.taskid);
            tasktodelete.is_Deleted = true;
            await tasktodelete.save();
            res.send(tasktodelete);
            console.log(tasktodelete);
    }catch(err){
        res.json(err);
    }
});

module.exports = router;