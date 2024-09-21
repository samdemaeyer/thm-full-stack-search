import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center height">
      <div className="display-1 text-white font-weight-bold mb-2">
        404 - Page Not Found
      </div>
      <div className="text-white">
        Sorry, the page you are looking for does not exist.
      </div>
      <Link to="/" className="not-found-cta text-decoration-none">
        Take me home
      </Link>
    </div>
  );
};

export default NotFoundPage;
