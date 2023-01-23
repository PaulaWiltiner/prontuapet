import  client  from "../config/prisma";

export async function findById(id:number) {
  const result = await client.species.findUnique({
    where: {
      id
    }
  })
  
  return result;
}