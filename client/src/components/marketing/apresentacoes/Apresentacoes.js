import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getApresentacoes } from "../../../actions/apresentacao";

import Navbar from "../../layout/Navbar";
import Seo from "../../../img/seo.svg";

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
      <div className="divisao"></div>
      <section className="bannerTitulo2">
        <div id="esq">
          <Link to="/dashboard">
            <button className="btn-novoManual">
              <i className="fas fa-arrow-left fa-2x"></i>
            </button>
          </Link>
          <div>
            <img src={Seo} alt="" />
            <h1 className="materiaisTit">
              Materiais de <br />
              Marketing
            </h1>
          </div>
        </div>

        <div id="dir">
          <div>
            <Link to="/materiais-graficos">
              <h1>Materiais Gráficos</h1>
            </Link>
            <span>|</span>
            <h1 className="mg">Apresentações</h1>
          </div>

          <Link to="/dashboard">
            <button className="btn-novoManual">
              <i className="fas fa-plus fa-2x"></i>
            </button>
          </Link>
        </div>
      </section>

      <section className="main">
        <div className="apresentacoesInner">
          {apresentacoes.map(apresentacao => (
            <a href={apresentacao.path} key={apresentacao._id} download>
              <div className="apresentacao">
                {apresentacao.name}
                <i className="fas fa-download"></i>
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

export default connect(mapStateToProps, { getApresentacoes })(Apresentacoes);
