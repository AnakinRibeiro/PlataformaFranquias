import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../layout/Navbar';
import Seo from '../../../img/seo.svg';

const MateriaisGraficos = () => {
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
            <Link to='/materiais-graficos'>
              <h1 className='mg'>Materiais Gráficos</h1>
            </Link>
            <span>|</span>
            <Link to='/apresentacoes'>
              <h1>Apresentações</h1>
            </Link>
          </div>
        </div>
      </section>

      <section className='materiais'>
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
        <div className='materialInner'>
          <div className='material'>
            Folha Timbrada
            <i className='fas fa-download'></i>
          </div>
          <div className='material'>
            Manual da Marca
            <i className='fas fa-download'></i>
          </div>
          <div className='material'>
            Datas Comemorativas
            <i className='fas fa-download'></i>
          </div>

          <div className='material'>
            Carimbo Estrutura
            <i className='fas fa-download'></i>
          </div>
          <div className='material'>
            Placa de Obra
            <i className='fas fa-download'></i>
          </div>
          <div className='material'>
            Logotipo
            <i className='fas fa-download'></i>
          </div>

          <div className='material'>
            Wallpaper
            <i className='fas fa-download'></i>
          </div>
          <div className='material'>
            Folder
            <i className='fas fa-download'></i>
          </div>
          <div className='material'>
            Camisetas
            <i className='fas fa-download'></i>
          </div>

          <div className='material'>
            Catálogo
            <i className='fas fa-download'></i>
          </div>
          <div className='material'>
            Certificações
            <i className='fas fa-download'></i>
          </div>
          <div className='material'>
            Pasta
            <i className='fas fa-download'></i>
          </div>

          <div className='material'>
            Envelope
            <i className='fas fa-download'></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default MateriaisGraficos;
