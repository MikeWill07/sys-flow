import { buildingAlreadyExists } from "../validators/building-validations";

export async function createBuilding(data: any) {
  try {
    const newBuilding = {
      name: data.nameBuilding,
    };

    if (buildingAlreadyExists(data.nameBuilding)) {
      throw new Error("Prédio já cadastrado");
    }

    // eslint-disable-next-line no-console
    console.log("Prédio cadastrado: ", newBuilding);

    return newBuilding;
  } catch (err) {
    throw err;
  }
}
