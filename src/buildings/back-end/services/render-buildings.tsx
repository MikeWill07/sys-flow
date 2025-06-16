import { mockBuildings } from "../../../auth/back-end/mock-users";
import { Building } from "../types/building-type";

export function listBuildings() {
  return mockBuildings;
}

export function renderBuildings(building: Building[]) {
  if (mockBuildings.length == 0) {
    return <p>Você ainda não tem nenhum edifício cadastrado</p>;
  }
  return building.map((building) => (
    <div
      key={building.id}
      style={{
        display: "flex",
        gap: "10px",
        border: "1px solid black",
      }}
    >
      <p>{building.id}</p>
      <p>{building.foto}</p>
      <p>{building.nome}</p>
    </div>
  ));
}
