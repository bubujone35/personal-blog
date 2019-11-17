import React from 'react';
import styled from 'styled-components';

import headshot from '../../images/headshot.jpg';
import { Link } from 'gatsby';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--primary-white-1);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.05);
  padding: 3rem;
  margin: 1rem;
  max-width: 900px;
  min-width: 400px;

  @media all and (max-width: 1250px) {
    /* flex-direction: column-reverse; */
  }
`
const Image = styled.img`
  border-radius: 12px;
`
const Header = styled.div`
  color: var(--primary-white-1);
`
const Title = styled(Link)`
  font-size: 4rem;
  text-decoration: none;
  color: var(--medium-gray-1);
  font-weight: 700;

  @media all and (max-width: 800px) {
    font-size: 3rem;
  }

  &:hover {
    color: gray;
  }
`

const MainCard = props => (
  <>
    <Container>
      <Image src={headshot}/>
      <Header>
        <Title>This is the title</Title>
      </Header>
    </Container>
  </>
)

export default MainCard;
