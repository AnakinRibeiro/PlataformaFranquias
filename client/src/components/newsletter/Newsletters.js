import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getManuais } from '../../actions/manual';
import { Link } from 'react-router-dom';

import Navbar from '../../components/layout/Navbar';
import Newsletter from '../../img/newsletter.svg';
import { Button, Modal } from 'react-bootstrap';
import { addManual } from '../../actions/manual';

export const Newsletters = () => {
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
          <img src={Newsletter} alt='' />
          <h1>Newsletter</h1>
        </div>
        <div id='dir'>
          <button className='btn-novoManual'>
            <i className='fas fa-plus fa-2x'></i>
          </button>
        </div>
      </section>

      <section className='mainMes'>
        <div className='mesesInner'>
          <div className='mes'>
            <h1>Janeiro</h1>
          </div>

          <div className='mes'>
            <h1>Fevereiro</h1>
          </div>

          <div className='mes'>
            <h1>Março</h1>
          </div>

          <div className='mes'>
            <h1>Abril</h1>
          </div>

          <div className='mes'>
            <h1>Maio</h1>
          </div>

          <div className='mes'>
            <h1>Junho</h1>
          </div>

          <div className='mes'>
            <h1>Julho</h1>
          </div>

          <div className='mes'>
            <h1>Agosto</h1>
          </div>

          <div className='mes'>
            <h1>Setembro</h1>
          </div>

          <div className='mes'>
            <h1>Outubro</h1>
          </div>

          <div className='mes'>
            <h1>Novembro</h1>
          </div>

          <div className='mes'>
            <h1>Dezembro</h1>
          </div>
        </div>
      </section>
    </>
  );
};
