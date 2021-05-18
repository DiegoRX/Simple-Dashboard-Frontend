import React from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';

const NewPais = ({ onClick }) => {
  return (
    <>
      <Title title='NUEVO PAÍS' />
      <InfoModal>
        <form className='new__FormContainer'>
          <div className='new__LineContainer'>
            <p>Nombre</p>
            <input className='input90' placeholder='Introducir País' />
          </div>
          <div className='new__ButtonContainer'>
            <button type='submit' className='button-save'>Guardar</button>
            <button type='button' className='button-cancel' onClick={onClick}>Cancelar</button>
          </div>
        </form>
      </InfoModal>
    </>
  );
};

export default NewPais;
