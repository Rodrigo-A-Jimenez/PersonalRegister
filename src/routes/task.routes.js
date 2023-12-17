import express from "express";
import task from "../models/task.js";

const router = express.Router();

router.get('/', async (req, res)=>{
    const tasks = await task.find();
    console.log(tasks)
    res.json(tasks)
})

router.post('/', async (req, res)=>{
    console.log(req.body);
    res.json('received');
})

const router2 = express.Router();
router2.get('/', (req, res)=>{
    res.json({
        'version': 'v1.0.0dev'
    })
})

export {router, router2};