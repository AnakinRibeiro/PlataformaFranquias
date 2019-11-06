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
    </>
  );
};

export default MateriaisGraficos;
