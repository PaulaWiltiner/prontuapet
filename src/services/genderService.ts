import { findById } from "../repositories/genderRepository";



export async function findGender(id:number){

  const result = await findById(id)

  return result
 
 }