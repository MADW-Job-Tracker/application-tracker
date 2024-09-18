import db from '../models/jobTrackerModel.js';
// Define the controller object
const applicationController = {
    // Create an application
    createApplication: async (_req, res, next) => {
        try {
            const { company, title, description, salary, status } = _req.body;
            const sql = `INSERT INTO jobs (company, title, description, salary, status)
                    VALUES ($1, $2, $3, $4, $5)`;
            const values = [company, title, description, salary, status];
            const result = await db.query(sql, values);
            res.locals.created = result;
            return next();
        }
        catch (err) {
            return next(err);
        }
    },
    // Get all applications
    getApplication: async (_req, res, next) => {
        try {
            const sql = `SELECT * FROM jobs;`;
            const result = await db.query(sql);
            res.locals.all = result.rows;
            return next();
        }
        catch (err) {
            console.log(err);
            return next(err);
        }
    },
    // Update an application
    updateApplication: async (_req, _res, _next) => {
        try {
        }
        catch (err) { }
    },
    // Delete an application
    deleteApplication: async (req, res, next) => {
        try {
            const { company, title, description } = req.body;
            const sql = `DELETE FROM jobs WHERE company = $1 AND title = $2 AND description = $3`;
            const values = [company, title, description];
            const result = await db.query(sql, values);
            res.locals.deleted = result;
            return next();
        }
        catch (err) {
            return next(err);
        }
    }
};
// Export the controller
export default applicationController;
