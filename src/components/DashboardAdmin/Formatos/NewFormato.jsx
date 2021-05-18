import React from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';

const NewFormato = ({ onClick }) => {

  const newFormato = async () => {
    const body = {
      'code': '0035a8885',
      'description': 'Carta',
    };
    const { data } = await RequestService.put('/permission', body);
    console.log({ data });
  };

  return (
    <>
      <Title title='NUEVO FORMATO DE IMPRESIÓN' />
      <InfoModal>
        <form className='new__FormContainer'>
          <div className='new__LineContainer'>
            <p>Nombre</p>
            <input className='input90' placeholder='Introducir Nombre' />
          </div>
          <div className='new__LineContainer'>
            <p>Superior</p>
            <input className='input90' placeholder='Margen Superior' />
          </div>
          <div className='new__LineContainer'>
            <p>Derecha</p>
            <input className='input90' placeholder='Margen Derecha' />
          </div>
          <div className='new__LineContainer'>
            <p>Izquierda</p>
            <input className='input90' placeholder='Margen Izquierda' />
          </div>
          <div className='new__ButtonContainer'>
            <button
              type='submit'
              // onClick={editUnit}
              className='button-save'
            >
              Guardar
            </button>
            <button
              type='submit'
              className='button-cancel'
              onClick={onClick}
            >
              Cancelar
            </button>
          </div>
        </form>
      </InfoModal>
    </>
  );
};

export default NewFormato;
