import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderStyle>
      <h1>ToDo List</h1>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.header`
  text-align: center;
  width: 100%;
  background-color: lightblue;

  h1 {
    marign: 0;
  }
`;
