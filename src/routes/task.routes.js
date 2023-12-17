import express from "express";
import task from "../models/task.js";

const router = express.Router();

router.get('/', async (req, res)=>{
    const tasks = await task.find();
    console.log(tasks)
    res.json(tasks)
})

router.get('/:id', async(req, res)=>{
    const Task = await task.findById(req.params.id);
    res.json(Task);

});

router.post('/', async (req, res)=>{
    const { title, description } = req.body;
    const Task= new task({title, description})
    await Task.save();
    console.log(Task);
    res.json({status: 'tarea guardada'});
})

router.put('/:id', async (req, res)=>{
    const { title, description } = req.body;
    const newTask = {title, description};
    await task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: "tarea actualizada"});
});

router.delete('/:id', async (req, res)=>{
    await task.findByIdAndDelete(req.params.id);
    res.json({status:"tarea eliminada"});
});

const router2 = express.Router();
router2.get('/', (req, res)=>{
    res.json({
        'version': 'v1.0.0dev'
    })
})

export {router, router2}