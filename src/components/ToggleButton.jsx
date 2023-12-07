import { useState } from "react";

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleModeHandler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="container-fluid mt-4">
      <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {darkMode ? "Dark Mode" : "Light Mode"}
          </a>
        </div>
      </nav>

      <div className="container">
        <h1>Content</h1>
        <button
          type="button"
          className="btn btn-dark"
          onClick={toggleModeHandler}
        >
          Toggle Mode
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
