import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Blog from "../components/blog";

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  padding: 4rem;
  flex-direction: column;
  align-items: center;

  @media all and (max-width: 1250px) {
    padding: 0.5rem;
    padding-top: 6rem;
  }
`

const Articles = () => (
  <Layout>
    <SEO title="Blog" />
    <Container>
      <Blog />
    </Container>
  </Layout>
)

export default Articles;
