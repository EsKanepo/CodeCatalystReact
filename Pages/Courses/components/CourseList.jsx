import CourseItem from "./CourseItem";

const CourseList = ({ progress, isLoggedIn, onLocked }) => {
  return (
    <div className="content-card">
      <h3 className="card-title">
        <i className="fa-solid fa-list-ul me-2"></i>
        Kursus Utama
      </h3>

      <ul className="list-group list-group-flush">
        <CourseItem
          icon="fa-html5"
          color="text-danger"
          title="HTML Fundamentals"
          desc="Dasar struktur halaman web"
          link="/html"
          progress={progress.html}
        />

        <CourseItem
          icon="fa-css3-alt"
          color="text-primary"
          title="CSS Styling & Layout"
          desc="Styling dan layout modern"
          link="/css"
          progress={progress.css}
        />

        <CourseItem
          icon="fa-js"
          color="text-warning"
          title="JavaScript Interaktif"
          desc="Website dinamis"
          link="/javascript"
          progress={progress.js}
          locked={!isLoggedIn}
          onLocked={onLocked}
        />

        <CourseItem
          icon="fa-bootstrap"
          color="text-purple"
          title="Bootstrap Framework"
          desc="Framework CSS responsif"
          link="/bootstrap"
          progress={progress.bootstrap}
          locked={!isLoggedIn}
          onLocked={onLocked}
        />

        <CourseItem
          icon="fa-react"
          color="text-info"
          title="React.js Basics"
          desc="Library UI modern"
          link="/react"
          progress={progress.react}
          locked={!isLoggedIn}
          onLocked={onLocked}
        />
      </ul>
    </div>
  );
};

export default CourseList;
