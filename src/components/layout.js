/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Main from "./main"
import Sidebar from "./sidebar"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const Container = styled.div`
    display: flex;
    max-width: 120rem;
    margin: 4rem auto;
    background-color: orangered;
  `
  

  return (
    <>
      <Container>
        <Sidebar/>
          <main>{children}</main>
        <Main/>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
