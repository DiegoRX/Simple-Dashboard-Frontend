import React, { useState } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';
import { success, rejected } from '../../../functions/SweetAlert/Alerts';

const NewPayment = ({ onClick }) => {

  const [body, setValues] = useState({
    type: '',
    plazo: '',
  });

  const handleChange = (event) => {
    setValues({
      ...body,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await RequestService.post('/payment', body);
    if (res.status === 201) {
      success('Medio de Pago Creado');
      onClick();
    } else if (res.status === 400) {
      rejected();
    };
  };

  return (
    <>
      <Title title='NUEVA FORMA DE PAGO' />
      <InfoModal>
        <form className='new__FormContainer' onSubmit={handleSubmit}>
          <div className='new__LineContainer'>
            <p>Seleccione la forma</p>
            <select
              name='type'
              className='inputDrop90'
              onChange={(e) => handleChange(e)}
            >
              <option value='X'>Seleccione la Forma de Pago</option>
              <option value='CONTADO'>Contado</option>
              <option value='CREDITO'>Crédito</option>
            </select>
          </div>
          <div className='new__LineContainer'>
            <p>Introduzca los días de plazo</p>
            <input
              name='plazo'
              className='input90'
              placeholder='Plazo en Días'
              onChange={handleChange}
            />
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

export default NewPayment;
