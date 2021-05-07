import { Router } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { ClassModel } from "../models/ClassModel";
import ClassRepo from "../repositories/ClassRepo";

const classRouter = Router();

classRouter.post('/', async (req, res) => {
  try {
    const getRepo = getRepository(ClassModel);
    const response = await getRepo.save(req.body);
  
    return res.status(201).json(response);    
  } catch (err) {
    console.error(err.message);
    
    return res.status(400).json(err.message);
  }
});

classRouter.get('/', async (req, res) => {
  try {
    const getRepo = getRepository(ClassModel);
    const response = await getRepo.find();
  
    return res.status(200).json(response);    
  } catch (err) {
    console.error(err.message);
    
    return res.status(404).json(err.message);
  }
});

classRouter.get('/:name', async (req, res) => {
  try {
    const getRepo = getCustomRepository(ClassRepo);
    const response = await getRepo.findByName(req.params.name);
  
    return res.status(200).json(response);    
  } catch (err) {
    console.error(err.message);
    
    return res.status(404).json(err.message);
  }
});

export default classRouter;