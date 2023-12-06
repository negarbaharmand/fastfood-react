import MenuItem from "./MenuItem";

function MenuList({ menuItems, addToOrder }) {
  return (
    <div id="menuItems" className="row m-5">
      <div className="m-2">
        <h3>Menu</h3>
      </div>
      {menuItems.map((menuItem) => (
        <MenuItem
          key={menuItem.title}
          menuItem={menuItem}
          addToOrder={addToOrder}
        />
      ))}
    </div>
  );
}

export default MenuList;
