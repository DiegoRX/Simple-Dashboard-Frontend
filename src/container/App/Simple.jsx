import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/simple-logo.png';

const Simple = () => {

  return (
    <section className='admin__container'>
      <section className='login'>
        <img src={logo} alt='logo' className='login__logo' />
        <button type='submit' className='button-1'><Link to='/login' style={{ color: 'white' }}>Iniciar sesión</Link></button>
        <button type='submit' className='button-1'><Link to='/app/Comercios' style={{ color: 'white' }}>Ir a Administrador</Link></button>
        <button type='submit' className='button-1'><Link to='/appComercio/home' style={{ color: 'white' }}>Ir a Comercio</Link></button>
      </section>
    </section>
  );
};

export default Simple;
