import React, { useState } from "react"
import styled from "styled-components"

const NavItems = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex: 0 1 25%;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  font-family: Ubuntu;
`

const NavItem = styled.li`
  margin-left: 1.5rem;
  padding: 3px;
  transition: all 0.3s linear;
  background: ${props => (props.active ? `#fff93d` : `none`)};
  &:hover {
    background: #fff93d;
    cursor: pointer;
  }
`

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 0.8rem;
  text-transform: uppercase;
  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`

const Nav = () => {
  return (
    <NavItems>
      <NavItem>
        <NavLink href="#">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Products</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Contact</NavLink>
      </NavItem>
    </NavItems>
  )
}

export default Nav
