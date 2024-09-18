import { Request, Response, NextFunction} from 'express';
import db from '../models/jobTrackerModel.js';

// Define the controller object
const applicationController = {
  // Create an application
  createApplication: async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { company, title, description, salary, status } = req.body
        const sql = `INSERT INTO jobs (company, title, description, salary, status)
                    VALUES ($1, $2, $3, $4, $5)`;
        const values:string[] = [company, title, description, salary, status];
        const result = await db.query(sql, values);
        res.locals.created = result;
        return next()
    } catch(err){
        return next(err)
    }
  },

  // Get all applications
  getApplication: async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const sql = `SELECT * FROM jobs;`;
      const result = await db.query(sql);
      res.locals.all = result.rows;
      return next();
    } catch (err) {
        console.log(err);
        return next(err);
    }
  },

  // Update an application
  updateApplication: async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id, status, company, title, description, salary } = req.body
        console.log(req.body);
        const sql = `UPDATE jobs SET status = $1,company = $2, title = $3, description = $4, salary = $5 WHERE id = $6`
        const values:string[] = [status, company, title, description, salary, id]
        const response = await db.query(sql, values)
        res.locals.update = response;
        return next()
    } catch (err){
        return next(err)
    }
  },

  // Delete an application
  deleteApplication: async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { company, title, description } = req.body
        // //console.log(req.body);
        const sql = `DELETE FROM jobs WHERE company = $1 AND title = $2 AND description = $3`
        const values:string[] = [company, title, description];
        const result = await db.query(sql, values);
        res.locals.deleted = result;
        return next()
    } catch(err){
        return next(err)
    }
  }
};

// Export the controller


export default applicationController;
