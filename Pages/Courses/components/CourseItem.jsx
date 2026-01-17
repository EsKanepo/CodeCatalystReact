import { Link } from "react-router-dom";

const CourseItem = ({
  icon,
  color,
  title,
  desc,
  link,
  progress,
  locked = false,
  onLocked,
}) => {
  const body = (
    <div className="d-flex align-items-start">
      <i className={`fa-brands ${icon} me-2 ${color}`}></i>

      <div className="flex-grow-1">
        <strong>
          {title} {locked && "🔒"}
        </strong>
        <p className="mb-0 text-muted small">{desc}</p>

        <div className="mt-1">
          <div className="progress" style={{ height: "6px" }}>
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <small className="text-muted">Progress: {progress}%</small>
        </div>
      </div>

      <i className="fa-solid fa-chevron-right ms-2"></i>
    </div>
  );

  return (
    <li className="list-group-item course-item-clickable">
      {locked ? (
        <div className="course-link-item" onClick={onLocked}>
          {body}
        </div>
      ) : (
        <Link to={link} className="course-link-item">
          {body}
        </Link>
      )}
    </li>
  );
};

export default CourseItem;
