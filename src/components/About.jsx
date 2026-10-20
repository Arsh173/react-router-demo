import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/support");
  }

  return (
    <div className="page-container">
      <div className="card">
        <h1>ℹ️ About Page</h1>

        <p>
          This page explains the purpose of this React Router demo project.
        </p>

        <p>
          Navigate through different pages to understand routing, navigation,
          and page transitions in React.
        </p>

        <button onClick={clickHandler}>
          Go to Support →
        </button>
      </div>
    </div>
  );
};

export default About;