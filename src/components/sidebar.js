import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"
import { FaNewspaper } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import avatar from '../images/headshot.png'




const Container = styled.div`
  flex: 0 0 18%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media all and (max-width: 1250px) {
    flex-direction: column;
    width: 100%;
  }
`
// //////////////////////////////////////
// Intro

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  margin-top: 3rem;
  @media all and (max-width: 1250px) {
    display: none;
  }
`
const Avatar = styled.div`
  border-radius: 100%;
  height: 12rem;
  width: 12rem;
  margin: 1rem;
  @media all and (max-width: 1250px) {
    display: none;
  }
`
const Name = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  @media all and (max-width: 1250px) {
    display: none;
  }
`

const Content = styled.div`
  @media all and (max-width: 1250px) {
    display: none;
  }
`

const SideNav = styled.ul`
  font-size: 1.8rem;
  list-style: none;
  margin-top: 3.5rem;
  flex-grow: 2;

  @media all and (max-width: 1250px) {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`
const SideNavItem = styled.li`
  position: relative;

  /* &:not(:last-child) {
    margin-bottom: 0.5rem;
  } */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: lightgray;
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

  @media all and (max-width: 6500px) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  /* font-weight: 700; */
  text-transform: uppercase;
  font-size: 2rem;
  color: black;
  display: block;
  padding: 1rem 3rem;
  z-index: 10;
  position: relative;
  margin-right: 1rem;
  &:hover {
    color: lightgray;
  }

  display: flex;
  align-items: center;
`

const Legal = styled.div`
  font-size: 1.2rem;
  text-align: center;
  padding: 2.5rem;
  @media all and (max-width: 1250px) {
    display: none;
  }
`

const Sidebar = () => (
  <Container>
    <Intro>
      <Avatar>
        <img src={avatar} alt="Headshot" />
      </Avatar>
      <Name>
        Dr. Ryan Lee
      </Name>
      <Content>
        My name is Ryan Lee
      </Content>
    </Intro>
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
          About
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
