import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const err = {};
    if (form.name.trim().length < 2) err.name = "Nama minimal 2 karakter";
    if (!form.email.includes("@")) err.email = "Email tidak valid";
    if (!form.message.trim()) err.message = "Pesan tidak boleh kosong";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("DATA TERKIRIM:", form);
      setForm({ name: "", email: "", message: "" });
      navigate("/contact-success");
    }
  };

  return (
    <form className="contact-form p-4 shadow-sm" onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label className="form-label fw-semibold">Nama Lengkap</label>
        <input
          type="text"
          name="name"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Alamat Email</label>
        <input
          type="email"
          name="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Pesan / Umpan Balik</label>
        <textarea
          name="message"
          rows="5"
          className={`form-control ${errors.message ? "is-invalid" : ""}`}
          value={form.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && (
          <div className="invalid-feedback">{errors.message}</div>
        )}
      </div>

      <button type="submit" className="btn btn-accent w-100">
        <i className="fa-solid fa-paper-plane me-1"></i>
        Kirim Pesan
      </button>
    </form>
  );
};

export default ContactForm;
