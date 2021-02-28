import React, { useState, useEffect, useContext } from "react";
import NavBar from "./../../components/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "../../components/ModalNew";
import ModalList from "../../components/ModalList";

import { UseContext, UseContextModalList } from "../../shared/UserContext";

import { Container, ContainerTable, ContainerModal } from "./styles";

interface IModalList {
  requestName: string;
  requestId: string;
}
interface ISolic {
  id: string;
  searchValue: string;
}

const Home: React.FC = () => {
  const modalState = useContext(UseContext);
  const modalListState = useContext(UseContextModalList);
  const [searchValue, setSearchValue] = useState("");
  const [solic, setSolic] = useState<ISolic[]>([]);
  const [dataModalList, setDataModalList] = useState<IModalList>({
    requestName: "",
    requestId: "",
  });

  useEffect(() => {
    let items = localStorage.getItem("solicitations636") || "[]";
    const itemsRef: ISolic[] = JSON.parse(items);
    setSolic(itemsRef);
  }, [modalState.modalAdd]);

  function openModalNew() {
    modalState.setModalAdd(true);
  }
  function openModalList(name: string, id: string) {
    setDataModalList({
      requestId: id,
      requestName: name,
    });
    modalListState.setModalList(true);
  }

  function handleRenderTableData(item: ISolic, index: number) {
    return (
      <tr key={index}>
        <td>{item.searchValue}</td>
        <td>
          <span
            onClick={() => {
              openModalList(item.searchValue, item.id);
            }}
          >
            Visualizar resultado...
          </span>
        </td>
      </tr>
    );
  }

  return (
    <Container>
      <NavBar />
      <div className="title">
        <h1>Solicitações de inspeção</h1>
      </div>

      <ContainerTable>
        <button onClick={openModalNew} className="btn">
          <FaPlusCircle color={"orange"} size={20} />{" "}
          <span>Nova Solicitação</span>
        </button>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th></th>
            </tr>
            <tr>
              <td className="form__group field">
                <input
                  type="text"
                  name="searchInput"
                  id="searchInput"
                  placeholder="Filtrar pelo nome"
                  className="form__field"
                  onChange={(event) => {
                    setSearchValue(event.target.value);
                  }}
                  value={searchValue}
                />
                <label className="form__label">Filtrar pelo nome</label>
              </td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {!searchValue.trim().length && solic.map(handleRenderTableData)}

            {searchValue.trim().length >= 1 &&
              solic
                .filter((element: ISolic) => {
                  return element.searchValue.includes(searchValue);
                })
                .map(handleRenderTableData)}

            {!solic.length && (
              <tr>
                <td>Cadastre uma solicitação no botão "NOVA SOLICITAÇÃO"...</td>
                <td></td>
              </tr>
            )}
            {solic.length >= 1 &&
              solic.filter((element: ISolic) => {
                return element.searchValue.includes(searchValue);
              }).length === 0 && (
                <tr>
                  <td>Nenhum dado foi encontrado com o filtro solicitado</td>
                  <td></td>
                </tr>
              )}
          </tbody>
        </table>
      </ContainerTable>

      <ContainerModal>
        <div className="modal">
          <div className="modal-content">
            <h4>Foto Grande do Chaves</h4>
          </div>
          <label className="modal-close"></label>
        </div>
      </ContainerModal>

      <Modal />
      <ModalList {...dataModalList} />
    </Container>
  );
};

export default Home;
