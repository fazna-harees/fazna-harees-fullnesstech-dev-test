import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  font-size: 18px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 100px;
  background-color: #f7f7f7;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    height: 50px;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10px;
  width: 100%;
`;

export const MenuIcon = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 2rem;
    color: gray;
    cursor: pointer;
  }
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 20px;
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    max-width: 270px;
    width: 75%;
    height: 100vh;
    position: absolute;
    top: 30px;
    left: ${({ click }) => (click ? "0%" : "-100%")};
    background: #f7f7f7;
    transition: all 0.5s ease;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 100px;
  cursor: pointer;
  @media only screen and (max-width: 1000px) {
    width: 100%;
    height: 50px;
    &:hover {
      border: none;
    }
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  color: #a4a4a4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  height: 100%;
  transition: all 0.2s ease;
  &:hover {
    color: black;
    transform: traslateY(-3rem);
  }
  &:active {
    transform: traslateY(3rem);
    color: #e38b06;
  }
  @media only screen and (max-width: 1000px) {
    display: block;
    text-align: left;
    padding: 10px 0px;
    transition: all 0.2s ease;
  }
`;
