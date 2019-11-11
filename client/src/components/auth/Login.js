import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

import Logo from '../../img/icon.png';
import Alert from '../layout/Alert';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <section id='fullPage'>
        <div id='left'></div>

        <div id='right'>
          <div id='signin'>
            <div id='titulo'>
              <h1>
                Bem vindo novamente!
                <br />
                Faça login na sua conta
              </h1>
            </div>
            <form onSubmit={e => onSubmit(e)}>
              <div>
                <label>E-mail:</label>
                <input
                  type='email'
                  placeholder='Digite seu e-mail'
                  name='email'
                  value={email}
                  onChange={e => onChange(e)}
                  required
                  className='text-input'
                />
              </div>
              <div>
                <label>Senha:</label>
                <input
                  type='password'
                  placeholder='Digite sua senha'
                  name='password'
                  value={password}
                  onChange={e => onChange(e)}
                  minLength='6'
                  className='text-input'
                />
              </div>
              <div id='check'>
                <input type='checkbox' />
                <label htmlFor=''>Mantenha-me Conectado</label>
              </div>
              <div id='botao'>
                <button type='submit' className='primary-btn'>
                  Entrar
                </button>
              </div>
            </form>

            <footer id='main-footer'>
              Ainda não tem uma conta? <span>Inscreva-se</span>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
