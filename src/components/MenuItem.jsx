function MenuItem({ menuItem, addToOrder }) {
  return (
    <div className="card mb-4 col-md-4">
      <img className="card-img-top" src={menuItem.image} alt={menuItem.title} />
      <div className="card-body">
        <h5 className="card-title">{menuItem.title}</h5>
        <p className="card-text">{menuItem.description}</p>
        <p className="card-text">{menuItem.price} SEK</p>
      </div>
      <div className="card-footer text-center">
        <button onClick={() => addToOrder(menuItem)}>Add to Order</button>
      </div>
    </div>
  );
}

export default MenuItem;
