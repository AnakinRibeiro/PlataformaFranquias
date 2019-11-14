import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addApresentacao } from '../../../actions/apresentacao';

import Navbar from '../../layout/Navbar';
import Seo from '../../../img/seo.svg';

import Alert from '../../layout/Alert';

const ApresentacoesUpload = ({ addApresentacao }) => {
  const [nameData, setNameData] = useState({
    name: ''
  });
  const [file, setFile] = useState({});

  const { name } = nameData;

  const onChangeName = e =>
    setNameData({ ...nameData, [e.target.name]: e.target.value });

  const onChangeFile = e => setFile(e.target.files[0]);

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('file', file);

    addApresentacao(formData);
  };

  return (
    <>
      <Navbar />
      <div className='divisao'></div>
      <section className='bannerTitulo2'>
        <div id='esq'>
          <Link to='/apresentacoes'>
            <button className='btn-novoManual'>
              <i className='fas fa-arrow-left fa-2x'></i>
            </button>
          </Link>
          <div>
            <img src={Seo} alt='' />
            <h1 className='materiaisTit'>
              Materiais de <br />
              Marketing
            </h1>
          </div>
        </div>

        <div id='dir'>
          <div>
            <Link to='/materiais-graficos'>
              <h1>Materiais Gráficos</h1>
            </Link>
            <span>|</span>
            <h1 className='mg'>Apresentações</h1>
          </div>
        </div>
      </section>

      <section className='main'>
        <div className='pdfUpload'>
          <form onSubmit={onSubmit}>
            <Alert />
            <label htmlFor='name'>Nome do arquivo:</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={e => onChangeName(e)}
            />{' '}
            <br />
            <input
              type='file'
              className='inserirFile'
              onChange={onChangeFile}
            />
            <br />
            <input type='submit' value='Upload' className='btnUpload' />
          </form>
        </div>
      </section>
    </>
  );
};

ApresentacoesUpload.propTypes = {
  addApresentacao: PropTypes.func.isRequired
};

export default connect(null, { addApresentacao })(ApresentacoesUpload);
