import React, { useState } from "react";
import NavBar from "./../../components/NavBar";
import axios from "./../../services/api";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "./../../components/Loader";
import { Container } from "./styles";

const Home: React.FC = () => {
  const [searchTxt, setSearchTxt] = useState("");
  async function handleCreateRequest() {
    if (searchTxt.length < 4) {
      toast.warn("A solicitação deve possuir mais que 4 caracteres");
      return;
    }

    const data = {
      keyword: searchTxt,
    };
    const { data: response } = await axios.post("/crawl", data);

    if (response.status && response.status !== 200) {
      toast.error(
        "Um erro inesperado aconteceu, tente novamente ou contate o Administrador"
      );
    } else {
      toast.success("Solicitação cadastrada com sucesso...");
    }
  }
  return (
    <Container>
      <NavBar />
      <div className="title">
        <h1>Solicitações de inspeção</h1>
      </div>

      <div className="container-add">
        <div className="infor-data">
          <label htmlFor="add">
            Informe a solicitação que deseja cadastrar
          </label>
          <input
            type="text"
            name="add"
            id="add"
            placeholder="Escreva aqui..."
            value={searchTxt}
            onChange={(event) => setSearchTxt(event.target.value)}
          />
        </div>

        <button className="btn" onClick={handleCreateRequest}>
          Cadastrar
        </button>
      </div>

      <Loader />
      <ToastContainer position="bottom-right" />
    </Container>
  );
};

export default Home;
