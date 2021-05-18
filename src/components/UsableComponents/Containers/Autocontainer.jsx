import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
    flex-direction: column;
    margin: 0 auto;
    display: flex;
`;

const AutoContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default AutoContainer;
