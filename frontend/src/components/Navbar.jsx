import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logoIme from "../assets/logo/logo-img.png"; // Default logo
import logoScrolled from "../assets/logo/logo-img1.png"; // <-- Add your second logo here

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdowns = {
    ABOUT: [
      { name: "ABOUT", link: "/about" },
      { name: "FAQ", link: "/faq" },
      { name: "CONTACT", link: "/contact" },
    ],
    COMMUNITIES: [
      { name: "Destin", link: "/communities/destin" },
      { name: "Okaloosa Island", link: "/communities/okaloosa" },
      { name: "Santa Rosa Beach", link: "/communities/santa-rosa" },
      { name: "Navarre Beach", link: "/communities/navarre" },
    ],
    "WHAT WE OFFER": [{ name: "Properties", link: "/properties" }],
  };

  const menuItems = [
    { name: "HOME", link: "/" },
    { name: "COMMUNITIES" },
    { name: "WHAT WE OFFER" },
    { name: "SPECIALS", link: "/specials" },
    { name: "ACTIVITIES", link: "/activities" },
    { name: "REVIEWS", link: "/reviews" },
    { name: "CALENDARS", link: "/calendars" },
    { name: "ABOUT" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {/* --- Top Row (Logo + Phone) --- */}
      <div
        className={`flex justify-between items-center px-10 py-3 transition-colors duration-300 ${
          isScrolled ? "text-gray-800" : "text-white"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={isScrolled ? logoScrolled : logoIme}
            alt="Coastal Dream Rentals"
            className="w-84 object-contain transition-all duration-300"
          />
        </Link>

        {/* Contact */}
        <div className="flex items-center space-x-3 transition-all duration-300">
          <div className="text-right leading-tight">
            <p className="text-1xl font-bold">Call today</p>
            <p
              className={`font-bold text-2xl transition-colors duration-300 ${
                isScrolled ? "text-[#185089]" : "text-white"
              }`}
            >
              {isScrolled ? "850-974-4757" : "850-974-4757"}
            </p>
          </div>
          <Phone
            size={24}
            className={`transition-colors duration-300 ${
              isScrolled ? "text-[#185089]" : "text-white"
            }`}
          />
        </div>
      </div>

      {/* --- Bottom Row (Nav Bar) --- */}
      <nav
        className="flex justify-center items-center space-x-10 font-semibold text-base transition-colors duration-300 bg-sky-400 text-white"
      >
        {menuItems.map((item) => {
          const hasDropdown = dropdowns[item.name];
          return (
            <div
              key={item.name}
              className="relative py-3 cursor-pointer"
              onMouseEnter={() => hasDropdown && setOpenDropdown(item.name)}
              onMouseLeave={() => hasDropdown && setOpenDropdown(null)}
            >
              {item.link ? (
                <Link to={item.link} className="hover:opacity-80">
                  {item.name}
                </Link>
              ) : (
                <span className="hover:opacity-80">{item.name}</span>
              )}

              {/* Dropdown */}
              {openDropdown === item.name && hasDropdown && (
                <ul className="absolute top-10 left-0 bg-blue-500 text-white rounded shadow-lg mt-1 min-w-[160px]">
                  {dropdowns[item.name].map((sub) => (
                    <li key={sub.name}>
                      <Link
                        to={sub.link}
                        className="block px-4 py-2 hover:bg-blue-600 whitespace-nowrap"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
