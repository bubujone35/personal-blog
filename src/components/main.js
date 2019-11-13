import React from "react";
import styled from "styled-components";
import PreviewCard from "./cards/preview-card"

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  padding: 4rem;
  flex-direction: column;
  align-items: center;

  @media all and (max-width: 1250px) {
    padding: 4rem 0 0;
  }
`

const Main = () => (
  <Container>
    <PreviewCard />
    <PreviewCard />
  </Container>
)

export default Main
