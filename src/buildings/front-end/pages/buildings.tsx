import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../../../utils/components/modal";
import {
  renderBuildings,
  listarEdificios,
} from "../../back-end/services/render-buildings";
import { Building } from "../../back-end/types/building-type";

export default function Buildings() {
  const navigate = useNavigate();
  const [modalBuildingOpen, setModalBuildingOpen] = useState(false);
  const [modalBalanceOpen, setModalBalanceOpen] = useState(false);
  const [buildings, setBuildings] = useState<Building[]>([]);

  useEffect(() => {
    const edificios = listarEdificios();
    setBuildings(edificios);
  }, []);

  return (
    <div>
      <h1>Edifícios</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <select name="" id="">
          <option value="">Ordem crescente nome</option>
          <option value="">Ordem descrescente nome</option>
          <option value="">Ordem crescente data</option>
          <option value="">Ordem descrescente data</option>
        </select>
        <div>
          <button onClick={() => setModalBalanceOpen(true)}>Saldo</button>
          <Modal
            isOpen={modalBalanceOpen}
            onClose={() => setModalBalanceOpen(false)}
          >
            <h2>Histórico de Saldo</h2>
            <h3>Entrada</h3>
            <div style={{ display: "flex", gap: "10px" }}>
              <p>tipo</p>
              <p>data</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <p>valor</p>
              <p>hora</p>
            </div>
            <p>saldo atual</p>
          </Modal>
        </div>
      </div>
      <div>
        <form action="">
          <input type="text" />
          <button type="submit">Buscar</button>
        </form>
      </div>
      <div>
        <button onClick={() => setModalBuildingOpen(true)}>
          Criar Edifício
        </button>
        <Modal
          isOpen={modalBuildingOpen}
          onClose={() => setModalBuildingOpen(false)}
        >
          <h2>Criar Edifício</h2>
          <form>
            <label htmlFor="buildingName">Nome</label>
            <input type="text" name="buildingName" />
            <br />
            <button type="submit">Salvar</button>
          </form>
        </Modal>
      </div>
      <div style={{ border: "1px solid black", padding: "10px" }}>
        {renderBuildings(buildings)}
      </div>
      <div>
        <button onClick={() => navigate("/buildings")}>Edifícios</button>
        <button>Dashboards</button>
      </div>
    </div>
  );
}
