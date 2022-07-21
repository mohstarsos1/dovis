import NavItem from "./NavItem";

function Navbar() {
  return (
    <div className="bg-gray-200 py-4 px-2 shadow-lg">
      <ul className="flex space-x-4">
        <NavItem>item 1</NavItem>
        <NavItem>item 2</NavItem>
        <NavItem>item 3</NavItem>
      </ul>
    </div>
  );
}

export default Navbar;
