import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { loginWithGoogle } from "../../auth/socialAuth";
import "./Login.css";
import logoImg from "../../Assets/Logo_Code.png";

import LoginForm from "./components/LoginForm";
import SocialLogin from "./components/SocialLogin";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.trim() || !form.password.trim()) {
      alert("Harap isi email dan password terlebih dahulu.");
      return;
    }
    setUser({ name: null, email: form.email });
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      setUser({
        name: user.displayName || null,
        email: user.email || null,
      });
      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } catch {
      alert("Login dengan Google gagal.");
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="form-container">
        <div className="logo-section">
          <img src={logoImg} alt="Logo CodeCatalyst" className="logo" />
          <h2>
            <i className="fa-solid fa-right-to-bracket"></i> Masuk ke Akun
          </h2>
          <p className="subtitle">
            Selamat datang kembali! Silakan masuk untuk melanjutkan.
          </p>
        </div>

        <LoginForm
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        <SocialLogin onGoogleLogin={handleGoogleLogin} />
      </div>
    </div>
  );
};

export default Login;
