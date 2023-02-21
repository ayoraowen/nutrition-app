import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/home" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            About
          </MenuLink>
          <MenuLink to="/gain-weight" activeStyle>
            Gain Weight
          </MenuLink>
          <MenuLink to="/lose-weight" activeStyle>
            Lose Weight
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar