import { useState } from "react";
import { motion } from "framer-motion";
import "./Testimonial.css";

import testimonialsData from "./Data/testimonialsData";
import FilterBar from "./Components/FilterBar";
import Pagination from "./Components/Pagination";

const ITEMS_PER_PAGE = 3;

const Testimonial = () => {
  const [filters, setFilters] = useState({
    course: "Semua",
    time: "Semua",
  });

  const [page, setPage] = useState(1);

  const filteredData = testimonialsData.filter(
    (t) =>
      (filters.course === "Semua" || t.course === filters.course) &&
      (filters.time === "Semua" || t.time === filters.time)
  );

  const totalPages = Math.ceil(
    filteredData.length / ITEMS_PER_PAGE
  );

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="testimonial-page">
      <header>
        <h2>Testimoni Siswa</h2>
        <p>Pengalaman nyata dari siswa CodeCatalyst</p>
      </header>

      <FilterBar
        filters={filters}
        setFilters={setFilters}
        resetPage={() => setPage(1)}
      />

      <div className="testimonial-list">
        {currentItems.map((t) => (
          <motion.article
            key={t.id}
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="profile">
              <img src={t.image} alt={t.name} />
              <div>
                <h4>{t.name}</h4>
              </div>
            </div>

            <p className="message">{t.message}</p>

            <footer>
              {t.course} • {t.time}
            </footer>
          </motion.article>
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </section>
  );
};

export default Testimonial;
