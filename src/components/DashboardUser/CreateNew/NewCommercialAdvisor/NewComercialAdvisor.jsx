import React, { useState, useEffect } from 'react';
import ModalButton from '../../../UsableComponents/Buttons/ModalButton';
import Title from '../../../UsableComponents/Title/Title';
import InfoContainer from '../../../UsableComponents/Containers/InfoContainer';

const NewComercialAdvisor = () => {

  const [isOpenNew, setIsOpenNew] = useState(false);

  const viewModalNew = () => (isOpenNew ? setIsOpenNew(false) : setIsOpenNew(true));

  return (
    <>
      <Title title='NUEVO ASESOR COMERCIAL'>
        <ModalButton
          onClick={() => viewModalNew()}
        />
      </Title>
      <InfoContainer>
        <form className='new__FormContainer'>
          <div className='div2Columnas wrapCaja'>
            <div className='cajaUploadFoto'>
              <div className='upload-photo'>
                Agregar Imagen
              </div>
            </div>
          </div>
          <div className='new__GridContainer'>
            <div className='Form__Column'>
              <div className='new__LineContainer'>
                <p>Nombre*</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Correo*</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Dirección</p>
                <input className='input90' />
              </div>
            </div>
            <div className='Form__Column'>
              <div className='new__LineContainer'>
                <p>Teléfono</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Celular</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Descripcción</p>
                <input className='input90' />
              </div>
            </div>
          </div>
          <div className='new__ButtonContainer'>
            <div className='ButtonContainer'>
              <button type='submit' className='button-1'>Guardar</button>
            </div>
            <div className='ButtonContainer'>
              <button type='submit' className='button-1'>Cancelar</button>
            </div>
          </div>
        </form>
      </InfoContainer>
    </>
  );
};

export default NewComercialAdvisor;
