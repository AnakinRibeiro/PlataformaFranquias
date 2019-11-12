import React from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import PropTypes from "prop-types";

import Logo from "../../img/LogoEvehx.png";

const Navbar = ({ auth: { user }, logout }) => {
  return (
    <>
      <nav className="navbar">
        <div className="esq">
          <img src={Logo} />

          <h1>
            Seja bem-vindo, <br />
            {user && user.name}
          </h1>

          <button className="show-sm">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <div className="dir">
          <i className="fas fa-bell"></i>

          <div id="divBusca">
            <input type="text" id="txtBusca" placeholder="Pesquisar..." />
            <i class="fas fa-search" id="btnBusca"></i>
          </div>

          <button onClick={logout}>
            <i class="fas fa-door-open hide-i"></i>
            <p>Sair</p>
          </button>
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

export default connect(mapStateToProps, { logout })(Navbar);
