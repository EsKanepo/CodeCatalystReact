import { Link } from "react-router-dom";

const FeatureCard = ({ item }) => {
  return (
    <Link to={item.link} className="course-link-item">
      <div className="feature-card text-center h-100">
        <i className={`fas ${item.icon} fa-2x mb-3`}></i>
        <h5>{item.title}</h5>
        <p className="muted-small">{item.desc}</p>
      </div>
    </Link>
  );
};

export default FeatureCard;
