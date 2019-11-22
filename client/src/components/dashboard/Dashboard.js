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
            <h3>Newsletter</h3>
          </div>

          <div>
            <img src={Loupe} alt='' />
            <h3>Oráculo</h3>
          </div>

          <Link to='/apresentacoes'>
            <div>
              <img src={Seo} alt='' />
              <h3>Marketing</h3>
            </div>
          </Link>

          <div>
            <img src={Training} alt='' />
            <h3>Treinamentos</h3>
          </div>

          <Link to='/manuais'>
            <div>
              <img src={Instruction} alt='' />
              <h3>Manuais Evehx</h3>
            </div>
          </Link>

          <div>
            <img src={Video} alt='' />
            <h3>Aulas Online</h3>
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
