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
      <section className='fullPage'>
        <div className='banner'></div>

        <div className='formCadastro'>
          <div className='formCadastroInner'>
            <div className='titulo'>
              <img src={Logo} alt='' className='logoIcon show-sm' />
              <h1>
                Bem vindo novamente!
                <br />
                Faça login na sua conta
              </h1>
            </div>

            <div className='formOut'>
              <Alert />
              <form className='form' onSubmit={e => onSubmit(e)}>
                <div className='inputGroup'>
                  <label htmlFor=''>E-mail</label>
                  <input
                    type='email'
                    placeholder='Digite seu e-mail'
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>

                <div className='inputGroup'>
                  <label htmlFor=''>Senha</label>
                  <input
                    type='password'
                    placeholder='Digite sua senha'
                    name='password'
                    value={password}
                    onChange={e => onChange(e)}
                    minLength='6'
                  />
                </div>

                <div className='inputGroupC'>
                  <input type='checkbox' />
                  <label htmlFor=''>Mantenha-me Conectado</label>
                </div>
                <br />

                <div className='dvBtn'>
                  <button type='submit'>LOGIN</button>
                </div>
              </form>

              <p>
                Ainda não tem uma conta? <span>Inscreva-se</span>
              </p>
            </div>
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
