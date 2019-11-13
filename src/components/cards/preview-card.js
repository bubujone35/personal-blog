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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  padding: 3rem;
  margin: 1rem;
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
  color: black;
  margin-bottom: -1rem;
`

const Content = styled.div`
  border-bottom: 1px solid black;
  border-top: 1px solid black;
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
