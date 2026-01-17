import { useState } from "react";
import "./FAQ.css";

import faqData from "./Data/faqData";
import FAQSearch from "./Components/FAQSearch";
import FAQFilter from "./Components/FAQFilter";
import FAQItem from "./Components/FAQItem";

const FAQ = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");

  // PAGINATION STATE
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const categories = ["Semua", ...new Set(faqData.map((f) => f.category))];

  // FILTER DATA
  const filtered = faqData.filter((f) => {
    const matchCategory =
      category === "Semua" || f.category === category;
    const matchSearch =
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  // RESET PAGE JIKA FILTER / SEARCH BERUBAH
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filtered.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <section className="page-header">
        <h1>FAQ</h1>
        <p>Pertanyaan yang sering diajukan</p>
      </section>

      <section className="faq-container">
        <FAQSearch search={search} setSearch={setSearch} />
        <FAQFilter
          active={category}
          setActive={(cat) => {
            setCategory(cat);
            setCurrentPage(1);
          }}
          categories={categories}
        />

        <div className="faq-list">
          {paginatedData.length ? (
            paginatedData.map((item, i) => (
              <FAQItem key={i} {...item} />
            ))
          ) : (
            <p className="empty">Pertanyaan tidak ditemukan.</p>
          )}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="faq-pagination">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`page-btn ${
                  currentPage === i + 1 ? "active" : ""
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default FAQ;
