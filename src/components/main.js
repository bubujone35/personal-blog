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
    padding: 0.5rem;
    padding-top: 6rem;
  }
`

const Main = () => (
  <Container>
    <PreviewCard
      title="My Ammends"
      subtitle="The realist thing I ever wrote."
      tag1="mystory"
      tag2="motivation"
      tag3="hustle"
      content="This is test content inside of the testCard component. The cards grow based upon content within and stay the same height based on the tallest card."
    />

  </Container>
)

export default Main
