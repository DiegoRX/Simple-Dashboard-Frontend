import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    height: 65vh;
    margin: 0px 30px;
    display: flex;
    flex-direction: column;
    @media (max-width: 700px){
      flex-direction: column;
      }

`;

const InfoContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default InfoContainer;
