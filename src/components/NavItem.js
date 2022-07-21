function NavItem({ children }) {
  return (
    <li className="p-1 px-2 bg-teal-800 rounded shadow-lg text-white">
      {children}
    </li>
  );
}

export default NavItem;
