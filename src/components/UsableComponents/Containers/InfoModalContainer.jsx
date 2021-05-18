import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    margin: 0px 30px;
    display: flex;
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
