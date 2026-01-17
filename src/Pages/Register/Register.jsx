import React from "react";
import "./Register.css";
import logoImg from "../../Assets/Logo_Code.png";

import RegisterForm from "./components/RegisterForm";
import SocialRegister from "./components/SocialRegister";

const Register = () => {
  return (
    <div className="register-page-wrapper">
      <div className="form-container">

        {/* HEADER / OUTPUT */}
        <div className="logo-section">
          <img src={logoImg} alt="Logo CodeCatalyst" className="logo" />
          <h2>
            <i className="fa-solid fa-user-plus"></i> Daftar Akun Baru
          </h2>
          <p className="subtitle">
            Bergabunglah dengan CodeCatalyst dan mulai belajar sekarang!
          </p>
        </div>

        {/* FITUR */}
        <RegisterForm />
        <SocialRegister />

      </div>
    </div>
  );
};

export default Register;
