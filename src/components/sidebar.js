import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex: 0 0 18%; 
  background-color: gray;
`

const Sidebar = () => (
  <Container>
    <p>sidebar content</p>
  </Container>
)

export default Sidebar
