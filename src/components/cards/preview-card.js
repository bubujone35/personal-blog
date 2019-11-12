import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaStar } from 'react-icons/fa';
import SecondaryButton from '../buttons/secondary'


const Container = styled.div`
  display: flex;
  background: #FCFCFC;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  padding: 3rem;
  margin: 1rem;
`
const LeftColumn = styled.div`
  background-color: red;
  flex: 0 0 60%;

`
const RightColumn =  styled.div`
  background-color: black;
  color: white;
  flex: 1;
`
const Header = styled.div`
  background-color: gray;
  color: black;
`
const Title = styled.h2`
  font-size: 3rem;
`

const Subtitle = styled.h3`
  font-size: 2rem;
  font-weight: 300;
`
const Meta = styled.div`
  background-color: lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Hashtags = styled.div`
`

const Tag = styled(Link)`
  text-decoration: none;
  margin: .2rem;
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
  color: yellow;
  margin-bottom: -1rem;
`

const Content = styled.div`

`
const Footer = styled.div`
  background-color: lightgray;
`

// const Name = styled.h4`
//
// `
// const Caption = styled.caption`
//
// `
//
// const Comments = styled.div`
//
// `


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
          <p>Dolore magna aliquam erat volutpat ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper. Typi qui nunc nobis videntur parum clari fiant sollemnes in. Feugiat nulla facilisis at vero eros et accumsan et iusto odio.</p>
        </Content>
        <Footer>
          <SecondaryButton>Read More</SecondaryButton>
        </Footer>
      </LeftColumn>
      <RightColumn>
        Right Column
      </RightColumn>
    </Container>
  </>
)

export default PreviewCard;
