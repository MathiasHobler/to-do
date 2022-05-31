import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #f8f8f8f8;
  color: #193151;
  font-family: "Helvetica Neue", sans-serif;
}
`;

export default GlobalStyle;
