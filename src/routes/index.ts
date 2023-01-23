import { Router } from "express";
import petRouter from "./petRouter";

const router = Router();
router.use(petRouter);

export default router;