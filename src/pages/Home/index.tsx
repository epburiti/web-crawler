import React, { useState, useEffect, useContext } from "react";
import NavBar from "./../../components/NavBar";
import "react-toastify/dist/ReactToastify.css";
import { FaPlusCircle } from "react-icons/fa";
import Modal from "./../../components/Modal";
import { UseContext } from "../../shared/UserContext";

import { Container, ContainerTable, ContainerModal } from "./styles";

const Home: React.FC = () => {
  const modalState = useContext(UseContext);

  const [loading, setLoading] = useState(false);
  const [solic, setSolic] = useState<Object[]>([]);

  useEffect(() => {
    let items = localStorage.getItem("solicitations") || "[]";
    const itemsRef: Object[] = JSON.parse(items);
    setSolic(itemsRef);
  }, [modalState.modalAdd]);

  function openModal() {
    modalState.setModalAdd(true);
  }

  return (
    <Container>
      <NavBar />
      <div className="title">
        <h1>Solicitações de inspeção</h1>
      </div>

      <ContainerTable>
        <button onClick={openModal} className="btn">
          <FaPlusCircle color={"orange"} size={20} /> Nova Solicitação
        </button>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Pesquisar</th>
            </tr>
          </thead>
          <tbody>
            {solic.map((item: any) => (
              <tr>
                <td>{item.searchValue}</td>
                <td>
                  <span>Visualizar resultado...</span>
                </td>
              </tr>
            ))}
            {!solic.length && (
              <tr>
                <td>nenhuma solicitação a ser mostrada...</td>
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
    </Container>
  );
};

export default Home;
