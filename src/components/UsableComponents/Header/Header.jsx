import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../../images/simple-logo.png';

const HeaderDiv = styled.div`
position: fixed;
top: 0px;
z-index: 9999999;

`;
const LOGO = styled.img`
  display:block;
  margin: auto;
  @media (max-width: 1024px) {
    display: block;
  }
`;
const HeaderIMG = styled.div`
  display:block;
  width:230px;
  height: 65px;
  background-color: white;
  @media (max-width: 1024px) {
    margin: auto;
  }
`;
const LogOut = styled.button`
position: fixed;
top: 12px;
right: 15px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderDiv className='header'>

        <HeaderIMG>
          <LOGO src={logo} alt='logo' style={{ height: '55px' }} className='header-img' />
        </HeaderIMG>
        <Burger />

        <nav className='header-menu' id='menu'>
          <ul>
            <li>
              <LogOut type='button' className='button-simple'>
                Cerrar Sesión
              </LogOut>
            </li>
          </ul>
        </nav>
      </HeaderDiv>
    );
  }
}

export default Header;
