import React from "react";
import styled from "styled-components";
import PreviewCard from "./cards/preview-card"

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: lightgray;
  padding: 4rem;
  flex-direction: column;
  align-items: center;
`

const Main = () => (
  <Container>
    <PreviewCard />
    <PreviewCard />
  </Container>
)

export default Main
