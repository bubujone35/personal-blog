import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaStar } from 'react-icons/fa';
import SecondaryButton from '../buttons/secondary'
import headshot from '../../images/headshot.jpg'


const Container = styled.div`
  display: flex;
  background: #FCFCFC;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.05);
  padding: 3rem;
  margin: 1rem;
  max-width: 900px;
  min-width: 400px;

  @media all and (max-width: 1250px) {
    flex-direction: column-reverse;
  }
`
const LeftColumn = styled.div`
  background-color: white;
  flex: 0 0 60%;
  display: flex;
  flex-direction: column;
`
const RightColumn =  styled.div`
  background-color: white;
  color: white;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  flex-direction: column;

  @media all and (max-width: 1250px) {
    padding: 0;
    align-items: start;
  }
 `
const Header = styled.div`
  background-color: white;
  color: black;
`
const Title = styled.h2`
  font-size: 4rem;
`

const Subtitle = styled.h3`
  font-size: 2rem;
  font-weight: 300;
`
const Meta = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Hashtags = styled.div`
`

const Tag = styled(Link)`
  text-decoration: none;
  margin: .2rem;
  color: blue;

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
`

const Content = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1rem 0;
  margin: 1rem 0;
`
const Footer = styled.div`
  background-color: white;
  padding: 1rem 0;
`
const Image = styled.img`
  border-radius: 12px;
  margin: 1rem;

  @media all and (max-width: 1250px) {
    margin: 0;
  }
`

const PreviewCard = props => (
  <>
    <Container>
      <LeftColumn>
        <Header>
          <Title>This is the title</Title>
          <Subtitle>Here is a subtitle</Subtitle>
          <Meta>
            <Hashtags>
              <Tag>#Regular</Tag>
              <Tag>#Medium</Tag>
              <Tag>#Large</Tag>
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
          <p>Dolore magna aliquam erat volutpat ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper. Typi qui nunc nobis videntur parum clari fiant sollemnes in. Feugiat nulla facilisis at vero eros et accumsan et iusto odio. Dolore magna aliquam erat volutpat ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper. Typi qui nunc nobis videntur parum clari fiant sollemnes in. Feugiat nulla facilisis at vero eros et accumsan et iusto odio.</p>
        </Content>
        <Footer>
          <SecondaryButton>Read More</SecondaryButton>
        </Footer>
      </LeftColumn>
      <RightColumn>
        <Image src={headshot}/>
      </RightColumn>
    </Container>
  </>
)

export default PreviewCard;
