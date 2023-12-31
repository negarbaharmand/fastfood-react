function MenuItem({ menuItem, addToOrder }) {
  return (
    <>
      <div className="col-lg-4 col-sm-6 mb-4">
        <div className="card p-3 h-100">
          <a href="#">
            <img
              className="card-img-top"
              src={menuItem.image}
              alt={menuItem.title}
              onClick={() => addToOrder(menuItem)}
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <div>
                <h5 href="#">{menuItem.title}</h5>
              </div>
            </h4>
            <p className="card-text">{menuItem.description}</p>
            <p className="card-text text-center fw-bold">
              {menuItem.price} SEK
            </p>
            <div className="text-center">
              <button
                className="btn btn-danger"
                onClick={() => addToOrder(menuItem)}
              >
                Add to Orders
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuItem;
