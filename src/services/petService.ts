import * as petRepository from "../repositories/petRepository";
import { TPet} from "../types/PetTypes";
import { findGender} from "./genderService";
import { findSpecie } from "./specieService";

export async function createPet(data:TPet){

  const gender = await findGender(data.genderId)

  const specie = await findSpecie(data.speciesId)

  if(!gender) throw {code:'NotFound' , message:'Gender not found'}
  
  if(!specie) throw {code:'NotFound' , message:'Specie not found'}
  

  const dataList=data
  await petRepository.insertPet(dataList)
 
 }

 export async function getPetByRGA(RGA:string){

  const result= await petRepository.findByRGA(RGA)

  if(!result) throw {code:'NotFound' , message:'Pet not found'}

  return result
 
 }

 export async function getPets(){

  const result= await petRepository.findPets()

  return result
 
 }

 export async function deletePet(id:number){

  const petId = await petRepository.findById(id)
  if(!petId) throw {code:'NotFound' , message:'Pet not found'}

  await petRepository.deletePet(id)
 
 }

 export async function updatePet(id:number,data:TPet){

  const petId = await petRepository.findById(id)
  if(!petId) throw {code:'NotFound' , message:'Pet not found'}

  const dataList=data
  await petRepository.updatePet(id,dataList)
 
 }

