import MenuItem from "./MenuItem";

function MenuList({ menuItems, addToOrder }) {
  return (
    <div className="row">
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
