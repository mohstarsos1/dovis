function NavItem({ children }) {
  return (
    <li className="p-1 px-2 bg-teal-800 rounded shadow-lg text-white hover:bg-teal-600 hover:cursor-pointer active:bg-teal-500 transition-all">
      {children}
    </li>
  );
}

export default NavItem;
