import { z } from "zod";
import { createBuildingSchema } from "../schemas/create-building-schema";

export type Building = {
  id: string;
  nome: string;
  foto: string;
};

export type CreateBuildingType = z.infer<typeof createBuildingSchema>;
