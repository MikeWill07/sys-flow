import { mockBuildings } from "../../../auth/back-end/mock-users";

export function buildingAlreadyExists(building: string): boolean {
  const nameBuilding = building;
  return mockBuildings.some((building) => building.nome === nameBuilding);
}
