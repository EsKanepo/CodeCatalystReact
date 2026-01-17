import { NavLink } from "react-router-dom";

const LoginForm = ({ form, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="login-form" noValidate>
    <div className="input-group">
      <label>
        <i className="fa-solid fa-envelope"></i> Email
      </label>
      <input
        type="email"
        name="email"
        placeholder="Masukkan email Anda"
        value={form.email}
        onChange={onChange}
      />
    </div>

    <div className="input-group">
      <label>
        <i className="fa-solid fa-lock"></i> Password
      </label>
      <input
        type="password"
        name="password"
        placeholder="Masukkan password Anda"
        value={form.password}
        onChange={onChange}
      />
    </div>

    <button type="submit" className="submit-btn">
      <i className="fa-solid fa-sign-in-alt"></i> Masuk Sekarang
    </button>

    <p className="register-redirect">
      Belum punya akun?{" "}
      <NavLink to="/register" className="register-link">
        Daftar di sini
      </NavLink>
    </p>
  </form>
);

export default LoginForm;
