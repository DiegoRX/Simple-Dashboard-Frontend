import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
  padding: 15px 0px;
  padding-left: 50px;
`;

const MenuItem = ({ name, url }) => {

  const [open, setOpen] = useState(false);

  const URL = name.replace(/\s/g, '');

  return (
    <div>
      <Li>
        <Link to={URL} style={{ color: 'white' }} onClick={() => setOpen(open)}>
          <div style={{ width: '100%' }}>
            {name}
          </div>
        </Link>
      </Li>
    </div>
  );
};

export default MenuItem;
