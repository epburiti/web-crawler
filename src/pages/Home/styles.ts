import styled from "styled-components";

export const Container = styled.div`
  .title {
    color: var(--black);
    display: flex;
    justify-content: center;
    margin-top: 4rem;
  }

  .container-add {
    display: flex;
    align-items: flex-end;
    width: 100%;
    margin-top: 5rem;
    .infor-data {
      display: flex;
      flex-direction: column;
      width: 40%;
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

  /* button */
  .btn {
    margin-left: 1rem;
    height: 5rem;
    font-size: 1.5rem;
    padding: 1rem 3rem;
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
  }

  .btn:hover {
    color: var(--white);
    background-color: var(--orange);
  }
`;
