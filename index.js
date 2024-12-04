import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
connectDB();
app.use(bodyParser.json());

//route
app.use('/api',userRoutes);

const port = process.env.PORT || 8001

app.listen(port, () => {
    console.log(`server is running on localhost:${port}`);
})