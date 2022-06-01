import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Archive">Archive</Link>
        <Link to="/Random">Random</Link>
      </ul>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  width: 100%;
  background: lightblue;
  position: fixed;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
`;
