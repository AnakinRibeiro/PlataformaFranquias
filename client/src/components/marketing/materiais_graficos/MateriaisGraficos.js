import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../layout/Navbar';
import Seo from '../../../img/seo.svg';

const MateriaisGraficos = () => {
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
            <h1 className='mg'>Materiais Gráficos</h1>

            <span>|</span>
            <Link to='/apresentacoes'>
              <h1 className='bg'>Apresentações</h1>
            </Link>
          </div>

          <Link to='/apresentacoes-upload'>
            <button className='btn-novoManual'>
              <i className='fas fa-plus fa-2x'></i>
            </button>
          </Link>
        </div>
      </section>

      <section className='materiais'>
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
