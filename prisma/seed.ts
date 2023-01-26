import  client  from "../src/config/prisma";

async function main() {
  await client.gender.createMany({
    data: [
     {
      name:"female"
     },
     {
      name:"male"
     }
   ]
 });
 await client.species.createMany({
  data: [
   {
    name:"cat"
   },
   {
    name:"dog"
   }
 ]
});
	await client.pet.createMany({
		 data: [
      {
        petName: "Úrsula",
        RGA: "4.845.780",
        photo: "https://www.petz.com.br/blog/wp-content/uploads/2020/07/raca-de-cachorro-muito-popular-no-brasil-3-1280x720.jpg",
        speciesId: 2,
        breed:"Shih-Tzu",
        genderId: 1,
        castred: true,
        coat: "brown"
      },
      {
        petName: "Carlota",
        RGA: "2.305.569",
        photo: "https://static1.patasdacasa.com.br/articles/4/54/24/@/22269-o-gato-persa-e-amoroso-com-a-familia-ma-articles_media_desktop-1.jpg",
        speciesId: 1,
        breed:"Persa",
        genderId: 1,
        castred: true,
        coat: "white"
      },
      {
        petName: "Diva",
        RGA: "9.045.789",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpPTOVjF_Wio8wrAmiVcu2xczwD2F3nxlwQ&usqp=CAU",
        speciesId: 2,
        breed:"Poodle",
        genderId: 1,
        castred: true,
        coat: "black"
      },

		]
	})
}

main()
	.then(() => {
		console.log("Registro feito com sucesso!");
	})
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await client.$disconnect();
	})