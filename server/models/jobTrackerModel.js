// const { Pool } = require('pg');
// import * as pg from 'pg';
import pg from 'pg';
const { Pool } = pg;
// console.log(pg);
// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI =
  'postgresql://postgres.lbvqapwyanjjokurhsfq:jigglypuffrules@aws-0-us-east-1.pooler.supabase.com:6543/postgres';
// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
const URI = process.env.PG_URI || myURI;
const db = new Pool({
  connectionString: URI,
});
export default db; // <-- export your model
