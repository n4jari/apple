import { useRef } from "react";

const Navbar = () => {
  const navItems = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"];
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("nav_responsive");
  };

  return (
    <div className="nav_container">
      <button onClick={showNavbar} className="bars_btn">
        <i className="fa fa-bars" />
      </button>

      <button>
        <i className="fa fa-apple" />
      </button>

      <nav ref={navRef}>

        <button onClick={showNavbar} className="remove_btn">
          <i className="fa fa-remove" />
        </button>
        {navItems.map((item, index) => (
          <a href="#" key={index}>
            {item}
          </a>
        ))}
        <button>
          <i className="fa fa-search" />
        </button>
      </nav>

      <button>
        <i className="fa fa-shopping-bag" />
      </button>
    </div>
  );
};

export default Navbar;
