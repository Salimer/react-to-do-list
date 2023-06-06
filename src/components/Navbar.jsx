import { useState, useRef, useEffect } from "react";

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
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li ref={ref}>
            <button onClick={() => setDropdown((prev) => !prev)}>
              Services <span>&#8595;</span>
            </button>
            {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
            )} 
          </li>
        </ul>
      </nav>
    );
  };
  export default Navbar;