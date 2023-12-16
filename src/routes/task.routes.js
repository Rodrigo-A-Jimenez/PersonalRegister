import express from "express";

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({
        status: 'API Works!'
    })
})

const router2 = express.Router();
router2.get('/', (req, res)=>{
    res.json({
        'version': 'v1.0.0dev'
    })
})

export {router, router2};