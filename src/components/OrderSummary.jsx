function OrderSummary({ orderItems, incrementQuantity, decrementQuantity }) {
  const calculateTotal = (orderItems) => {
    return orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="m-5">
      <h3>Order Summary</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm mr-2"
                  onClick={() => decrementQuantity(item)}
                >
                  {" "}
                  -{" "}
                </button>
                <span style={{ marginRight: "8px", marginLeft: "8px" }}>
                  {item.quantity}
                </span>
                <button
                  className="btn btn-outline-success btn-sm ml-2"
                  onClick={() => incrementQuantity(item)}
                >
                  {" "}
                  +{" "}
                </button>
              </td>
              <td>SEK{item.price.toFixed(2)}</td>
              <td>SEK{(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="font-weight-bold text-right">
              Total:
            </td>
            <td className="font-weight-bold">
              SEK{calculateTotal(orderItems).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderSummary;
