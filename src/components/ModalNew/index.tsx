import React, { useState, useContext } from "react";
import { UseContext } from "../../shared/UserContext";
import { Container } from "./styles";
import axios from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Loader";

const Modal = () => {
  const modalState = useContext(UseContext);
  const [searchTxt, setSearchTxt] = useState("");
  const [loading, setLoading] = useState(false);
  function closeModal() {
    setSearchTxt("");
    modalState.setModalAdd(false);
  }
  async function handleCreateRequest() {
    if (searchTxt.length < 4) {
      toast.warn("A solicitação deve possuir mais que 4 caracteres");
      return;
    }

    const data = {
      keyword: searchTxt,
    };
    setLoading(true);
    const { data: response } = await axios.post("/crawl", data);

    if (response.status && response.status !== 200) {
      toast.error(
        "Um erro inesperado aconteceu, tente novamente ou contate o Administrador"
      );
    } else {
      response.searchValue = searchTxt;
      toast.success("Solicitação cadastrada com sucesso...");
      let oldItems = localStorage.getItem("solicitations636") || "[]";
      const oldItemsRef: Object[] = JSON.parse(oldItems);
      const data = [...oldItemsRef, response];
      const myNewItem = JSON.stringify(data);
      localStorage.setItem("solicitations636", myNewItem);
    }

    setLoading(false);
    closeModal();
  }
  return (
    <>
      {modalState.modalAdd && (
        <Container>
          <div className="modal" id="modal">
            <h2>Cadastrar Solicitação</h2>
            <div className="content">
              <div className="container-add">
                <div className="infor-data">
                  <label htmlFor="add"></label>
                  <input
                    type="text"
                    name="add"
                    id="add"
                    placeholder="Escreva aqui..."
                    value={searchTxt}
                    onChange={(event) => setSearchTxt(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="actions">
              <button
                className="toggle-button"
                onClick={() => {
                  closeModal();
                }}
              >
                Fechar
              </button>
              <button
                className="toggle-button"
                onClick={() => {
                  handleCreateRequest();
                }}
              >
                Salvar
              </button>
            </div>
          </div>
          <ToastContainer position="bottom-right" />
          {loading && <Loader />}
        </Container>
      )}
    </>
  );
};

export default Modal;
