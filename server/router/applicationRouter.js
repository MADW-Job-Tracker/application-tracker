import express from 'express';
// const express = require('express');
const router = express.Router();
import applicationController from '../controllers/applicationControllers.js';
router.post('/create', applicationController.createApplication, (_req, res) => {
    return res.status(200).json(res.locals);
});
router.get('/all', applicationController.getApplication, (_req, res) => {
    return res.status(200).json(res.locals.all);
});
router.put('/update', applicationController.updateApplication, (_req, res) => {
    return res.status(200).json(res.locals);
});
router.delete('/delete', applicationController.deleteApplication, (_req, res) => {
    return res.status(200).json(res.locals);
});
export default router;
