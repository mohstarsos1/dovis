import NavItem from "./NavItem";

function Navbar() {
  return (
    <div className="bg-gray-200 py-4 px-2 mb-2 shadow-lg flex justify-between">
      <ul className="flex space-x-4">
        <NavItem link="/">Home</NavItem>
        <NavItem link="/weather">Weather</NavItem>
      </ul>
      <div className="font-bold text-xl text-teal-900">Dovis Technology</div>
    </div>
  );
}

export default Navbar;
