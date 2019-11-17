import React from 'react';
import styled from 'styled-components';

import bridge from '../../images/bridge.jpg';
import { Link } from 'gatsby';
import { FaStar } from 'react-icons/fa';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: var(--primary-white-1);
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.05);
  padding: 3rem;
  margin: 1rem;

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
const SubTitle = styled.h3`
  font-size: 2rem;
  color: var(--medium-gray-1);
  font-weight: 300;
`
const Meta = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media all and (max-width: 800px) {
    flex-direction: column;
    display: flex;
    align-items: start
  }

`

const HashTags = styled.div`
`

const Tag1 = styled(Link)`
  text-decoration: none;
  margin: .2rem;
  color: var(--primary-blue-1);
  font-weight: 700;
  letter-spacing: 0.03rem;

  &:hover {
    color: var(--secondary-blue-1);
    cursor: pointer;
  }
`
const Tag2 = styled(Link)`
  text-decoration: none;
  margin: .2rem;
  color: var(--primary-blue-1);
  font-weight: 700;
  letter-spacing: 0.03rem;

  &:hover {
    color: var(--secondary-blue-1);
    cursor: pointer;
  }
`
const Tag3 = styled(Link)`
  text-decoration: none;
  margin: .2rem;
  color: var(--primary-blue-1);
  font-weight: 700;
  letter-spacing: 0.03rem;

  &:hover {
    color: var(--secondary-blue-1);
    cursor: pointer;
  }
`
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Stars = styled.svg`
  width: 3rem;
  height: 3rem;
  margin-right: 1.5rem;
  color: #FADB14;
  margin-bottom: -1rem;

  @media all and (max-width: 1250px) {
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.4rem;
    margin-top: 1rem;

  }
`
const Content = styled.div`
  display: flex
`
const Column1 = styled.div`
  margin-right: 3rem;
`
const Column2 = styled.div`

`

const MainCard = props => (
  <>
    <Container>
      <Image src={bridge}/>
      <Header>
        <Title>This is the title</Title>
        <SubTitle>This is the subtitle, it goes below the main title. </SubTitle>
        <Meta>
          <HashTags>
            <Tag1>#Fitness</Tag1>
            <Tag2>#Wellness</Tag2>
            <Tag3>#Motivation</Tag3>
          </HashTags>
          <Icons>
            <Stars><FaStar size={20}/></Stars>
            <Stars><FaStar size={20}/></Stars>
            <Stars><FaStar size={20}/></Stars>
            <Stars><FaStar size={20}/></Stars>
          </Icons>
        </Meta>
      </Header>
      <Content>
        <Column1>
        Odio dignissim qui blandit praesent, luptatum zzril delenit augue duis. Commodo consequat duis autem vel eum iriure dolor in hendrerit in vulputate velit esse. Nulla facilisis at vero eros et accumsan et iusto dolore te.
        Odio dignissim qui blandit praesent, luptatum zzril delenit augue duis. Commodo consequat duis autem vel eum iriure dolor in hendrerit in vulputate velit esse. Nulla facilisis at vero eros et accumsan et iusto dolore te.

        </Column1>
        <Column2>
        Odio dignissim qui blandit praesent, luptatum zzril delenit augue duis. Commodo consequat duis autem vel eum iriure dolor in hendrerit in vulputate velit esse. Nulla facilisis at vero eros et accumsan et iusto dolore te.
        Odio dignissim qui blandit praesent, luptatum zzril delenit augue duis. Commodo consequat duis autem vel eum iriure dolor in hendrerit in vulputate velit esse. Nulla facilisis at vero eros et accumsan et iusto dolore te.
        </Column2>
      </Content>
    </Container>
  </>
)

export default MainCard;
