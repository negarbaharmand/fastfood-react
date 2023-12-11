import { useState } from "react";
import MenuList from "./components/MenuList";
import OrderSummary from "./components/OrderSummary";
import HeaderBox from "./components/HeaderBox";
import { useEffect } from "react";
import burgerImg from "./assets/images/burger.jpeg";
import icecreamImg from "./assets/images/icecream.jpeg";
import pizzaImg from "./assets/images/pizza.jpeg";
import saladImg from "./assets/images/salad.jpeg";
import spaghettiImg from "./assets/images/spaghetti.jpeg";
import sushiImg from "./assets/images/sushi.jpeg";

function App() {
  const menuItemData = [
    {
      title: "🍕 Pizza",
      description:
        "A classic Margherita pizza with tomato, mozzarella, and basil.",
      image: pizzaImg,
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
      image: spaghettiImg,
      price: 120,
    },
    {
      title: "🍣 Sushi",
      description: "Fresh sushi rolls with a variety of fish and vegetables.",
      image: sushiImg,
      price: 200,
    },
    {
      title: "🥗 Salad",
      description:
        "A healthy salad bowl with mixed greens and balsamic vinaigrette.",
      image: saladImg,
      price: 90,
    },
    {
      title: "🍦 Ice Cream",
      description:
        "Creamy vanilla ice cream topped with chocolate sauce and sprinkles.",
      image: icecreamImg,
      price: 50,
    },
  ];

  const [orderItems, setOrderItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    <div>
      <HeaderBox
        toggleMenu={toggleModeHandler}
        darkMode={darkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="app-wrapper" style={{ margin: "40px 100px 100px 100px" }}>
        <MenuList
          menuItems={menuItemData.filter(
            (menuItem) =>
              menuItem.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase()) ||
              menuItem.description
                .toLowerCase()
                .includes(searchQuery.toLocaleLowerCase())
          )}
          addToOrder={addToOrder}
        />
        <OrderSummary
          orderItems={orderItems}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          id="order-summary"
        />
      </div>
    </div>
  );
}

export default App;
