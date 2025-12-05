import { Request, Response } from "express";

export function getUsers(request: Request, response: Response) {
  response.send([]);
}

export function getUsersById(request: Request, response: Response) {
  response.send({success:true,data:{name:"benz",age:30}});
}

export function createUser(request:Request, response: Response){
    
}
