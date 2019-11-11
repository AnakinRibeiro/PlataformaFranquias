import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

import Logo from '../../img/LogoEvehx.png';

const Navbar = ({ auth: { user }, logout }) => {
  return (
    <>
      <nav className='navbar'>
        <div className='navInner'>
          <div className='esq'>
            <img src={Logo} />

            <h1>
              Seja bem-vindo, <br />
              {user && user.name}
            </h1>

            <button className='show-sm'>
              <i className='fas fa-bars fa-2x'></i>
            </button>
          </div>

          <div className='dir'>
            <i className='fas fa-bell'></i>

            <form action='#'>
              <input type='text' placeholder='Pesquisar...' />
              <button type='submit' className='form-control submit'>
                <i className='fas fa-search'></i>
              </button>
            </form>

            <button className='logout' onClick={logout}>
              <i className='fas fa-door-open'></i>
              <span>Sair</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
