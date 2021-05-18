import React from 'react';
import styled from 'styled-components';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuItem from './MenuItem';

const Li = styled.li`

`;

const TitleContainer = styled.div`
  display: inline-flex;
  padding-left: 15px;
  justify-content: space-between;
  width: 200px;
  align-items: center;
  cursor: pointer;
  font-size: 17px;
`;

const H3 = styled.h3`
  margin: 0px;
  cursor: pointer;
  font-weight: 200;
  padding-left: 10px;
  font-size: 17px;
  align-items: center;
`;

const Ul = styled.ul`
  width: 100%;
  background-color: rgb(6, 17, 40);
  font-size: 15px;
`;

const Category = ({ name, items, url, children, visible, handleExpanded }) => {

  return (
    <div>
      <Li>
        <TitleContainer style={{ padding: 15 }}>
          <div onClick={() => handleExpanded(name)} style={{ display: 'inline-flex', width: '215px' }}>
            {children}
            <H3 visible='false' id={name}>{name}</H3>
          </div>
          { name === visible ? (
            //Abierto => muestreme menos
            <ExpandLessIcon
              style={{ fontSize: '30px' }}
              onClick={() => handleExpanded('x')}
            />
          ) :
          //Cerrado => muestreme más
            <ExpandMoreIcon style={{ fontSize: '30px' }} onClick={() => handleExpanded(name)} />}
        </TitleContainer>
        <Ul className={(name === visible ? 'visible' : 'no-visible')}>
          {items.map((item) => (<MenuItem name={item} key={item} url={url} />))}
        </Ul>
        <hr className='Divider-root' />
      </Li>
    </div>
  );
};

export default Category;
