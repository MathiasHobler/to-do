import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        Home<div></div>
      </NavLink>
      <NavLink to="/Archive">
        Archive<div></div>
      </NavLink>
      <NavLink to="/Random">
        Random<div></div>
      </NavLink>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  width: 100%;
  height: 3.5em;
  background: lightblue;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    color: black;

    &:hover {
      transform: scale(1.2);
    }
    &.active div {
      margin-top: 5px;
      margin: auto;
      height: 5px;
      width: 5px;
      border-radius: 50%;
      background-color: black;
    }
  }
`;
