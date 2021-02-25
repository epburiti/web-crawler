import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root {
    --white: #F5F5F5;
    --red: #FF3333;
    --secondary: #FFFFFF;
    --black: #222222;
    --orange: #ff5824;
    --background: #FFFFFF;
    --geoit: 'geoit',sans-serif;
  }
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Maison, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  html,body, #root{
    background:var(--background);
    margin: 0 auto;
  }
  *,button,input{
    border:0;
    background:none;
    margin:0;
  }
  body {
    font-size:1.6rem;
  }
  html {
  /* a cada 1rem será considera 10px */
  font-size: 62.5%;
}
`;
