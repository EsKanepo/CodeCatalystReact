import { Link } from "react-router-dom";
import gif from "../../Assets/learn_gif.gif";
import "./Home.css";

import FeatureCard from "./Components/FeatureCard";
import PopularCourses from "./Components/PopularCourses";
import { features } from "./data/Features";


const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <h1>
                CodeCatalyst — <br />
                Accelerate Your Learning Journey
              </h1>

              <p className="lead">
                Platform edukasi untuk mata kuliah{" "}
                <strong>Pengembangan Pemrograman</strong>. Menyediakan kursus,
                pendaftaran, dan jadwal belajar interaktif berbasis React.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/tutor" className="btn btn-light btn-lg">
                  <i className="fa-solid fa-graduation-cap me-1"></i>
                  Profil Pengajar
                </Link>

                <Link to="/login" className="btn btn-accent btn-lg">
                  <i className="fa-solid fa-right-to-bracket me-1"></i>
                  Login Sekarang
                </Link>
              </div>

              <div className="mt-4 muted-small text-white-50">
                Kelompok: <strong>Catalyst</strong> <br />
                Dosen: Arwin Halim <br />
                Mata Kuliah: Pengembangan Pemrograman
                <div className="mt-2">
                  <strong>Anggota Kelompok:</strong>
                </div>
                <ul className="member-list ms-3 mb-0">
                  <li>241110939 / Ethan Wilbert</li>
                  <li>241110567 / Jhonson Hartawan Halim</li>
                  <li>241112271 / Anggara Adelee</li>
                  <li>241111842 / Selly Safira Putri</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5 text-center text-lg-end">
              <figure className="hero-figure mb-0">
                <img
                  src={gif}
                  alt="Ilustrasi pendidikan dan coding"
                  className="img-fluid hero-image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {features.map((item, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <FeatureCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="popular-courses py-4">
        <div className="container">
          <h4 className="mb-3 text-dark">Popular Courses</h4>
          <PopularCourses />
        </div>
        
      </section>

      {/* SOCIAL */}
      <section className="container mb-5 mt-4">
        <h4 className="mb-4">Ikuti Kami</h4>
        <div className="social-icons">
          <a href="https://www.instagram.com" className="instagram" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com" className="facebook" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" className="twitter" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com" className="youtube" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.linkedin.com" className="linkedin" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.tiktok.com" className="tiktok" target="_blank" rel="noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
