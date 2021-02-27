import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  .modal {
    max-width: 90%;
    min-width: 60vw;
    background: var(--white);
    border: 1px solid #ccc;
    transition: 1.1s ease-out;
    box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
    filter: blur(0);
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }
  .modal.off {
    opacity: 0;
    visibility: hidden;
    filter: blur(8px);
    transform: scale(0.33);
    box-shadow: 1rem 0 0 rgba(0, 0, 0, 0.2);
  }
  @supports (offset-rotation: 0deg) {
    offset-rotation: 0deg;
    offset-path: path("M 250,100 S -300,500 -700,-200");
    .modal.off {
      offset-distance: 100%;
    }
  }
  @media (prefers-reduced-motion) {
    .modal {
      offset-path: none;
    }
  }
  .modal h2 {
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    margin: 0;
  }
  .modal .content {
    padding: 1rem;
  }
  .modal .actions {
    border-top: 1px solid #ccc;
    background: #eee;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: flex-end;
  }
  .modal .actions button {
    border: 0;
    background: var(--orange);
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1.3rem;
    line-height: 1;
    margin-right: 1rem;
    cursor: pointer;
    color: var(--white);
  }
  #centered-toggle-button {
    position: absolute;
  }

  /*  */

  .container-add {
    margin-left: 2rem;
    display: flex;
    align-items: flex-end;
    width: 100%;
    .infor-data {
      display: flex;
      flex-direction: column;
      width: 80%;
    }

    label {
      color: var(--black);
      margin: 0.8rem;
      font-weight: 1.3rem;
      font-weight: 500;
    }
    input {
      height: 5rem;
      outline: none;
      border-radius: 2.5rem;
      border: 1px solid #dfe1e5;
      box-shadow: 0 0 0.1rem var(--black);
      transition: 0.5s all ease;
      padding-left: 2rem;
      &:hover {
        box-shadow: 0 0 0.3rem var(--black);
      }
    }
  }
`;
