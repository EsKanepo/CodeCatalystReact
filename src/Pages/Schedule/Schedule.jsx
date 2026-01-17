import React from "react";
import "./Schedule.css";
import { useAuth } from "../../context/AuthContext";

const Schedule = () => {
  const { user } = useAuth();
  return (
    <>
      <section className="schedule-section">
        <div className="container schedule-layout">
          <div className="schedule-main">
            <div className="schedule-header">
              <h2>Jadwal Kelas &amp; Tutor</h2>
              <p>Klik hari untuk melihat jadwal lengkap dan tutor yang mengajar.</p>
            </div>

            <div className="schedule-container">
              <div className="day-card">
                <input
                  type="checkbox"
                  id="monday"
                  className="schedule-toggle"
                />
                <label htmlFor="monday">
                  <h4>
                    <i className="fa-solid fa-calendar-day me-2"></i>
                    Senin
                  </h4>
                </label>
                <div className="schedule-content">
                  <p>
                    <strong>Waktu:</strong> 09.00 - 11.00
                  </p>
                  <p>
                    <strong>Kelas:</strong> HTML &amp; CSS
                  </p>
                  <p>
                    <strong>Tutor:</strong>{" "}
                    <a href="/tutor#selly">Selly Safira Putri</a>
                  </p>
                </div>
              </div>

              <div className="day-card">
                <input
                  type="checkbox"
                  id="tuesday"
                  className="schedule-toggle"
                />
                <label htmlFor="tuesday">
                  <h4>
                    <i className="fa-solid fa-calendar-day me-2"></i>
                    Selasa
                  </h4>
                </label>
                <div className="schedule-content">
                  <p>
                    <strong>Waktu:</strong> 10.00 - 12.00
                  </p>
                  <p>
                    <strong>Kelas:</strong> JavaScript Dasar
                  </p>
                  <p>
                    <strong>Tutor:</strong>{" "}
                    <a href="/tutor#ethan">Ethan Wilbert</a>
                  </p>
                </div>
              </div>

              <div className="day-card">
                <input
                  type="checkbox"
                  id="wednesday"
                  className="schedule-toggle"
                />
                <label htmlFor="wednesday">
                  <h4>
                    <i className="fa-solid fa-calendar-day me-2"></i>
                    Rabu
                  </h4>
                </label>
                <div className="schedule-content">
                  <p>
                    <strong>Waktu:</strong> 13.00 - 15.00
                  </p>
                  <p>
                    <strong>Kelas:</strong> Bootstrap &amp; Layout
                  </p>
                  <p>
                    <strong>Tutor:</strong>{" "}
                    <a href="/tutor#jhonson">Jhonson H. Halim</a>
                  </p>
                </div>
              </div>

              <div className="day-card">
                <input
                  type="checkbox"
                  id="thursday"
                  className="schedule-toggle"
                />
                <label htmlFor="thursday">
                  <h4>
                    <i className="fa-solid fa-calendar-day me-2"></i>
                    Kamis
                  </h4>
                </label>
                <div className="schedule-content">
                  <p>
                    <strong>Waktu:</strong> 09.00 - 11.00
                  </p>
                  <p>
                    <strong>Kelas:</strong> Responsive Design
                  </p>
                  <p>
                    <strong>Tutor:</strong>{" "}
                    <a href="/tutor#anggara">Anggara Adelee</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-5">
              <a href="/courses" className="btn btn-accent">
                <i className="fa-solid fa-book-open me-1"></i> Lihat Courses
              </a>
            </div>
          </div>

          <aside className="schedule-sidebar">
            <h5>
              <i className="fa-solid fa-bullhorn me-2"></i> Info &amp; Link
            </h5>

            {!user && (
              <div className="sidebar-box">
                <p>
                  <strong>🔥 Promo Akhir Tahun!</strong>
                  <br />
                  Dapatkan potongan 30% untuk kelas JavaScript dan React.{" "}
                  <a href="/register">Daftar sekarang!</a>
                </p>
              </div>
            )}

            <div className="sidebar-box">
              <h6>🔗 Link Cepat</h6>
              <ul>
                <li>
                  <a href="/">🏠 Beranda</a>
                </li>
                <li>
                  <a href="/tutor">👩‍🏫 Tutor</a>
                </li>
                <li>
                  <a href="/courses">📘 Kursus</a>
                </li>
                {!user && (
                  <li>
                    <a href="/register">📝 Pendaftaran</a>
                  </li>
                )}
              </ul>
            </div>

            <div className="sidebar-box">
              <h6>🌐 Sumber Belajar</h6>
              <ul>
                <li>
                  <a
                    href="https://developer.mozilla.org/id/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MDN Web Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.w3schools.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    W3Schools
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.freecodecamp.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FreeCodeCamp
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Schedule;
