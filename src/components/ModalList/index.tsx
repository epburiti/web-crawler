import React, { useState, useContext } from "react";
import { UseContextModalList } from "../../shared/UserContext";
import { Container } from "./styles";
import axios from "../../services/api";
import Loader from "../Loader";
interface IModalList {
  requestName: string;
  requestId: string;
}
const Modal: React.FC<IModalList> = ({ requestName, requestId }) => {
  const modalState = useContext(UseContextModalList);
  const [loading, setLoading] = useState(false);
  function closeModal() {
    modalState.setModalList(false);
  }

  return (
    <>
      {modalState.modalList && (
        <Container>
          <div className="modal" id="modal">
            <h2>Resultado da solicitação de {requestName}</h2>
            <div className="content">
              <div className="actions">
                <button
                  className="toggle-button"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
          {loading && <Loader />}
        </Container>
      )}
    </>
  );
};

export default Modal;
