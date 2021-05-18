import React from 'react';
import styled from 'styled-components';

const Darker = styled.section`

  height: 100%;
  width: 100%;
  background-color: #282C34;
  display: ${({ open }) => (open ? 'block' : 'none')};

  }
`;
const DarkerColor = ({ open }) => {
  return (
    <Darker open={open} />
  );
};

