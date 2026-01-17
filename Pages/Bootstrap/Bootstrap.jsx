import React from "react";
import { useAuth } from "../../context/AuthContext";

import { Link } from 'react-router-dom';
import './Bootstrap.css';
import { useBootstrapProgress } from './hooks/useBootstrapProgress';

const Bootstrap = () => {
  const { user } = useAuth();

  const { completedSections, toggleSection, resetProgress } = useBootstrapProgress();

  return (
    <>
      {/* header */}
      <section className="page-header">
        <div className="container">
          <h1>
            <i className="fa-brands fa-bootstrap me-2"></i>
            Bootstrap Framework
          </h1>
          <p className="lead">Framework CSS untuk desain responsif cepat</p>
        </div>
      </section>

      {/* tombol kembali ke courses */}
      <section className="py-4">
        <div className="container text-center">
          <Link to="/courses" className="btn btn-outline-primary">
            Kembali ke Courses
          </Link>
        </div>
      </section>

      {/* main */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* deskripsi */}
            <div className="col-md-8">
              <div className="content-card">
                <h3 className="card-title">
                  <i className="fa-solid fa-circle-info me-2"></i>
                  Deskripsi Kursus
                </h3>
                <p className="course-description">
                  Kursus <strong>Bootstrap Framework</strong> mengajarkan cara menggunakan framework CSS paling populer
                  untuk membuat website responsif dengan cepat. Kuasai grid system dan komponen Bootstrap.
                </p>
                <p className="course-description">
                  Bootstrap memungkinkan Anda membuat website profesional dalam waktu singkat. Pelajari cara menggunakan
                  komponen siap pakai dan customisasi sesuai kebutuhan project Anda.
                </p>

                <div className="course-info-grid">
                  <div className="info-item">
                    <i className="fa-solid fa-clock"></i>
                    <div>
                      <strong>Durasi</strong>
                      <p>8 Minggu</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="fa-solid fa-signal"></i>
                    <div>
                      <strong>Level</strong>
                      <p>Pemula</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="fa-solid fa-users"></i>
                    <div>
                      <strong>Peserta</strong>
                      <p>Maksimal 30 orang</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <i className="fa-solid fa-certificate"></i>
                    <div>
                      <strong>Sertifikat</strong>
                      <p>Ya, tersedia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* topik */}
              <div className="content-card mt-4">
                <h3 className="card-title">
                  <i className="fa-solid fa-list-check me-2"></i>
                  Topik Per Minggu
                </h3>
                <ul className="topic-list">
                  <li className="topic-item">
                    <div className="topic-header">
                      <span className="week-badge">Minggu 1</span>
                      <h5>
                        <i className="fa-brands fa-bootstrap text-purple me-2"></i>
                        Bootstrap Basics
                      </h5>
                    </div>
                    <ul className="subtopic-list">
                      <li>Bootstrap installation dan setup</li>
                      <li>Grid system dan breakpoints</li>
                      <li>Container, rows, dan columns</li>
                      <li>Spacing utilities (margin, padding)</li>
                    </ul>
                    <button
                      type="button"
                      className={`btn btn-sm mt-2 ${
                        completedSections[0] ? 'btn-success' : 'btn-outline-success'
                      }`}
                      onClick={() => toggleSection(0)}
                    >
                      {completedSections[0] ? 'Selesai' : 'Tandai selesai'}
                    </button>
                  </li>

                  <li className="topic-item">
                    <div className="topic-header">
                      <span className="week-badge">Minggu 2</span>
                      <h5>
                        <i className="fa-brands fa-bootstrap text-purple me-2"></i>
                        Components
                      </h5>
                    </div>
                    <ul className="subtopic-list">
                      <li>Navbar dan navigation components</li>
                      <li>Cards, modals, dan alerts</li>
                      <li>Forms dan input groups</li>
                      <li>Buttons, badges, dan icons</li>
                    </ul>
                    <button
                      type="button"
                      className={`btn btn-sm mt-2 ${
                        completedSections[1] ? 'btn-success' : 'btn-outline-success'
                      }`}
                      onClick={() => toggleSection(1)}
                    >
                      {completedSections[1] ? 'Selesai' : 'Tandai selesai'}
                    </button>
                  </li>

                  <li className="topic-item">
                    <div className="topic-header">
                      <span className="week-badge">Minggu 3</span>
                      <h5>
                        <i className="fa-brands fa-bootstrap text-purple me-2"></i>
                        Customization &amp; Project
                      </h5>
                    </div>
                    <ul className="subtopic-list">
                      <li>Customizing Bootstrap dengan Sass</li>
                      <li>Utility classes dan helper classes</li>
                      <li>Responsive design patterns</li>
                      <li>Project: Business website dengan Bootstrap</li>
                    </ul>
                    <button
                      type="button"
                      className={`btn btn-sm mt-2 ${
                        completedSections[2] ? 'btn-success' : 'btn-outline-success'
                      }`}
                      onClick={() => toggleSection(2)}
                    >
                      {completedSections[2] ? 'Selesai' : 'Tandai selesai'}
                    </button>
                  </li>

                  <li className="topic-item">
                    <div className="topic-header">
                      <span className="week-badge">Minggu 4</span>
                      <h5>
                        <i className="fa-brands fa-bootstrap text-purple me-2"></i>
                        Advanced Grid & Layout
                      </h5>
                    </div>
                    <ul className="subtopic-list">
                      <li>Nested grids dan layout kompleks</li>
                      <li>Responsive utilities untuk show/hide konten</li>
                      <li>Alignment dan ordering pada grid</li>
                      <li>Layout dashboard dengan Bootstrap</li>
                    </ul>
                    <button
                      type="button"
                      className={`btn btn-sm mt-2 ${
                        completedSections[3] ? 'btn-success' : 'btn-outline-success'
                      }`}
                      onClick={() => toggleSection(3)}
                    >
                      {completedSections[3] ? 'Selesai' : 'Tandai selesai'}
                    </button>
                  </li>

                  <li className="topic-item">
                    <div className="topic-header">
                      <span className="week-badge">Minggu 5</span>
                      <h5>
                        <i className="fa-brands fa-bootstrap text-purple me-2"></i>
                        Theming & Customization Lanjutan
                      </h5>
                    </div>
                    <ul className="subtopic-list">
                      <li>Menggunakan Sass variables untuk kustom tema</li>
                      <li>Mengubah warna, font, dan komponen global</li>
                      <li>Build custom CSS Bootstrap</li>
                      <li>Mengelola dependensi Bootstrap di project nyata</li>
                    </ul>
                    <button
                      type="button"
                      className={`btn btn-sm mt-2 ${
                        completedSections[4] ? 'btn-success' : 'btn-outline-success'
                      }`}
                      onClick={() => toggleSection(4)}
                    >
                      {completedSections[4] ? 'Selesai' : 'Tandai selesai'}
                    </button>
                  </li>

                  <li className="topic-item">
                    <div className="topic-header">
                      <span className="week-badge">Minggu 6</span>
                      <h5>
                        <i className="fa-brands fa-bootstrap text-purple me-2"></i>
                        Forms & Components Interaktif
                      </h5>
                    </div>
                    <ul className="subtopic-list">
                      <li>Form layout kompleks dengan grid dan utilities</li>
                      <li>Validation state dan feedback visual</li>
                      <li>Interaksi dengan komponen JavaScript Bootstrap (modal, toast, tooltip)</li>
                      <li>Pattern UI umum untuk form-heavy apps</li>
                    </ul>
                    <button
                      type="button"
                      className={`btn btn-sm mt-2 ${
                        completedSections[5] ? 'btn-success' : 'btn-outline-success'
                      }`}
                      onClick={() => toggleSection(5)}
                    >
                      {completedSections[5] ? 'Selesai' : 'Tandai selesai'}
                    </button>
                  </li>

                  <li className="topic-item">
                    <div className="topic-header">
                      <span className="week-badge">Minggu 7</span>
                      <h5>
                        <i className="fa-brands fa-bootstrap text-purple me-2"></i>
                        Best Practices & Performance
                      </h5>
                    </div>
                    <ul className="subtopic-list">
                      <li>Struktur HTML + Bootstrap yang bersih dan semantik</li>
                      <li>Mengurangi duplikasi kelas dan kode CSS</li>
                      <li>Optimasi bundle Bootstrap (hanya komponen yang dipakai)</li>
                      <li>Accessibility dengan komponen Bootstrap</li>
                    </ul>
                    <button
                      type="button"
                      className={`btn btn-sm mt-2 ${
                        completedSections[6] ? 'btn-success' : 'btn-outline-success'
                      }`}
                      onClick={() => toggleSection(6)}
                    >
                      {completedSections[6] ? 'Selesai' : 'Tandai selesai'}
                    </button>
                  </li>

                  <li className="topic-item">
                    <div className="topic-header">
                      <span className="week-badge">Minggu 8</span>
                      <h5>
                        <i className="fa-brands fa-bootstrap text-purple me-2"></i>
                        Final Project Bootstrap
                      </h5>
                    </div>
                    <ul className="subtopic-list">
                      <li>Merancang dan membangun website bisnis lengkap</li>
                      <li>Menggunakan grid, komponen, dan utilities secara terpadu</li>
                      <li>Review responsive behavior di berbagai device</li>
                      <li>Presentasi dan evaluasi project akhir</li>
                    </ul>
                    <button
                      type="button"
                      className={`btn btn-sm mt-2 ${
                        completedSections[7] ? 'btn-success' : 'btn-outline-success'
                      }`}
                      onClick={() => toggleSection(7)}
                    >
                      {completedSections[7] ? 'Selesai' : 'Tandai selesai'}
                    </button>
                  </li>
                </ul>

                <div className="mt-3 d-flex justify-content-center">
                  <button type="button" className="btn btn-outline-danger btn-sm" onClick={resetProgress}>
                    Reset progress
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <a href="schedule.html" className="btn btn-primary btn-lg">
                    <i className="fa-solid fa-calendar-days me-2"></i>
                    Lihat Jadwal Lengkap
                  </a>
                </div>
              </div>
            </div>

            {/* sidebar */}
            <div className="col-md-4">
              {/* video */}
              <div className="content-card">
                <h3 className="card-title">
                  <i className="fa-solid fa-video me-2"></i>
                  Preview Kursus
                </h3>
                <div className="ratio ratio-16x9 mb-3">
                  <iframe
                    src="https://www.youtube.com/embed/-qfEOE4vtxE"
                    title="Bootstrap Tutorial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className="text-muted small mb-0">
                  <i className="fa-solid fa-circle-play me-1"></i>
                  Tutorial Bootstrap Framework
                </p>
              </div>

              {/* link */}
              <div className="content-card mt-4">
                <h3 className="card-title">
                  <i className="fa-solid fa-link me-2"></i>
                  Link Terkait
                </h3>
                <div className="quick-links">
                  <a href="schedule.html" className="quick-link-item">
                    <i className="fa-solid fa-calendar-check"></i>
                    <span>Lihat Jadwal</span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                  <a href="resources.html" className="quick-link-item">
                    <i className="fa-solid fa-book"></i>
                    <span>Sumber Belajar</span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                  <a href="faq.html" className="quick-link-item">
                    <i className="fa-solid fa-question-circle"></i>
                    <span>FAQ</span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </a>
                </div>
              </div>

              {/* daftar */}
              {!user && (
                <div className="cta-sidebar">
                  <h4>
                    <i className="fa-solid fa-rocket me-2"></i>
                    Siap Bergabung?
                  </h4>
                  <p>Daftar sekarang dan kuasai Bootstrap!</p>
                  <Link to="/register" className="btn btn-accent btn-lg w-100">
                    <i className="fa-solid fa-user-plus me-2"></i>
                    Daftar Sekarang
                  </Link>

                  <a href="contact.html" className="btn btn-outline-primary w-100 mt-2">
                    <i className="fa-solid fa-envelope me-2"></i>
                    Hubungi Kami
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Bootstrap;