import express from 'express'
// const express = require('express');
const router = express.Router();

import applicationController from '../controllers/applicationControllers.js';
// const applicationController = require('./controllers/applicationControllers.ts')

import { Request, Response } from 'express';

router.post('/create',
    applicationController.createApplication,
    (_req: Request, res: Response) => {
        return res.status(200).json(res.locals);
    }
);

router.get('/all', 
    applicationController.getApplication,
    (_req: Request, res: Response) => {
        return res.status(200).json(res.locals.all)
    }
)

router.put('/update', 
    applicationController.updateApplication,
    (_req: Request, res: Response) => {
        return res.status(200).json(res.locals.update)
    }
)

router.delete('/delete', 
    applicationController.deleteApplication,
    (_req: Request, res: Response) => {
        return res.status(200).json(res.locals.deleted)
    }
)


export default router;