import React, { useState, useEffect } from 'react';
import ModalButton from '../../../UsableComponents/Buttons/ModalButton';
import Title from '../../../UsableComponents/Title/Title';
import InfoContainer from '../../../UsableComponents/Containers/InfoContainer';

const NewProductService = () => {

  const [isOpenNew, setIsOpenNew] = useState(false);

  const viewModalNew = () => (isOpenNew ? setIsOpenNew(false) : setIsOpenNew(true));

  return (
    <>
      <Title title='NUEVO PRODUCTO/SERVICIO'>
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
                <p>Tipo</p>
                <select className='inputDrop90'>
                  <option>Producto</option>
                  <option>Servicio</option>
                </select>
              </div>
              <div className='new__LineContainer'>
                <p>Categoría</p>
                <select className='inputDrop90'>
                  <option>Seleccione una categoría</option>
                  <option>Software</option>
                </select>
              </div>
              <div className='new__LineContainer'>
                <p>Nombre*</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Referencia*</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Descripcción</p>
                <input className='input90' />
              </div>
            </div>
            <div className='Form__Column'>
              <div className='new__LineContainer'>
                <p>Precio Compra*</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Precio Venta*</p>
                <input className='input90' />
              </div>
              <div className='new__LineContainer'>
                <p>Impuesto</p>
                <select className='inputDrop90'>
                  <option>IVA</option>
                  <option>NACIONAL</option>
                </select>
              </div>
              <div className='new__LineContainer'>
                <p>Unidad de Medida</p>
                <select className='inputDrop90'>
                  <option>Seleccione una unidad de medida</option>
                </select>
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

export default NewProductService;
