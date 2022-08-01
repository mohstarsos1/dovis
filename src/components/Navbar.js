import NavItem from "./NavItem";
import { routes } from "../utils/RoutesAddress";

function Navbar() {
  return (
    <div className="bg-gray-200 py-4 px-2 shadow-lg flex justify-between">
      <ul className="flex space-x-4">
        {routes.map((item, idx) => (
          <NavItem link={item.path} isHref={item.isHref} key={idx}>
            {item.name}
          </NavItem>
        ))}
      </ul>
      <div className="font-bold text-xl text-teal-900">Dovis Technology</div>
    </div>
  );
}

export default Navbar;
