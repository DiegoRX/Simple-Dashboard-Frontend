import React from 'react';
import styled from 'styled-components';
import ProfileBox from './ProfileBox';
import MenuSimple from './MenuSimple';

const SectionAside = styled.section`
  top: 65px;
  flex: 1 0 auto;
  height: 100%;
  width: 230px;
  display: flex;
  outline: 0;
  z-index: 1200;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  flex-flow: column nowrap;
  background-color: #0a1a40;
  color: white;
  top: calc(100%-65px)
  a{
    color: white;
    font-family: 'Oswald', sans-serif;
  }  
  ul li {
    color: white;
    list-style: none;
  }  
  .aside_img--container{
      display: none;
    }
  @media (max-width: 1024px) {
    flex-flow: column nowrap;
    background-color: #0a1a40;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(-100%)')};
    top: 65px;
    left: 0;
    height: 100vh;
    width: 255px;
    padding-top: 0px;
    transition: transform 0.3s ease-in-out;

    .aside_img--container{
      background-color: white;
      display:flex;
      padding-left: 40px;

    }
    img .aside_img--container{
      display: flex;
      padding-left: 40px;
    }

  }
`;
const AsideUser = ({ open }) => {
  return (
    <SectionAside className='aside' open={open}>
      <ProfileBox />
      <div className='aside_container'>
        <MenuSimple />
      </div>
    </SectionAside>
  );
};

export default AsideUser;
