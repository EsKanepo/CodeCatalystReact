import React from "react";
import "./Tutor.css";

import sellyImg from "../../Assets/selly.jpg";
import ethanImg from "../../Assets/ethan.jpg";
import jhonsonImg from "../../Assets/jhonson.jpg";
import anggaraImg from "../../Assets/anggara.jpg";

const Tutor = () => {
  return (
    <>
      <section className="tutors-header">
        <div className="container">
          <h2>Temui Tutor Hebat Kami</h2>
          <p>
            Kami memiliki tutor berpengalaman dan berdedikasi untuk membantu Anda
            mencapai prestasi terbaik.
          </p>
        </div>
      </section>

      <section className="tutors-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row g-4">
                <div className="col-md-6 col-lg-6">
                  <div className="tutor-card text-center p-4" id="selly">
                    <img src={sellyImg} alt="Selly Safira Putri" />
                    <h5 className="mt-3">Selly Safira Putri</h5>
                    <p className="text-muted">Tutor HTML &amp; CSS</p>
                    <p>
                      Selly adalah tutor yang sabar dan kreatif dalam membimbing
                      siswa membuat desain web modern dengan struktur yang rapi.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6">
                  <div className="tutor-card text-center p-4" id="ethan">
                    <img src={ethanImg} alt="Ethan Wilbert" />
                    <h5 className="mt-3">Ethan Wilbert</h5>
                    <p className="text-muted">Tutor JavaScript</p>
                    <p>
                      Ethan dikenal dengan cara mengajar yang interaktif dan
                      menyenangkan, membuat logika pemrograman terasa mudah
                      dipahami.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6">
                  <div className="tutor-card text-center p-4" id="jhonson">
                    <img src={jhonsonImg} alt="Jhonson H. Halim" />
                    <h5 className="mt-3">Jhonson H. Halim</h5>
                    <p className="text-muted">Tutor Bootstrap</p>
                    <p>
                      Dengan pengalaman luas di bidang frontend, Jhonson membantu
                      siswa memahami layouting profesional menggunakan Bootstrap.
                    </p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-6">
                  <div className="tutor-card text-center p-4" id="anggara">
                    <img src={anggaraImg} alt="Anggara Adelee" />
                    <h5 className="mt-3">Anggara Adelee</h5>
                    <p className="text-muted">Tutor Responsive Design</p>
                    <p>
                      Anggara fokus pada desain web yang adaptif untuk semua
                      perangkat agar pengalaman pengguna tetap maksimal.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-box">
              <h6>🔗 Link Cepat</h6>
              <hr />
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
                <li>
                  <a href="/register">📝 Pendaftaran</a>
                </li>
              </ul>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tutor;
