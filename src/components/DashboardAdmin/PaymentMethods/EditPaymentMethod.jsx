import React, { useState, useEffect } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';
import { success, rejected } from '../../../functions/SweetAlert/Alerts';

const EditPaymentMethod = ({ onClick, row }) => {

  const [paymentMethod, setPaymentMethod] = useState({});

  useEffect(() => {
    setPaymentMethod(row);
  }, [row]);

  const [body, setValues] = useState({
    name: row.name,
  });

  const handleChange = (event) => {
    setValues({
      ...body,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await RequestService.put(`/payment-methods/${paymentMethod.id}`, body);
    console.log(res);
    if (res.status === 201) {
      success('Método de Pago Editado');
      onClick();
    } else if (res.status === 400) {
      rejected();
    };
  };
  return (
    <>
      <Title title='EDITAR MEDIO DE PAGO' />
      <InfoModal>
        <form className='edit__FormContainer' onSubmit={handleSubmit}>
          <div className='edit__LineContainer'>
            <p>Nombre</p>
            <input
              name='name'
              className='input90'
              value={body.name}
              onChange={handleChange}
            />
          </div>
          <div className='edit__ButtonContainer'>
            <button
              type='submit'
              className='button-save'
            >
              Guardar
            </button>
            <button
              type='button'
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

export default EditPaymentMethod;
