import React from 'react';
import Title from '../../../UsableComponents/Title/Title';
import InfoContainer from '../../../UsableComponents/Containers/InfoContainer';

const Membership = () => {

  return (
    <>
      <Title title='NUESTROS PLANES' />
      <InfoContainer>
        <div className='price-table filaTop wrapCaja'>
          <div className='ColPlanes price-column plan1'>
            <h3 className='plan1_background'>Emprendedor</h3>
            <ul className='list'>
              <li>
                <p>Mes</p>
                <p className='price'>$60,000</p>
              </li>
              <li>
                <p>
                  <strong>2 </strong>
                  Usuarios
                </p>
              </li>
              <li>

                <p>
                  <strong>100 facturas </strong>
                  Mensuales
                </p>
              </li>
              <li>
                <p>
                  Soporte por
                  <strong> chat</strong>
                </p>
              </li>
              <li>
                <p>
                  <strong>Acceso </strong>
                  al portal de entrenamiento
                </p>
              </li>
            </ul>
            <button type='button' className='button-cancel'>
              Comprar
            </button>
          </div>
          <div className='ColPlanes price-column plan1'>
            <h3 className='plan2_background'>NEGOCIOS</h3>
            <ul className='list'>
              <li>
                <p>Mes</p>
                <p className='price'>$90,000</p>
              </li>
              <li>
                <p>
                  <strong>4 </strong>
                  Usuarios
                </p>
              </li>
              <li>

                <p>
                  <strong>250 facturas </strong>
                  Mensuales
                </p>
              </li>
              <li>
                <p>
                  Soporte por
                  <strong> chat</strong>
                </p>
              </li>
              <li>
                <p>
                  <strong>Acceso </strong>
                  al portal de entrenamiento
                </p>
              </li>
            </ul>
            <button type='button' className='button-cancel'>
              Comprar
            </button>
          </div>
          <div className='ColPlanes price-column plan1'>
            <h3 className='plan3_background'>PRO</h3>
            <ul className='list'>
              <li>
                <p>Mes</p>
                <p className='price'>$180,000</p>
              </li>
              <li>
                <p>
                  <strong>5 </strong>
                  Usuarios
                </p>
              </li>
              <li>

                <p>
                  <strong>500 facturas </strong>
                  Mensuales
                </p>
              </li>
              <li>
                <p>
                  Soporte por
                  <strong> chat</strong>
                </p>
              </li>
              <li>
                <p>
                  <strong>Acceso </strong>
                  al portal de entrenamiento
                </p>
              </li>
            </ul>
            <button type='button' className='button-cancel'>
              Comprar
            </button>
          </div>
        </div>
      </InfoContainer>
    </>
  );
};

export default Membership;
