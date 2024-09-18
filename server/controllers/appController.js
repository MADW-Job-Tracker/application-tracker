// import db from './models/jobTrackerModel.js';
import db from '../models/jobTrackerModel.js';

async function getJobs(req, res, next) {
  try {
    const sql = `
            SELECT * FROM jobs;
        `;
    const result = await db.query(sql);
    // res.locals.jobs = result.rows;
    // return next();
    console.log(result.rows);
  } catch (err) {
    console.log(err);
  }
}

getJobs();
