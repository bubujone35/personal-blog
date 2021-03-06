import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

import MainCard from "../components/cards/main-card"

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

const Post1 = () => (
  <Layout>
    <SEO title="First Post" />
    <Container>
      <MainCard/>
    </Container>
  </Layout>
)

export default Post1;
