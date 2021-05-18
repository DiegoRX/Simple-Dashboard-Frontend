import React, { useState } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';
import { success, rejected } from '../../../functions/SweetAlert/Alerts';

const NewPaymentMethod = ({ onClick }) => {

  const [body, setValues] = useState({
    name: '',
  });

  const handleChange = (event) => {
    setValues({
      ...body,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await RequestService.post('/payment-methods', body);
    if (res.status === 201) {
      success('Método de Pago Creado');
      onClick();
    } else if (res.status === 400) {
      rejected();
    };
  };

  return (
    <>
      <Title title='NUEVO MEDIO DE PAGO' />
      <InfoModal>
        <form className='new__FormContainer' onSubmit={handleSubmit}>
          <div className='new__LineContainer'>
            <p>Nombre</p>
            <select
              name='name'
              className='inputDrop90'
              onChange={(e) => handleChange(e)}
            >
              <option value='X'>Seleccione el Método de Pago</option>
              <option value='EFECTIVO'>Efectivo</option>
              <option value='TARJETA_DEBITO'>Tarjeta Débito</option>
              <option value='TARJETA_CREDITO'>Tarjeta Crédito</option>
              <option value='CONSIGNACION'>Consignación</option>
            </select>
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

export default NewPaymentMethod;
