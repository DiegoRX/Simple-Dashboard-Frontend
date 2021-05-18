import React from 'react';
import styled from 'styled-components';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const BoxContainer = styled.div`
background-color: white;
display: flex;
height: 0 auto;
justify-content: space-around;
padding: 10px;
width: 100%;
@media screen and (max-width: 767px){
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
`;

const Box = styled.div`
    width: 22%;
    height: 83px;
    border-radius: 5px;
    display: inline-block;
    margin: 6px;
    padding: 20px;
    @media screen and (max-width: 1130px){
    min-width: 10%;
    }
    @media screen and (max-width: 767px){
        width: 40%;
    }
`;

const ItemHome = styled.div`
    width: 70%;
    height: 100%;
    float: left;
    text-align: left;
`;

const HomeBox = () => {
  return (
    <BoxContainer>
      <Box style={{ backgroundColor: '#01BAC7', border: '1px solid #06949b' }}>
        <ItemHome>
          <h3>Facturas</h3>
          <hr />
          <h4>Crear</h4>
        </ItemHome>
        <div>
          <ReceiptIcon />
        </div>
      </Box>
      <Box style={{ backgroundColor: '#0ebf0b', border: '1px solid #06949b' }}>
        <ItemHome>
          <h3>Cotizaciones</h3>
          <hr />
          <h4>Crear</h4>
        </ItemHome>
        <div>
          <PostAddIcon  />
        </div>
      </Box>
      <Box style={{ backgroundColor: '#DB5234', border: '1px solid #06949b' }}>
        <ItemHome>
          <h3>Clientes</h3>
          <hr />
          <h4>Crear</h4>
        </ItemHome>
        <div>
          <GroupAddIcon />
        </div>
      </Box>
      <Box style={{ backgroundColor: '#8E93A1', border: '1px solid #06949b' }}>
        <ItemHome>
          <h3>Compras</h3>
          <hr />
          <h4>Crear</h4>
        </ItemHome>
        <div>
          <ShoppingCartIcon />
        </div>
      </Box>
    </BoxContainer>
  );
};

export default HomeBox;
