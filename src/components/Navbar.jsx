import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];
const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    const ref = useRef();
  console.log(ref);

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", handler);
        };
  }, [dropdown]);
    return (
      <nav className="navbar">
        <ul>
        {links.map((link) => {
        return (
          <li key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        );
      })}
    </ul>
      </nav>
    );
  };
  export default Navbar;