import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getApresentacoes } from '../../../actions/apresentacao';

import Navbar from '../../layout/Navbar';
import Seo from '../../../img/seo.svg';

const Apresentacoes = ({
  getApresentacoes,
  apresentacao: { apresentacoes, loading },
  auth: { isAuthenticated }
}) => {
  useEffect(() => {
    getApresentacoes();
  }, [getApresentacoes]);
  return (
    <>
      <Navbar />
      <div className='divisao'></div>
      <section className='bannerTitulo'>
        <div className='bannerTituloInner'>
          <div className='iconeEtitulo'>
            <img src={Seo} alt='' />
            <h1 className='materiaisTit'>Materiais de Marketing</h1>
          </div>

          <div className='opcoes'>
            <h1>Materiais Gráficos</h1>
            <span>|</span>
            <h1>Apresentações</h1>
          </div>
        </div>
      </section>

      <section className='apresentacoes'>
        <div className='novaApresentacao'>
          <Link to='/dashboard'>
            <button className='btn-novoManual'>
              <i className='fas fa-arrow-left'></i>
            </button>
          </Link>

          <Link to='/apresentacoes-upload'>
            <button className='btn-novoManual'>
              <i className='fas fa-plus'></i>
            </button>
          </Link>
        </div>
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
      </section>
    </>
  );
};

Apresentacoes.propTypes = {
  getApresentacoes: PropTypes.func.isRequired,
  apresentacao: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  apresentacao: state.apresentacao,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getApresentacoes }
)(Apresentacoes);
