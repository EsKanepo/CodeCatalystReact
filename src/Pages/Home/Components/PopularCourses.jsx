import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

const PopularCourses = () => {
  const navigate = useNavigate();

  // simulasi auth
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // UI state
  const [filter, setFilter] = useState("unlocked"); // default HOME

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  // FILTER + AUTH LOGIC
  const filteredCourses = courses.filter((course) => {
    const isUnlocked =
      course.status === "available" || isLoggedIn;

    if (filter === "unlocked" && !isUnlocked) return false;
    if (filter === "locked" && isUnlocked) return false;

    return true;
  });

  // 🔑 locked click handler
  const handleLockedClick = () => {
    alert("Silakan login untuk membuka course ini.");
    navigate("/login");
  };

  return (
    <>
      {/* FILTER */}
      <div className="btn-group mb-3">
        <button
          className={`btn btn-sm btn-outline-primary popular-filter-btn ${
            filter === "unlocked" ? "active" : ""
          }`}
          onClick={() => setFilter("unlocked")}
        >
          Unlock
        </button>

        <button
          className={`btn btn-sm btn-outline-primary popular-filter-btn ${
            filter === "locked" ? "active" : ""
          }`}
          onClick={() => setFilter("locked")}
        >
          Terkunci
        </button>

        <button
          className={`btn btn-sm btn-outline-primary popular-filter-btn ${
            filter === "all" ? "active" : ""
          }`}
          onClick={() => setFilter("all")}
        >
          Semua
        </button>
      </div>

      {/* COURSE LIST */}
      <div className="d-flex gap-3 overflow-auto pb-2">
        {filteredCourses.map((course, i) => {
          const isUnlocked =
            course.status === "available" || isLoggedIn;

          return isUnlocked ? (
            <Link key={i} to={course.path} className="popular-pill">
              {course.name}
            </Link>
          ) : (
            <button
              key={i}
              className="popular-pill opacity-50 border-0"
              onClick={handleLockedClick}
            >
              {course.name} 🔒
            </button>
          );
        })}
      </div>

      {!isLoggedIn && (
        <p className="text-muted small mt-2">
          Login untuk membuka course lanjutan
        </p>
      )}
    </>
  );
};

export default PopularCourses;