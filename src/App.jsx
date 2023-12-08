import { useState } from "react";
import MenuList from "./components/MenuList";
import OrderSummary from "./components/OrderSummary";
import HeaderBox from "./components/HeaderBox";

function App() {
  const sampleImage = "https://placehold.co/400";
  const menuItemData = [
    {
      title: "🍕 Pizza",
      description:
        "A classic Margherita pizza with tomato, mozzarella, and basil.",
      image: "https://placehold.co/400",
      price: 175,
    },
    {
      title: "🍔 Hamburger",
      description:
        "Juicy beef patty topped with lettuce, tomato, and cheese on a sesame seed bun.",
      image: "https://placehold.co/400",
      price: 150,
    },
    {
      title: "🍝 Spaghetti",
      description:
        "Spaghetti pasta served with rich marinara sauce and grated Parmesan cheese.",
      image: "https://placehold.co/400",
      price: 120,
    },
    {
      title: "🍣 Sushi",
      description:
        "Fresh and flavorful sushi rolls with a variety of fish and vegetables.",
      image: "https://placehold.co/400",
      price: 200,
    },
    {
      title: "🥗 Salad",
      description:
        "A healthy salad bowl with mixed greens, cherry tomatoes, and balsamic vinaigrette.",
      image: "https://placehold.co/400",
      price: 90,
    },
    {
      title: "🍦 Ice Cream",
      description:
        "Creamy vanilla ice cream topped with chocolate sauce and sprinkles.",
      image: "https://placehold.co/400",
      price: 50,
    },
  ];

  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (menuItem) => {
    const existingItem = orderItems.find(
      (item) => item.title === menuItem.title
    );

    if (existingItem) {
      const updatedOrder = orderItems.map((item) =>
        item.title === menuItem.title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setOrderItems(updatedOrder);
    } else {
      setOrderItems([...orderItems, { ...menuItem, quantity: 1 }]);
    }
  };

  const incrementQuantity = (menuItem) => {
    const updatedOrder = orderItems.map((item) =>
      item.title === menuItem.title
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setOrderItems(updatedOrder);
  };

  const decrementQuantity = (menuItem) => {
    const updatedOrder = orderItems.map((item) =>
      item.title === menuItem.title && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setOrderItems(updatedOrder);
  };
  return (
    <>
      <HeaderBox />
      <MenuList menuItems={menuItemData} addToOrder={addToOrder} />
      <OrderSummary
        orderItems={orderItems}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </>
  );
}

export default App;
