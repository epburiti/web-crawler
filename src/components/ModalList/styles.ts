import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 600px) {
    li {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 400px) {
    li {
      font-size: 1rem;
    }
  }
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  background-color: rgba(0, 0, 0, 0.2);
  .modal {
    min-width: 60vw;
    max-width: 90vw;
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
    padding: 3rem;
    max-height: 70vh;
    overflow: auto;
    h5 {
      font-size: 1.6rem;
    }
    hr {
      width: 100%;
      margin: 1rem auto;
      border-bottom: 1px solid var(--orange);
      padding-top: 1rem;
    }

    ul {
      padding: 1rem;
      li {
        margin-top: 1rem;
      }
    }
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
`;
