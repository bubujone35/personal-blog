import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"
import { FaNewspaper } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import avatar from '../images/headshot.png'

import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";

const Container = styled.div`
  flex: 0 0 18%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media all and (max-width: 1250px) {
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    margin: auto;
    align-items: center;
  }
`
// //////////////////////////////////////
// Intro

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 2rem;
  margin-top: 3rem;
  @media all and (max-width: 1250px) {
    order: 1;
    padding: 0;
    margin: 0;
  }
`
const Avatar = styled.div`
  border-radius: 100%;
  height: 10rem;
  width: 10rem;
  margin: 1rem;
  @media all and (max-width: 1250px) {
    height: 4rem;
    width: 4rem;
  }
`
const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
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
    margin-top: 0rem;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-left: 3rem;
  }
`
const SideNavItem = styled.li`
  position: relative;

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
  margin-left: 1rem;
  &:hover {
    color: lightgray;
  }

  display: flex;
  align-items: center;

  @media all and (max-width: 6500px) {
    padding: 1rem;
  }
`

const Legal = styled.div`
  font-size: 1.2rem;
  text-align: center;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media all and (max-width: 1250px) {
    display: none;
  }
`
const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-decoration: none;
  align-items: start;

  @media all and (max-width: 1250px) {
    display: none;
  }
`
const StyledSocial = styled.a`
  display: inline-block;
  color: black;
  text-decoration: none;
  padding: 1em;
  transition:.3s;

  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.3s;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.0, 1.0);

  &:hover {
    color: var(--secondary-blue-1);
    transform: translateY(-3px);
    cursor: pointer;
  }

  &:active {
    transform: translateY(-1px);
    }
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
        This is a personal project to explore using Gatsby and styled components
        to create a blog and portfolio page.
      </Content>
    </Intro>

    <Social>
      <StyledSocial href="https://www.linkedin.com/company/careqik" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedinIn size={26}/>
      </StyledSocial>

      <StyledSocial href="https://www.facebook.com/Careqik-2739261906084783" target="_blank" rel="noopener noreferrer" title="Facebook">
          <FaFacebookF size={26}/>
      </StyledSocial>

      <StyledSocial href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
          <FaInstagram size={26}/>
      </StyledSocial>

      <StyledSocial href="https://www.medium.com" target="_blank" rel="noopener noreferrer" title="Medium">
          <FaMediumM size={26}/>
      </StyledSocial>
    </Social>

    <SideNav>
      <SideNavItem>
        <StyledLink to="/">
          <Icon><FaNewspaper size={32}/></Icon>
          Articles
        </StyledLink>
      </SideNavItem>
      <SideNavItem>
        <StyledLink to="/about">
          <Icon><FaAddressCard size={32}/></Icon>
          About
        </StyledLink>
      </SideNavItem>
      <SideNavItem>
        <StyledLink to="/contact">
          <Icon><FaEnvelope size={32}/></Icon>
          Contact
        </StyledLink>
      </SideNavItem>
    </SideNav>
    <Legal>&copy; 2019 All rights reserved.</Legal>
  </Container>
)

export default Sidebar
