import React from "react";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../../../auth/socialAuth";
import { useAuth } from "../../../context/AuthContext";

const SocialRegister = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleGoogleRegister = async () => {
    try {
      const user = await loginWithGoogle();

      setUser({
        name: user.displayName || null,
        email: user.email || null,
      });

      localStorage.setItem("isLoggedIn", "true");
      navigate("/");
    } catch (err) {
      alert("Pendaftaran dengan Google gagal.");
    }
  };

  return (
    <div className="social-login">
      <p>Atau daftar dengan</p>
      <button
        type="button"
        className="social-btn google"
        onClick={handleGoogleRegister}
      >
        <i className="fa-brands fa-google"></i> Google
      </button>
    </div>
  );
};

export default SocialRegister;
