import { Request, Response } from 'express';
import  * as app  from '../../servidor/servidor';
import  * as yup from 'yup';

export interface Icidadesprpost{
  nome: string
  senha: string,
  idade?: number 
}
const validacao: yup.ObjectSchema<Icidadesprpost> = yup.object().shape({ 
   nome: yup.string().required().min(3), 
   senha: yup.string().required().min(8), 
   idade: yup.number().min(2), 
});
export const post = async(req:   Request<{}, {}, Icidadesprpost> , res: Response)=> {
    let result:Icidadesprpost | undefined= undefined;
   try{
      result =  await validacao.validate(req.body) as Icidadesprpost;
      return res.send(`seus dados sao ${result.nome , result.senha}`)
   }catch(e){
    let error = e as yup.ValidationError
    return res.send(error)
  }
   }
 
   export const  get = async(req:   Request, res: Response) =>{
      res.send('ola');
   }
   

   

