import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: green;
  /* For Testing Purposes */
  height: 80rem;
`

const Main = () => (
  <Container>
    <p>main content</p>
  </Container>
)

export default Main
