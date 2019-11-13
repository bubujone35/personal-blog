import styled from 'styled-components';

const SecondaryButton = styled.button`
  display: inline-block;
  border: none;
  background-color: transparent;
  color: black;
  background-repeat: no-repeat;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  outline: none;
  letter-spacing: 0.05em;
  text-transform: uppercase; 


  &:hover {
    color: gray;
    cursor: pointer;
  }
`

export default SecondaryButton;
