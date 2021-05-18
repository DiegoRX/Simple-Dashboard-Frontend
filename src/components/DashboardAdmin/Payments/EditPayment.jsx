import React, { useState, useEffect } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';
import { success, rejected } from '../../../functions/SweetAlert/Alerts';

const EditPayment = ({ onClick, row }) => {

  const [payment, setPayment] = useState({});

  useEffect(() => {
    setPayment(row);
  }, [row]);

  const [body, setValues] = useState({
    plazo: row.plazo,
    type: row.type,
  });

  const handleChange = (event) => {
    setValues({
      ...body,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await RequestService.put(`/payment/${payment.id}`, body);
    console.log(res);
    if (res.status === 201) {
      success('Medio de Pago Editado');
      onClick();
    } else if (res.status === 400) {
      rejected();
    };
  };

  return (
    <>
      <Title title='EDITAR FORMA DE PAGO' />
      <InfoModal>
        <form className='edit__FormContainer' onSubmit={handleSubmit}>
          <div className='new__LineContainer'>
            <p>Seleccione la forma</p>
            <select
              name='tye'
              className='inputDrop90'
              onChange={(e) => handleChange(e)}
              defaultValue={row.tye}
            >
              <option value='X'>Seleccione la Forma de Pago</option>
              <option value='CONTADO'>Contado</option>
              <option value='CREDITO'>Crédito</option>
            </select>
          </div>
          <div className='edit__LineContainer'>
            <p>Días de plazo</p>
            <input
              name='plazo'
              className='input90'
              value={body.plazo}
              onChange={(e) => handleChange(e)}
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

export default EditPayment;
