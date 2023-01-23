import { Request, Response } from "express";
import * as petService from "../services/petService"
import { TPet} from "../types/PetTypes";


export async function createPet(req:Request, res:Response) {
  const data : TPet = req.body;

  await petService.createPet(data)

  res.sendStatus(201);
}

export async function getPetByRGA(req:Request, res:Response) {
  const { RGA } = req.query as Record<string, string>;

  const pet = await petService.getPetByRGA(RGA);

  return res.send(pet).status(200);

}

export async function getPets(req:Request, res:Response) {

  const petList = await petService.getPets();

  return res.send(petList).status(200);

}

export async function deletePet(req:Request, res:Response) {

  const { id } = req.query as Record<string, string>;

  await petService.deletePet(Number(id));
  
  return res.sendStatus(204);

}

export async function updatePet(req:Request, res:Response) {

  const { id } = req.query as Record<string, string>;

  const data : TPet = req.body;

  await petService.updatePet(Number(id),data)

  res.sendStatus(201);

}
