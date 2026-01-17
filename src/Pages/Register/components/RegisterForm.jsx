import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      alert("Harap isi nama, email, dan password terlebih dahulu.");
      return;
    }

    setUser({
      name: form.name,
      email: form.email,
    });

    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  const handleReset = () => {
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} noValidate>

      <div className="input-group">
        <label>
          <i className="fa-solid fa-user"></i> Nama Lengkap
        </label>
        <input
          type="text"
          name="name"
          placeholder="Masukkan nama lengkap"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>
          <i className="fa-solid fa-envelope"></i> Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Masukkan email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>
          <i className="fa-solid fa-lock"></i> Password
        </label>
        <input
          type="password"
          name="password"
          placeholder="Buat password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <div className="btn-group">
        <button type="submit" className="submit-btn">
          <i className="fa-solid fa-paper-plane"></i> Daftar Sekarang
        </button>
        <button type="reset" className="reset-btn">
          <i className="fa-solid fa-rotate-right"></i> Reset
        </button>
      </div>

      <p className="login-redirect">
        Sudah punya akun?{" "}
        <NavLink to="/login" className="login-link">
          Masuk di sini
        </NavLink>
      </p>

    </form>
  );
};

export default RegisterForm;
