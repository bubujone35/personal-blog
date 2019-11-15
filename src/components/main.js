import React from "react";
import styled from "styled-components";
import PreviewCard from "./cards/preview-card";

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
      link="post1"
      title="My Ammends"
      subtitle="The realist thing I ever wrote."
      tag1="mystory"
      tag2="motivation"
      tag3="hustle"
      content="This is test content inside of the testCard component. The cards grow based upon content within and stay the same height based on the tallest card."
    />

    <PreviewCard
      page="/"
      title="This is another post"
      subtitle="To test out dynamic rendering of props."
      tag1="anothertag"
      tag2="supertag"
      tag3="awesome"
      content="This is to test if you can post another blog preview card. I hope it works and I hope you enjoy how it looks too! I am going to add more content for asthetics sake. Should figure out a max word count for preview."
    />

  </Container>
)

export default Main
