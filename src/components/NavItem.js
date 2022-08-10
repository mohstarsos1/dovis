import { Link } from "react-router-dom";

function NavItem({ children, link, isHref }) {
  return (
    <>
      {!isHref ? (
        <Link to={link}>
          <li className="p-1 px-2 hover:underline-offset-8 hover:underline hover:cursor-pointer active:bg-teal-500 transition-all">
            {children}
          </li>
        </Link>
      ) : (
        <a
          href={link}
          className="p-1 px-2 hover:underline-offset-8 hover:underline hover:cursor-pointer active:bg-teal-500 transition-all"
        >
          {children}
        </a>
      )}
    </>
  );
}

export default NavItem;
