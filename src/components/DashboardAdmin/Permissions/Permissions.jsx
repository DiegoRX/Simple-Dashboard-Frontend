import React, { useState, useEffect } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoContainer from '../../UsableComponents/Containers/InfoContainer';
import TablePermissions from './Table/TablePermissions';
import Search from '../../UsableComponents/Search/Search';
import ModalButton from '../../UsableComponents/Buttons/ModalButton';
import NewPermission from './NewPermission';
import Modal from '../../UsableComponents/Modal/Modal';
import RequestService from '../../../config';

const Permisos = () => {

  const [permission, setPermissions] = useState([]);
  const [dataPermission, setDataPermissions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isActive, setIsActive] = useState([{ isActive: '' }]);

  const viewModal = () => (isOpen ? setIsOpen(false) : setIsOpen(true));
  const viewModalNew = () => (isOpenNew ? setIsOpenNew(false) : setIsOpenNew(true));

  const getPermissions = async () => {
    const { data } = await RequestService.get('/permission');
    const { permissions } = data;
    setPermissions(permissions);
    setDataPermissions(permission);
  };

  useEffect(() => {
    getPermissions();
  }, [
    isOpen,
    isOpenNew,
    isActive,
  ]);

  const handleSearch = (keyWord) => {
    const results = dataPermission.filter((item) => item.description === keyWord);
    setPermissions(results);
  };

  const handleActive = (data) => {
    const results = data;
    setIsActive(results);
  };

  return (
    <>
      <Title title='PERMISOS'>
        <ModalButton onClick={() => viewModalNew()} />
      </Title>
      <Search onClick={handleSearch} />
      <InfoContainer>
        <TablePermissions
          permission={permission}
          isOpen={isOpen}
          activation={handleActive}
          viewModal={() => viewModal()}
        />
      </InfoContainer>
      {isOpenNew && (
        <Modal className='ModalContainer'>
          <NewPermission onClick={() => viewModalNew()} />
        </Modal>
      )}
    </>
  );
};

export default Permisos;

{ /* <LineContainer>
<p className='Bold'>Eliminar Facturas</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.edit} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Editar Cotizaciones</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.edit} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Crear Remisiones</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.edit} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Ver Compras</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.edit} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Eliminar Compras</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.edit} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Editar Ordenes de Compra</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.edit} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Crear Usuarios</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.edit} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Crear Facturas</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.edit} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Ver Cotizaciones</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Eliminar Cotizaciones</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Editar Remisiones</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer>
</FormContainer>
<FormContainer>
<LineContainer>
<p className='Bold'>Crear Compras</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Ver Ordenes de Compra</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Eliminar Ordenes de Compra</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Editar Usuarios</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Editar Facturas</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Crear Cotizaciones</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Ver Remisiones</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Eliminar Remisiones</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Editar Compras</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Crear Ordenes de Compra</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Ver Usuarios</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer>
<LineContainer>
<p className='Bold'>Eliminar Usuarios</p>
<div>
  <ToggleOnIcon className={classes.toogle} />
  <EditIcon className={classes.toogle} />
</div>
</LineContainer> */ }
