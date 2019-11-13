import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addManual } from "../../actions/manual";
import { Link } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Instruction from "../../img/instruction.svg";
import Alert from "../layout/Alert";

const ManuaisUpload = ({ addManual }) => {
  const [file, setFile] = useState({});

  const onChange = e => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    addManual(formData);
  };

  return (
    <>
      <Navbar />
      <div className="divisao"></div>
      <section className="bannerTitulo">
        <div id="esq">
          <Link to="/dashboard">
            <button className="btn-novoManual">
              <i className="fas fa-arrow-left fa-2x"></i>
            </button>
          </Link>
        </div>
        <div id="meio">
          <img src={Instruction} alt="" />
          <h1>
            Manuais <br />
            Evehx
          </h1>
        </div>
        <div id="dir">
          <Link to="/manuais-upload">
            <button className="btn-novoManual">
              <i className="fas fa-plus fa-2x"></i>
            </button>
          </Link>
        </div>
      </section>

      <section className="main">
        <div className="pdfUpload">
          <form onSubmit={onSubmit}>
            <Alert />
            <input type="file" className="inserirFile" onChange={onChange} />
            <br />
            <input type="submit" value="Upload" className="btnUpload" />
          </form>
        </div>
      </section>
    </>
  );
};

ManuaisUpload.propTypes = {
  addManual: PropTypes.func.isRequired
};

export default connect(null, { addManual })(ManuaisUpload);
