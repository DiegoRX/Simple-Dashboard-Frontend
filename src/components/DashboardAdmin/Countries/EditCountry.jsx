import React from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';

const EditCountry = ({ onClick }) => {

  const editCountry = async () => {
    const body = {
      'code': '0035a8885',
      'description': 'Crear facturas',
    };
    const { data } = await RequestService.post('/Country/', body);
    console.log({ data });
  };

  return (
    <>
      <Title title='EDITAR PAÍS' />
      <InfoModal>
        <form className='edit__FormContainer'>
          <div className='edit__LineContainer'>
            <p>Nombre</p>
            <input className='input90' placeholder='Introducir País' />
          </div>
          <div className='edit__ButtonContainer'>
            <button type='submit' onClick={editCountry} className='button-save'>Guardar</button>
            <button type='button' className='button-cancel' onClick={onClick}>Cancelar</button>
          </div>
        </form>
      </InfoModal>
    </>
  );
};

export default EditCountry;
