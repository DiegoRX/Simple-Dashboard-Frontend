import React, { useState } from 'react';
// import Recaptcha from 'react-recaptcha';
import { Link } from 'react-router-dom';
import logo from '../../images/simple-logo.png';
import userLogin from '../../images/user-login.png';
// import { createUserRegister } from '../../services/firebase/auth';
import iconGoogle from '../../images/google-ico.png';
import iconFacebook from '../../images/facebook-ico.png';

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
  //   // specifying your onload callback function
  // const callback = function () {
  //   console.log('Done!!!!');
  // };

  // // specifying verify callback function
  // const verifyCallback = function (response) {
  //   console.log(response);
  // };
  return (
    <section className='admin__container'>
      <section className='login'>
        <img src={logo} alt='logo' className='login__logo' />
        <section className='login__container'>
          <img src={userLogin} alt='userLogin' className='login__container--img' />
          <h2 className='login__title'>Registro</h2>
          <form onSubmit={handleSubmit} className='login__container--form'>
            <input
              name='email'
              className='input'
              type='email'
              placeholder='Email'
              onChange={handleInput}
              required

            />
            <input
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
              required
              minLength='6'
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
            <button type='submit' className='button-1'>Registrarme</button>
          </form>
          <button type='submit' className='button-2'><Link to='/' style={{ color: 'white' }}>Inicia sesión</Link></button>
          <section className='login__container--social-media'>
            <div className='login__container--social-media-title'>Regístrate con:</div>
            <div>
              <img src={iconGoogle} alt='Google' />
              <img src={iconFacebook} alt='Facebook' />
            </div>
          </section>
          <p className='login__container--register-text'>
            Al registrarte aceptas nuestra política de
            <br />
            privacidad y nuestros terminos & condiciones
          </p>
        </section>
      </section>
    </section>

  );
};

export default Registro;
