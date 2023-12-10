import { useState } from "react";
import MenuList from "./components/MenuList";
import OrderSummary from "./components/OrderSummary";
import HeaderBox from "./components/HeaderBox";
import { useEffect } from "react";
import burgerImg from "./assets/images/burger.jpeg";

function App() {
  const menuItemData = [
    {
      title: "🍕 Pizza",
      description:
        "A classic Margherita pizza with tomato, mozzarella, and basil.",
      image: "https://placehold.co/400x400",
      price: 175,
    },
    {
      title: "🍔 Hamburger",
      description: "Juicy beef patty topped with lettuce on a sesame seed bun.",
      image: burgerImg,
      price: 150,
    },
    {
      title: "🍝 Spaghetti",
      description:
        "Spaghetti served with rich marinara sauce and Parmesan cheese.",
      image: "https://placehold.co/400x400",
      price: 120,
    },
    {
      title: "🍣 Sushi",
      description: "Fresh sushi rolls with a variety of fish and vegetables.",
      image: "https://placehold.co/400x400",
      price: 200,
    },
    {
      title: "🥗 Salad",
      description:
        "A healthy salad bowl with mixed greens and balsamic vinaigrette.",
      image: "https://placehold.co/400x400",
      price: 90,
    },
    {
      title: "🍦 Ice Cream",
      description:
        "Creamy vanilla ice cream topped with chocolate sauce and sprinkles.",
      image: "https://placehold.co/400x400",
      price: 50,
    },
  ];

  const [orderItems, setOrderItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const toggleModeHandler = () => {
    setDarkMode(!darkMode);
  };

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
    const updatedOrder = orderItems
      .map((item) =>
        item.title === menuItem.title
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setOrderItems(updatedOrder);
  };

  useEffect(() => {
    const colorMode = darkMode ? "dark" : "light";
    document.body.setAttribute("data-bs-theme", colorMode);
  }, [darkMode]);

  return (
    <>
      <HeaderBox toggleMenu={toggleModeHandler} darkMode={darkMode} />
      <MenuList menuItems={menuItemData} addToOrder={addToOrder} />
      <OrderSummary
        orderItems={orderItems}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        id="order-summary"
      />
    </>
  );
}

export default App;
