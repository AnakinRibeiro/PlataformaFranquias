import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getManuais } from '../../actions/manual';
import { Link } from 'react-router-dom';

import Navbar from '../../components/layout/Navbar';
import Instruction from '../../img/instruction.svg';

const Manuais = ({
  getManuais,
  manual: { manuais, loading },
  auth: { isAuthenticated }
}) => {
  useEffect(() => {
    getManuais();
  }, [getManuais]);

  return (
    <>
      <Navbar />
      <div className='divisao'></div>
      <section className='bannerTitulo'>
        <div>
          <img src={Instruction} alt='' />
          <h1>
            Manuais <br />
            Evehx
          </h1>
        </div>
      </section>

      <section className='pdfs'>
        <div className='novoManual'>
          <Link to='/dashboard'>
            <button className='btn-novoManual'>
              <i class='fas fa-arrow-left'></i>
            </button>
          </Link>

          <Link to='/manuais-upload'>
            <button className='btn-novoManual'>
              <i class='fas fa-plus'></i>
            </button>
          </Link>
        </div>
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
      </section>
    </>
  );
};

Manuais.propTypes = {
  getManuais: PropTypes.func.isRequired,
  manual: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  manual: state.manual,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getManuais }
)(Manuais);
