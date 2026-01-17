import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import CourseList from "./components/CourseList";
import CourseVideo from "./components/CourseVideo";
import CoursesCTA from "./components/Coursescta";
import "./courses.css";

const Courses = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [progress, setProgress] = useState({
    html: 0,
    css: 0,
    js: 0,
    bootstrap: 0,
    react: 0,
  });

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");

    const read = (key) => {
      const v = parseInt(localStorage.getItem(key) || "0", 10);
      return Number.isNaN(v) ? 0 : Math.min(100, Math.max(0, v));
    };

    setProgress({
      html: read("htmlProgress"),
      css: read("cssProgress"),
      js: read("jsProgress"),
      bootstrap: read("bootstrapProgress"),
      react: read("reactProgress"),
    });
  }, []);

  const handleLocked = () => {
    alert("Silakan login untuk membuka course ini.");
    navigate("/login");
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>
            <i className="fa-solid fa-graduation-cap me-2"></i>
            Daftar Kursus
          </h1>
          <p className="lead">Pilih kursus untuk mempercepat belajarmu</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <CourseList
                progress={progress}
                isLoggedIn={isLoggedIn}
                onLocked={handleLocked}
              />
            </div>

            <div className="col-lg-6">
              <CourseVideo />
            </div>

            {!user && (
              <div className="col-12">
                <CoursesCTA />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
