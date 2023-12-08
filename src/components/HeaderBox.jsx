import { useState } from "react";

const HeaderBox = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleModeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    // <div className="container-fluid mt-4">
    //   <nav
    //     className={`navbar navbar-expand-lg ${
    //       darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
    //     } `}
    //   >
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">
    //         Fast Food
    //         <img src={darkMode ? "/light.png" : "/light.png"} alt="logo" />
    //       </a>
    //     </div>
    //   </nav>
    //   <div className="container">
    //     <button
    //       type="button"
    //       className={`btn ${darkMode ? "btn-dark" : "btn-light"}`}
    //       onClick={toggleModeHandler}
    //     >
    //       {darkMode ? "Dark Mode" : "Light Mode"}
    //     </button>
    //   </div>
    // </div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div
        className={`container-fluid ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        } `}
      >
        <a className="navbar-brand" href="#">
          FoodMenu
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor04"
          aria-controls="navbarColor04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor04">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Order Summary
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <label
              className={`form-check-label ${darkMode ? "text-white" : null}`}
              htmlFor="lightSwitch"
            >
              {" "}
              {darkMode ? "Dark Mode" : "Light Mode"}{" "}
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              id="lightSwitch"
              onClick={toggleModeHandler}
              defaultChecked={darkMode ? true : false}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderBox;
