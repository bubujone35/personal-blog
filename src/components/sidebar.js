import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"
import { FaNewspaper } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';




const Container = styled.div`
  flex: 0 0 18%;
  background-color: gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const SideNav = styled.ul`
  font-size: 1.8rem;
  list-style: none;
  margin-top: 3.5rem;
`
const SideNavItem = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: orangered;
    transform: scaleY(0);
    transition: transform .2s,
                width .4s cubic-bezier(1,0,0,1) .2s;
            
  }

  &:hover::before {
    transform: scaleY(1);
    width: 100%;
  }
`

const Icon = styled.svg`
  width: 3rem;
  height: 3rem;
  margin-right: 1.5rem;
  fill: currentColor;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 2rem;
  color: white;
  display: block;
  padding: 1rem 3rem;
  z-index: 10;
  position: relative;
  margin-right: 1rem;
  &:hover {
    color: black;
  }

  display: flex;
  align-items: center;
`

const Legal = styled.div`
  font-size: 1.2rem;
  text-align: center;
  padding: 2.5rem;
`

const Sidebar = () => (
  <Container>
    <SideNav>
      <SideNavItem>
        <StyledLink to="/">
          <Icon><FaNewspaper size={32}/></Icon>
          Articles
        </StyledLink>
      </SideNavItem>
      <SideNavItem>
        <StyledLink to="/">
          <Icon><FaAddressCard size={32}/></Icon>
          About Me
        </StyledLink>
      </SideNavItem>
      <SideNavItem>
        <StyledLink to="/">
          <Icon><FaEnvelope size={32}/></Icon>
          Contact
        </StyledLink>
      </SideNavItem>
    </SideNav>
    <Legal>&copy; 2019 All rights reserved.</Legal>
  </Container>
)

export default Sidebar
