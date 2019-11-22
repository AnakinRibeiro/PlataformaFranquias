import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getApresentacoes } from '../../../actions/apresentacao';
import { addApresentacao } from '../../../actions/apresentacao';
import { Button, Modal } from 'react-bootstrap';

import Navbar from '../../layout/Navbar';
import Seo from '../../../img/seo.svg';

const Apresentacoes = ({
  getApresentacoes,
  addApresentacao,
  apresentacao: { apresentacoes, loading }
}) => {
  useEffect(() => {
    getApresentacoes();
  }, [getApresentacoes]);

  const [nameData, setNameData] = useState({
    name: ''
  });

  const [file, setFile] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.reload(false);
  };
  const handleShow = () => setShow(true);

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
          <Link to='/dashboard'>
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
              <h4>Materiais Gráficos</h4>
            </Link>
            <span>|</span>
            <h4 className='mg'>Apresentações</h4>
          </div>

          <button className='btn-novoManual' onClick={handleShow}>
            <i className='fas fa-plus fa-2x'></i>
          </button>
        </div>
      </section>

      <section className='main'>
        <div className='apresentacoesInner'>
          {apresentacoes.map(apresentacao => (
            <a href={apresentacao.path} key={apresentacao._id} download>
              <div className='apresentacao'>
                {apresentacao.name}
                <i className='fas fa-download'></i>
              </div>
            </a>
          ))}
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Nova Apresentação</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <section className='main'>
              <div className='pdfUpload'>
                <form onSubmit={onSubmit}>
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
          </Modal.Body>
          <Modal.Footer>
            <Button
              onClick={handleClose}
              variant='secondary'
              className='btnFechar'
            >
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
};

Apresentacoes.propTypes = {
  getApresentacoes: PropTypes.func.isRequired,
  apresentacao: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addApresentacao: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  apresentacao: state.apresentacao,
  auth: state.auth
});

export default connect(mapStateToProps, { getApresentacoes, addApresentacao })(
  Apresentacoes
);
