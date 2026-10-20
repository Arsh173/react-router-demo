import React from "react";
import { useNavigate } from "react-router-dom";

const Support = () => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/labs");
  }

  function backHandler() {
    navigate(-1);
  }

  return (
    <div className="page-container">
      <div className="card">
        <h1>🛠️ Support Page</h1>

        <p>
          Need help? This page demonstrates navigation using{" "}
          <strong>React Router DOM</strong>.
        </p>

        <p>
          You can move to the Labs page or return to the previous page using the
          buttons below.
        </p>

        <div className="button-group">
          <button onClick={clickHandler}>
            Go to Labs →
          </button>

          <button onClick={backHandler} className="secondary-btn">
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;