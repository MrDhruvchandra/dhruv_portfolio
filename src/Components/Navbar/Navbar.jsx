import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About Me",
    link: "/about",
  },
  {
    id: 3,
    name: "Projects",
    link: "/projects",
  },
  {
    id: 4,
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className="relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <p className="text-3xl">
              DHRUVCHANDRA <span className="font-bold">MAURYA</span>
            </p>
          </div>
          {/* Desktop Menu Section */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link} // Use Link for routing
                    className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              {/* Dark Mode Feature */}
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile View Sidebar */}
          <div className="md:hidden block">
            <div className="flex items-center gap-4">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer"
                  size={30}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {showMenu && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-black shadow-lg md:hidden">
          <ul className="flex flex-col items-center py-4">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id} className="py-2">
                <Link
                  to={link} // Use Link for routing
                  onClick={toggleMenu} // Close menu on click
                  className="text-xl font-semibold hover:text-primary transition-colors duration-500"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
