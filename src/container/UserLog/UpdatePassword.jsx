import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/simple-logo.png';
import userLogin from '../../images/user-login.png';
import { createUserRegister } from '../../services/firebase/auth';

const Registro = (props) => {
  const [form, setValues] = useState({
    email: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserRegister(form.email, form.password);
    props.history.push('/landingPage');
  };
  return (
    <section className='admin__container'>
      <section className='login'>
        <img src={logo} alt='logo' className='login__logo' />
        <section className='login__container'>
          <img src={userLogin} alt='userLogin' className='login__container--img' />
          <h2 className='login__title--remember-me'>Cambiar contraseña</h2>
          <form onSubmit={handleSubmit} className='login__container--form'>
            <input
              name='email'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
              required
            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Confirmar contraseña'
              onChange={handleInput}
              required
              minLength='6'
            />
            <button type='submit' className='button-1'>Confirmar</button>
          </form>
          <button type='submit' className='button-2'><Link to='/' style={{ color: 'white' }}>Inicia sesión</Link></button>
        </section>
      </section>
    </section>
  );
};

export default Registro;
