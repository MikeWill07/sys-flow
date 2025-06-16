import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../../../utils/components/modal";
import { renderBuildings } from "../../back-end/services/render-buildings";
import { listBuildings } from "../../back-end/services/list-building";
import { Building } from "../../back-end/types/building-type";
import {
  listBalances,
  renderBalances,
} from "../../back-end/services/render-balances";
import { Balances } from "../../back-end/types/balance-types";
import { useForm } from "react-hook-form";
import { mockBuildings, mockUsers } from "../../../auth/back-end/mock-users";
import { Search } from "../../back-end/types/search-type";
import { filterBuildings } from "../../back-end/services/filter-buildings";

export default function Buildings() {
  const navigate = useNavigate();
  const [modalBuildingOpen, setModalBuildingOpen] = useState(false);
  const [modalBalanceOpen, setModalBalanceOpen] = useState(false);
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [balances, setBalances] = useState<Balances[]>([]);
  const { register, handleSubmit } = useForm();
  const [filteredBuildings, setFilteredBuildings] = useState(mockBuildings);

  const onSubmit = (data: Search) => {
    const filtered = filterBuildings(buildings, data.search);
    setFilteredBuildings(filtered);
  };

  useEffect(() => {
    const allBuildings = listBuildings();
    setBuildings(allBuildings);
  }, []);

  useEffect(() => {
    const loggedUser = mockUsers[0];
    const userBalances = listBalances(loggedUser.id);
    setBalances(userBalances);
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
            {renderBalances(balances)}
          </Modal>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {...register("search")} />
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
        {filteredBuildings.length == 0 ? (
          <p>Nenhum edifício encontrado</p>
        ) : (
          renderBuildings(filteredBuildings)
        )}
      </div>
      <div>
        <button onClick={() => navigate("/buildings")}>Edifícios</button>
        <button>Dashboards</button>
      </div>
    </div>
  );
}
