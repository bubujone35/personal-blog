import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1; 
  background-color: green;
`

const Main = () => (
  <Container>
    <p>main content</p>
  </Container>
)

export default Main
