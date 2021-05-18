import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { singInUserEmail } from '../../services/firebase/auth';
import logo from '../../images/simple-logo.png';
import userLogin from '../../images/user-login.png';
import iconGoogle from '../../images/google-ico.png';
import iconFacebook from '../../images/facebook-ico.png';

const Login = (props) => {
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
    console.log(form);
    event.preventDefault();
    singInUserEmail(form.email, form.password);
    props.history.push('/app/comercios');
  };
  return (
    <section className='admin__container'>
      <section className='login'>
        <img src={logo} alt='logo' className='login__logo' />
        <section className='login__container'>
          <img src={userLogin} alt='userLogin' className='login__container--img' />
          <h2 className='login__title'>Inicia sesión</h2>
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
            />
            <button type='submit' className='button-1'><Link to='/app/Comercios' style={{ color: 'white' }}>Iniciar sesión</Link></button>
          </form>
          <section className='login__container--social-media'>
            <div className='login__container--social-media-title'>Inicia sesión con:</div>
            <div>
              <img src={iconGoogle} alt='Google' className='login__container--social-media-google' />
              <img src={iconFacebook} alt='Facebook' />
            </div>
          </section>
          <button type='submit' className='button-2'><Link to='/registro' style={{ color: 'white' }}>Regístrate</Link></button>
          <div className='login__container--remember-me'>
            <label>
              <Link to='/RememberPassword'>Olvidé mi contraseña</Link>
            </label>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Login;
