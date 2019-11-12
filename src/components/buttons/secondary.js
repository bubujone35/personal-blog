import styled from 'styled-components';

const SecondaryButton = styled.button`
  background-color: transparent;
  color: var(--lightGrey1);
  background-repeat: no-repeat;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 1rem;
  padding: 0.75em 3em;
  border: 2px solid var(--lightGrey1);
  border-radius: 100px;
  outline: none;
  letter-spacing: 0.05em;

  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.3s;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0) scale(1.0, 1.0);

  &:hover {
    color: #FDFDFD;
    border: 2px solid var(--lightGrey1);
    transform: translateY(-3px);
    cursor: pointer;
  }

  &:active {
    transform: translateY(-1px);
    }
  }

  @media (max-width: 840px) {
    font-size: 1rem;
  }
`


export default SecondaryButton;
