import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config()
const app = express();

const PORT = process.env.PORT;
const MONGOURL = process.env.MONGOURL;

app.use(express.json());
app.use(cors());
app.use('/', router);


mongoose.connect(MONGOURL).then(()=>console.log('Database Connected')).catch((e)=> console.error(e))

app.use('/', router)

app.listen(PORT, () => {
   console.log(`Server is Running on ${PORT}`);

})