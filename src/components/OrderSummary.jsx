function OrderSummary({ orderItems, darkMode, incrementQuantity, decrementQuantity }) {
  const calculateTotal = (orderItems) => {
    return orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className={`fixed-bottom p-1 mx-4 bg-${darkMode ? "dark": "light"}`}>
      <h3>Order Summary</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Item</th>
            <th className="text-center">Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td className="text-center">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm px-3 font-monospace"
                  onClick={() => decrementQuantity(item)}
                >
                  -
                </button>
                <span style={{ marginRight: "8px", marginLeft: "8px" }}>
                  {item.quantity}
                </span>
                <button
                  className="btn btn-outline-success btn-sm px-3 font-monospace"
                  onClick={() => incrementQuantity(item)}
                >
                  +
                </button>
              </td>
              <td>{item.price.toFixed(2)}</td>
              <td>{(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr className="fw-bold">
            <td colSpan="3" className="text-end">
               Total Price:
            </td>
            <td>
              {calculateTotal(orderItems).toFixed(2)} SEK
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderSummary;
