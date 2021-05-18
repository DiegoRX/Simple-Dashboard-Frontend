import React from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';

const EditFormato = ({ onClick }) => {

  const editUnit = async () => {
    const body = {
      'code': '0035a8885',
      'description': 'Crear facturas',
    };
    const { data } = await RequestService.post('/permission/', body);
    console.log({ data });
  };

  return (
    <>
      <Title title='AGREGAR FORMATO DE IMPRESIÓN' />
      <InfoModal>
        <form className='edit__FormContainer'>
          <div className='edit__LineContainer'>
            <p>Nombre</p>
            <input className='input90' placeholder='Introducir Nombre' />
          </div>
          <div className='edit__LineContainer'>
            <p>Superior</p>
            <input className='input90' placeholder='Margen Superior' />
          </div>
          <div className='edit__LineContainer'>
            <p>Derecha</p>
            <input className='input90' placeholder='Margen Derecha' />
          </div>
          <div className='edit__LineContainer'>
            <p>Izquierda</p>
            <input className='input90' placeholder='Margen Izquierda' />
          </div>
          <div className='edit__ButtonContainer'>
            <button
              type='submit'
              onClick={editUnit}
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

export default EditFormato;
