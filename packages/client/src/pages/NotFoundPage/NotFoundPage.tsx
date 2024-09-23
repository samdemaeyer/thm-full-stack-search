import React from "react";
import { Link } from "react-router-dom";
import MetaTags from "../../components/MetaTags/MetaTags";
import "./NotFoundPage.css";

const NotFoundPage: React.FC = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center text-center height">
      <MetaTags
        title="404 - Page Not Found"
        description="Sorry, the page you are looking for does not exist."
        url={window.location.href}
        image="URL_TO_YOUR_IMAGE"
        type="website"
      />
      <h1 className="display-1 text-white font-weight-bold mb-2">
        404 - Page Not Found
      </h1>

      <div>
        <p className="text-white">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
      <Link
        to="/"
        className="not-found-cta text-decoration-none"
        aria-label="Return to the homepage"
      >
        Take me home
      </Link>
    </div>
  );
};

export default NotFoundPage; // Export the NotFoundPage component
