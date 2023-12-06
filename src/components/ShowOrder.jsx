function ShowOrder({ orderItems, incrementQuantity, decrementQuantity }) {
  return (
    <div className="mt-4">
      <h3>Order Summary</h3>
      <table>
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
                  className="btn btn-outline-secondary btn-sm mr-2"
                  onClick={() => decrementQuantity(item)}
                >
                  {" "}
                  -{" "}
                </button>
                {item.quantity}
                <button
                  className="btn btn-outline-secondary btn-sm ml-2"
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

function calculateTotal(orderItems) {
  return orderItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

export default ShowOrder;
