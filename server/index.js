import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import cookieParser from 'cookie-parser';
import { authRoutes } from './routes/auth.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1/auth', authRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;

const start = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
  app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
  });
};

start();
