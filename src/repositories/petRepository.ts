import  client  from "../config/prisma";
import { TPet } from "../types/PetTypes";

export async function findByRGA(RGA:string) {
  const result = await client.pet.findUnique({
    where: {
      RGA
    }
  })
  
  return result;
}

export async function insertPet(dataList:TPet) {
  await client.pet.create({
    data: dataList
  });

}

export async function findPets() {
  const result = await client.pet.findMany()
  
  return result;
}

export async function findById(id:number){

  const result = await client.pet.findUnique({
    where: {
      id
    }
  })
  
  return result;
 
 }

export async function deletePet(id:number) {
  await client.pet.delete({
    where: {
      id
    }
  })
  
}

export async function updatePet(id:number,dataList:TPet) {
  await client.pet.update({
    where: {
      id
    },
    data:dataList,
  })
}
