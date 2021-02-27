import styled from "styled-components";

export const Container = styled.div`
  .title {
    text-align: center;
    color: var(--black);
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }
`;
export const ContainerTable = styled.div`
  margin: 4rem auto;
  width: 80%;
  /* button */
  .btn {
    margin: 1rem;
    height: 3rem;
    font-size: 1.1rem;
    padding: 0.6rem;
    color: var(--black);
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    font-weight: bold;
    letter-spacing: 0.1rem;
    border: 0.2rem solid var(--orange);
    color: var(--orange);
    transition: 0.5s all ease;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    span {
      margin-left: 0.6rem;
    }
  }

  .btn:hover {
    color: var(--white);
    background-color: var(--orange);
    svg {
      color: var(--white) !important;
    }
  }
  .styled-table {
    border-collapse: collapse;
    font-size: 0.9em;
    font-family: sans-serif;
    width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  .styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }
  .styled-table th,
  .styled-table td {
    padding: 12px 15px;
  }
  .styled-table td {
    span {
      text-decoration: underline;
      color: var(--orange);
      cursor: pointer;
    }
  }
  .styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  .styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  .styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
  .styled-table tbody tr:last-child(0) {
    font-weight: bold;
    color: #009879;
  }
`;

export const ContainerModal = styled.div`
  width: 50vw;
  height: 50vh;
  .modal {
    position: fixed;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.5s 0.5s ease-in-out;
    transition: all 0.5s 0.5s ease-in-out;
  }

  .modal-content {
    padding: 10px;
    max-width: 600px;
    min-width: 360px;
    max-height: 85%;
    overflow: auto;
    position: absolute;
    top: 5%;
    left: 50%;
    z-index: 2;
    opacity: 0;
    border-radius: 3px;
    background: #fff;
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  .modal-content img {
    display: block;
    width: 100%;
    margin: 10px 0 0;
  }

  .modal-content p {
    padding-top: 10px;
    text-align: justify;
  }
  .modal-close {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .modal-close:after {
    content: "X";
    float: right;
    margin: 5px 5px 0 0;
    width: 30px;
    height: 30px;
    position: relative;
    z-index: 3;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: 0 0 3px #000;
  }
  input[id*="modal_"] {
    position: fixed;
    left: -9999px;
    top: 50%;
    opacity: 0;
  }

  input[id*="modal_"]:checked + div.modal {
    opacity: 1;
    visibility: visible;
    -webkit-transition-delay: 0s;
    -ms-transition-delay: 0s;
    transition-delay: 0s;
  }

  input[id*="modal_"]:checked + div.modal .modal-content {
    opacity: 1;
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    -webkit-transition-delay: 0.5s;
    -ms-transition-delay: 0.5s;
    transition-delay: 0.5s;
  }
  @media screen and (max-width: 767px) {
    .modal-content {
      padding: 10px 5%;
      min-width: 88%;
    }
  }
`;
