import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { loadUser } from '../../actions/auth';

import Instruction from '../../img/instruction.svg';
import Newsletter from '../../img/newsletter.svg';
import Loupe from '../../img/loupe.svg';
import Seo from '../../img/seo.svg';
import Training from '../../img/training.svg';
import Video from '../../img/video-camera.svg';
import Banner from '../../img/Imagem2.jpg';
import Navbar from '../../components/layout/Navbar';

const Dashboard = ({ auth: { isAuthenticated } }) => {
  return (
    <>
      <Navbar />
      <section className='bannerDash'>
        <img src={Banner} alt='' />
      </section>

      <section className='panel'>
        <div className='panelInner'>
          <div>
            <img src={Newsletter} alt='' />
            <h2>Newsletter</h2>
          </div>

          <div>
            <img src={Loupe} alt='' />
            <h2>Oráculo</h2>
          </div>

          <Link to='/apresentacoes'>
            <div>
              <img src={Seo} alt='' />
              <h2>Marketing</h2>
            </div>
          </Link>

          <div>
            <img src={Training} alt='' />
            <h2>Treinamentos</h2>
          </div>

          <Link to='/manuais'>
            <div>
              <img src={Instruction} alt='' />
              <h2>Manuais Evehx</h2>
            </div>
          </Link>

          <div>
            <img src={Video} alt='' />
            <h2>Aulas Online</h2>
          </div>
        </div>
      </section>
    </>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
