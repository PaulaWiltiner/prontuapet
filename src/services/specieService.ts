import { findById } from "../repositories/speciesRepository";



export async function findSpecie(id:number){

  const result = await findById(id)

  return result
 
 }