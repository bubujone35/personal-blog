import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaStar } from 'react-icons/fa';
import SecondaryButton from '../buttons/secondary';
import headshot from '../../images/headshot.jpg';

const Container = styled.div`
  display: flex;
  background: white;
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

const LeftColumn = styled.div`
  background-color: white;
  flex: 0 0 60%;
  display: flex;
  flex-direction: column;
  margin-right: 1rem;

`
const RightColumn =  styled.div`
  background-color: white;
  color: white;
  flex: 1 auto;
  display: flex;
  align-items: start;
  justify-content: center;
  padding: 2rem;
  flex-direction: column;

  @media all and (max-width: 1250px) {
    padding: 0;
    align-items: start;
    justify-content: start;

  }
 `
const Header = styled.div`
  background-color: white;
  color: black;
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

const Subtitle = styled.h3`
  font-size: 2rem;
  font-weight: 300;

  @media all and (max-width: 1250px) {
    font-size: 1.75rem;

  }
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

const Hashtags = styled.div`
`

const Tag1 = styled(Link)`
  text-decoration: none;
  margin: .2rem;
  color: var(--primary-blue-1);
  font-weight: 700;

  &:hover {
    color: gray;
    cursor: pointer;
  }
`
const Tag2 = styled(Link)`
  text-decoration: none;
  margin: .2rem;
  color: var(--primary-blue-1);
  font-weight: 700;

  &:hover {
    color: gray;
    cursor: pointer;
  }
`
const Tag3 = styled(Link)`
  text-decoration: none;
  margin: .2rem;
  color: var(--primary-blue-1);
  font-weight: 700;

  &:hover {
    color: gray;
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
  border-bottom: 1px solid var(--light-gray-1);
  border-top: 1px solid var(--light-gray-1);
  padding: 1rem 0;
  margin: 1rem 0;

  @media all and (max-width: 700px) {
    display: none;
  }
`
const Footer = styled.div`
  background-color: white;
  padding: 1rem 0;
  margin-top: 1rem;
`
const Image = styled.img`
  border-radius: 12px;
  margin: 1rem;

  @media all and (max-width: 1250px) {
    margin: 0;
  }
`
const PageLink = styled(Link)`
  text-decoration: none;
`

const PreviewCard = props => (
  <>
    <Container>
      <LeftColumn>
        <Header>
          <Title to={props.link}>{props.title}</Title>
          <Subtitle>{props.subtitle}</Subtitle>
          <Meta>
            <Hashtags>
              <Tag1>#{props.tag1}</Tag1>
              <Tag2>#{props.tag2}</Tag2>
              <Tag3>#{props.tag3}</Tag3>
            </Hashtags>
            <Icons>
              <Stars><FaStar size={20}/></Stars>
              <Stars><FaStar size={20}/></Stars>
              <Stars><FaStar size={20}/></Stars>
              <Stars><FaStar size={20}/></Stars>
            </Icons>
          </Meta>
        </Header>
        <Content>
          {props.content}
        </Content>
        <Footer>
          <SecondaryButton>
            <PageLink to={props.link}>
              Link
            </PageLink>
          </SecondaryButton>
        </Footer>
      </LeftColumn>
      <RightColumn>
        <Image src={headshot}/>
      </RightColumn>
    </Container>
  </>
)

export default PreviewCard;
