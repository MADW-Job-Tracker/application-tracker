import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 8080;
import applicationRouter from './router/applicationRouter.js';
app.use(express.json());
app.use(cors());
app.use('/application', applicationRouter);
// Standard 404 Route Handler
app.use('/', (_req, res) => {
    res.status(404).send('Error page not found!');
});
// Express Global Error Handler
app.use((err, _req, res, _next) => {
    console.log(err);
    res.status(500).json(err);
});
// Starts the app on the given port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
