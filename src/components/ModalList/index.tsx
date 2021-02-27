import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UseContextModalList } from "../../shared/UserContext";
import { Container } from "./styles";
import axios from "../../services/api";
import Loader from "../Loader";
import { ToastContainer, toast } from "react-toastify";

interface IModalList {
  requestName: string;
  requestId: string;
}
interface IResponse {
  id: string;
  status: string;
  urls: string[];
}
const Modal: React.FC<IModalList> = ({ requestName, requestId }) => {
  const modalState = useContext(UseContextModalList);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IResponse>({
    id: "",
    status: "",
    urls: [],
  });
  function closeModal() {
    modalState.setModalList(false);
  }
  function getList() {
    setLoading(true);
    axios
      .get<IResponse>(`/crawl/${requestId}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error(
          "Um erro inesperado aconteceu, tente novamente ou contade o administrador..."
        );
      });
  }

  useEffect(() => {
    setData({
      id: "",
      status: "",
      urls: [],
    });
    if (requestId != "") {
      getList();
    }
  }, [requestId]);

  return (
    <>
      {modalState.modalList && (
        <Container>
          <div className="modal" id="modal">
            <h2>Resultado da solicitação de {requestName}</h2>
            <div className="content">
              <h5>Lista de sites encontrados com a palavra {requestName}</h5>
              <hr />
              <h5>Status {data.status}</h5>
              <ul>
                {data.urls.map((item, index) => (
                  <li key={index}>
                    <a href={item} target="blank">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
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
            </div>
          </div>
          {loading && <Loader />}
          <ToastContainer />
        </Container>
      )}
    </>
  );
};

export default Modal;
