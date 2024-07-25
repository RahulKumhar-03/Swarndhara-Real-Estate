import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { userRoute } from './routes/userRoute.js';
import { residencyRouter } from './routes/residencyRoute.js';
dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use(cookieParser())
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', 'https://swarndhara-real-estate-two.vercel.app');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
   next();
 });
app.use(cors({
   origin:"https://swarndhara-real-estate-two.vercel.app",
   credentials:true,
}))

app.listen(PORT, () => {
   console.log(`Server is running on port:${PORT}`);
})
app.use('/api/user', userRoute)
app.use('/api/residency',residencyRouter)
