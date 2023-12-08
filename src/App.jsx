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
    // <div className={`bg-light`}>
    //   <HeaderBox />
    //   <MenuList menuItems={menuItemData} addToOrder={addToOrder} />
    //   <OrderSummary
    //     orderItems={orderItems}
    //     incrementQuantity={incrementQuantity}
    //     decrementQuantity={decrementQuantity}
    //   />
    // </div>
    <>
      <HeaderBox />
      <div className="row">
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="card p-3 h-100">
            <a href="#">
              <img className="card-img-top" src={sampleImage} alt="" />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project One</a>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus
                sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum
                tempora ex quae? Nihil, dolorem!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="card p-3 h-100">
            <a href="#">
              <img className="card-img-top" src={sampleImage} alt="" />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project Two</a>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                viverra euismod odio, gravida pellentesque urna varius vitae.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="card p-3 h-100">
            <a href="#">
              <img className="card-img-top" src={sampleImage} alt="" />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project Three</a>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                quisquam, error quod sed cumque, odio distinctio velit nostrum
                temporibus necessitatibus et facere atque iure perspiciatis
                mollitia recusandae vero vel quam!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="card p-3 h-100">
            <a href="#">
              <img className="card-img-top" src={sampleImage} alt="" />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project Four</a>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                viverra euismod odio, gravida pellentesque urna varius vitae.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="card p-3 h-100">
            <a href="#">
              <img className="card-img-top" src={sampleImage} alt="" />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project Five</a>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                viverra euismod odio, gravida pellentesque urna varius vitae.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 mb-4">
          <div className="card p-3 h-100">
            <a href="#">
              <img className="card-img-top" src={sampleImage} alt="" />
            </a>
            <div className="card-body">
              <h4 className="card-title">
                <a href="#">Project Six</a>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                earum nostrum suscipit ducimus nihil provident, perferendis rem
                illo, voluptate atque, sit eius in voluptates, nemo repellat
                fugiat excepturi! Nemo, esse.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /.row --> */}
    </>
  );
}

export default App;
