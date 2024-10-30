import * as express from 'express';
import { Request, Response } from 'express';
import { fazp } from '../controller/controlorderotas';

export const app = express();
export const port = 3333;
app.use(express.json());
app.get('/', ()=> {
    fazp.get
})
app.post('/etc', ()=> {
    fazp.post
})
app.listen(port , ()=> {
    console.log(`service fuction initial    http://localhost:${port}`)
})