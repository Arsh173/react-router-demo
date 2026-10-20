import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="card">
        <h1>🚫 404 - Page Not Found</h1>

        <p>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <button onClick={() => navigate("/")}>
          🏠 Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;