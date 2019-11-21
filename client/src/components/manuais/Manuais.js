import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getManuais } from '../../actions/manual';
import { Link } from 'react-router-dom';

import Navbar from '../../components/layout/Navbar';
import Instruction from '../../img/instruction.svg';
import { Button, Modal } from 'react-bootstrap';
import { addManual } from '../../actions/manual';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Manuais = ({
  getManuais,
  addManual,
  manual: { manuais, loading },
  auth: { isAuthenticated }
}) => {
  useEffect(() => {
    getManuais();
  }, [getManuais]);

  const [show, setShow] = useState(false);
  const [file, setFile] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onChange = e => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    addManual(formData);
  };

  return (
    <>
      <Navbar />
      <div className='divisao'></div>
      <section className='bannerTitulo'>
        <div id='esq'>
          <Link to='/dashboard'>
            <button className='btn-novoManual'>
              <i className='fas fa-arrow-left fa-2x'></i>
            </button>
          </Link>
        </div>
        <div id='meio'>
          <img src={Instruction} alt='' />
          <h1>
            Manuais <br />
            Evehx
          </h1>
        </div>
        <div id='dir'>
          <button className='btn-novoManual' onClick={handleShow}>
            <i className='fas fa-plus fa-2x'></i>
          </button>
        </div>
      </section>

      <section className='main'>
        <div className='pdfsInner'>
          {manuais.map(manual => (
            <div className='pdf' key={manual._id}>
              <i className='fas fa-file-pdf fa-4x'></i>
              <a href={manual.path} download>
                <div className='bot'>
                  {manual.name} <i className='fas fa-download'></i>
                </div>
              </a>
            </div>
          ))}
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Novo Manual</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <section className='main'>
              <div className='pdfUpload'>
                <form onSubmit={onSubmit}>
                  <input
                    type='file'
                    className='inserirFile'
                    onChange={onChange}
                  />
                  <br />
                  <input type='submit' value='Upload' className='btnUpload' />
                </form>
              </div>
            </section>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={handleClose}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
};

Manuais.propTypes = {
  getManuais: PropTypes.func.isRequired,
  manual: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addManual: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  manual: state.manual,
  auth: state.auth
});

export default connect(mapStateToProps, { getManuais, addManual })(Manuais);
