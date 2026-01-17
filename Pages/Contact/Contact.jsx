import ContactForm from "./components/ContactForm";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      {/* HERO */}
      <header className="contact-hero">
        <div className="container">
          <h1>
            <i className="fa-solid fa-envelope-circle-check me-2"></i>
            Hubungi Kami
          </h1>
          <p className="lead">
            Kirim pesan, saran, atau pertanyaan mengenai proyek CodeCatalyst.
          </p>
        </div>
      </header>

      {/* FORM */}
      <main className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      {/* INFO */}
      <section className="contact-info">
        <div className="container">
          <h4>Informasi Kontak</h4>
          <p>
            <i className="fa-solid fa-location-dot me-2 text-primary"></i>
            Medan — Jalan Iskandar Muda
          </p>
          <p>
            <i className="fa-solid fa-envelope me-2 text-warning"></i>
            support@codecatalyst.ac.id
          </p>
          <p>
            <i className="fa-solid fa-phone me-2 text-success"></i>
            +62 812-3456-7890
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
