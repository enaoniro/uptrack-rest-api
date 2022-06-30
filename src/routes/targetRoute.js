import express from 'express';
import TargetService from '../services/TargetService.js';
// import * as TargetService from '../service/Target-service.js';

const router = express.Router();

//tum Targetlari isteyen frontend istegini alip Target servisten bekle
router.get('/', async (req, res) => {
  const targetList = await TargetService.getTargets();
  res.status(200).send(targetList);
});

router.get('/:id', async (req, res) => {
    const targetId = req.params.id;
    const target = await TargetService.getTargets(targetId);
    res.status(200).send(target);
});



router.post("/", async (req, res)=>{
    const target = req.body;
    const newTarget = await TargetService.createTarget(target);
    res.status(201).send(newTarget);
})

router.put("/:id", async (req, res)=>{
    const targetId = req.params.id;
    const existingTarget = req.body;
    const updatedTarget = await TargetService.updateTarget(targetId, existingTarget);
    
    res.status(200).send(updatedTarget);
})

router.delete("/:id", async (req, res)=>{
    const targetId = req.params.id;
    await TargetService.deleteTarget(targetId);
    res.status(200);
})

export default router;
