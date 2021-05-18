import React from 'react';
import styled from 'styled-components';
import userLogin from '../../../images/user-login.png';

const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 text-align: center;
`;

const Img = styled.img`
  width: 67px;
  padding-left: 38%;
  padding-top: 15px;
`;

const ProfileBox = () => (
  <div className='aside_user'>
    <Container>
      <Img src={userLogin} alt='userLogin' />
      <p>UserName</p>
    </Container>
    <hr className='Divider-root' />
  </div>
);

export default ProfileBox;
