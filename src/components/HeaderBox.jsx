const HeaderBox = ({ toggleMenu, darkMode, searchQuery, setSearchQuery }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div
        className={`container-fluid ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        } `}
      >
        <a className="navbar-brand" href="#">
          FoodLand
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
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <div className="d-flex justify-content-center align-items-center flex-grow-1">
            <form className="form-inline my-2 my-lg-0 mr-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <button
              className="btn btn-outline-danger m-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </div>
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
              onClick={toggleMenu}
              defaultChecked={darkMode ? true : false}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderBox;
