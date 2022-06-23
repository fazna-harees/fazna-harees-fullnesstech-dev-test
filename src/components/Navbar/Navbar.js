import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { menu } from "../../utils/constants";
import { capitalize } from "../../utils/helpers";
import {
  Nav,
  NavbarContainer,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
} from "./Navbar.styles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <MenuIcon onClick={handleClick}>
            {click ? <BiX /> : <BiMenu />}
          </MenuIcon>
          <Menu onClick={handleClick} click={click}>
            <MenuItem>
              <MenuLink onClick={closeMenu} to="/" style={{ color: "gray" }}>
                Top Home Loan Products
              </MenuLink>
            </MenuItem>
          </Menu>
          <Menu onClick={handleClick} click={click}>
            {menu.map((item) => (
              <MenuItem key={item.slug}>
                <MenuLink onClick={closeMenu} to={`/${item.slug}`}>
                  {capitalize(item.name)}
                </MenuLink>
              </MenuItem>
            ))}
          </Menu>
        </NavbarContainer>
      </Nav>
    </div>
  );
};

export default Navbar;
