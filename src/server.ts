import dotenv from "dotenv";
import app from './app';
import 'reflect-metadata';
import './database';

dotenv.config();

const port = process.env.PORT || 3055;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
