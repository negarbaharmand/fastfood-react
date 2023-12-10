import MenuItem from "./MenuItem";

function MenuList({ menuItems, addToOrder }) {
  return (
    <div className="row m-3">
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
