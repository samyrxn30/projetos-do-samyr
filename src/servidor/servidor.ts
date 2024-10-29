import * as express from 'express';
import { Request, Response } from 'express';

export const app = express();
export const port = 3333;
app.use(express.json());
app.listen(port , ()=> {
    console.log(`service fuction initial    http://localhost:${port}`)
})