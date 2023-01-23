import { Router } from "express";
import * as petController from "../controllers/petController";
import { validateSchema } from "../middlewares/schemaValidate";
import { petSchema } from "../schemas/petSchema";

const petRouter = Router();

petRouter.post("/pet",validateSchema(petSchema), petController.createPet);
petRouter.get("/pet/RGA", petController.getPetByRGA );
petRouter.get("/pet",petController.getPets);
petRouter.put("/pet/id",petController.updatePet);
petRouter.delete("/pet/id",petController.deletePet);


export default petRouter;