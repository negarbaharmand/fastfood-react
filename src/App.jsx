import { useState } from "react";
import MenuList from "./components/MenuList";
import ShowOrder from "./components/ShowOrder";

function App() {
  const menuItemData = [
    {
      title: "Pizza",
      description: "This is the first advertisement.",
      image: "https://placehold.co/400",
      price: 175,
    },
    {
      title: "Hamburger",
      description: "This is the second advertisement.",
      image: "https://placehold.co/400",
      price: 175,
    },
    {
      title: "Hotdog",
      description: "This is the third advertisement.",
      image: "https://placehold.co/400",
      price: 175,
    },
    {
      title: "Pizza",
      description: "This is the first advertisement.",
      image: "https://placehold.co/400",
      price: 175,
    },
    {
      title: "Hamburger",
      description: "This is the second advertisement.",
      image: "https://placehold.co/400",
      price: 175,
    },
    {
      title: "Hotdog",
      description: "This is the third advertisement.",
      image: "https://placehold.co/400",
      price: 175,
    },
  ];
  const [orderItems, setOrderItems] = useState([]);
  const [theme, setTheme] = useState("light");

  const addToOrder = (menuItem) => {
    // Check if the item is already in the order
    const existingItem = orderItems.find(
      (item) => item.title === menuItem.title
    );

    if (existingItem) {
      // If the item exists, update its quantity
      const updatedOrder = orderItems.map((item) =>
        item.title === menuItem.title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setOrderItems(updatedOrder);
    } else {
      // If the item is not in the order, add it with quantity 1
      setOrderItems([...orderItems, { ...menuItem, quantity: 1 }]);
    }
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
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
    <div className={`App ${theme}`}>
      <MenuList menuItems={menuItemData} addToOrder={addToOrder} />
      <ShowOrder
        orderItems={orderItems}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
