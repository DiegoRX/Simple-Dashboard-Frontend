import React, { useState, useEffect } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoModal from '../../UsableComponents/Containers/InfoModalContainer';
import RequestService from '../../../config';
import { success, rejected } from '../../../functions/SweetAlert/Alerts';

const EditAdmin = ({ onClick, row }) => {

  const [Admin, setAdmin] = useState({});

  useEffect(() => {
    setAdmin(row);
  }, [row]);

  const [body, setValues] = useState({
    email: row.email,
    firstName: row.firstName,
  });

  const handleChange = (event) => {
    setValues({
      ...body,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await RequestService.put(`/user/${Admin.id}`, body);
    if (res.status === 201) {
      success('Administrador Editado');
      onClick();
    } else if (res.status === 400) {
      rejected();
      // onClick();
    };
  };

  return (
    <>
      <Title title='EDITAR ADMINISTRADOR' />
      <InfoModal>
        <form className='edit__FormContainer' onSubmit={handleSubmit}>
          <div className='edit__LineContainer'>
            <p>Nombre</p>
            <input
              name='firstName'
              className='input90'
              value={body.firstName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='edit__LineContainer'>
            <p>Email</p>
            <input
              name='email'
              // type='email'
              className='input90'
              value={body.email}
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

export default EditAdmin;
