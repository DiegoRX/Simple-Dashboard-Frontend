import React, { useState } from 'react';
import styled from 'styled-components';
import AsideUser from '../AsideUser/AsideUser';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 17px;
  left: 20px;
  z-index: 2220;
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#333' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(-100%)')};
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Transparent = styled.div`
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: fixed;
    height: 1000%;
    width: 100%;  
`;

const BurgerUser = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <AsideUser open={open} />
      <Transparent open={open} onClick={() => setOpen(!open)} />
    </>
  );
};
export default BurgerUser;
