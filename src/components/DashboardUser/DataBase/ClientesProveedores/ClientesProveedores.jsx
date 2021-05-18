import React from 'react';
import AddButton from '../../../UsableComponents/Buttons/AddButton';
import Title from '../../../UsableComponents/Title/Title';
import InfoContainer from '../../../UsableComponents/Containers/InfoContainer';
import TableUI from '../../../UsableComponents/Table/TableUI';

const ClientesProveedores = () => {
  return (
    <>
      <Title title='Clientes/Proveedores'>
        <AddButton src='NewClienteProveedor' />
      </Title>
      <InfoContainer>
        <TableUI
          value1='Nombre'
          value2='Numero de identificación'
          value3='Telefono'
          value4='Email'
          value5='Ciudad'
          editUrl='VerClienteProveedor'
        />
      </InfoContainer>
    </>
  );
};

export default ClientesProveedores;
