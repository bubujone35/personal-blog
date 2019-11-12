import React from "react";
import styled from "styled-components";
import { Link } from "gatsby"

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

`
const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: white;
  display: block;
  padding: 1rem 3rem;
  margin-right: 1rem;
  &:hover {
    color: black;
  }
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
        <StyledLink to="/">Articles</StyledLink>
      </SideNavItem>
      <SideNavItem>
        <StyledLink to="/">About Me</StyledLink>
      </SideNavItem>
      <SideNavItem>
        <StyledLink to="/">Contact</StyledLink>
      </SideNavItem>
    </SideNav>
    <Legal>&copy; 2019 All rights reserved.</Legal>
  </Container>
)

export default Sidebar
