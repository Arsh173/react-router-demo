import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/about");
  }

  return (
    <div className="page-container">
      <div className="card">
        <h1>📚 Labs Page</h1>

        <p>
          This page demonstrates navigation using <strong>React Router DOM</strong>.
        </p>

        <button onClick={clickHandler}>
          Go to About →
        </button>
      </div>
    </div>
  );
};

export default Labs;