import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const go = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b-[1px] p-2 border-gray-500">
      <div className="flex justify-between items-center h-[60px] mx-6 px-2 box-border lg:max-w-[1024px] lg:mx-auto lg:px-0">
        {/* Navigation Links for Large Screens */}
        <div className="hidden sm:flex justify-center space-x-6">
          <span className="cursor-pointer" onClick={() => go("/OurStores")}>
            Locations
          </span>
          <span className="cursor-pointer" onClick={() => go("/Products")}>
            Shop
          </span>
          <span className="cursor-pointer" onClick={() => go("/AboutUs")}>
            About
          </span>
        </div>

        {/* Middle Section (Logo) */}
        <div className="flex justify-center items-center flex-grow sm:flex-grow-0 absolute left-1/2 transform -translate-x-1/2">
          <img
            className="h-12 cursor-pointer"
            src="/images/logo/NT.png"
            alt="Tucker logo"
            onClick={() => (isMenuOpen ? setIsMenuOpen(false) : go("/"))}
          />
        </div>

        {/* Right Section (Cart and User - only visible on larger screens) */}
        <div className="hidden sm:flex items-center space-x-6">
          <span className="cursor-pointer" onClick={() => go("/Cart")}>
            Cart
          </span>
          <span className="cursor-pointer" onClick={() => go("/SignUp")}>
            Account
          </span>
        </div>

        {/* Left Section (Hamburger Icon for Mobile) */}
        <div className="sm:hidden flex items-center">
          <button
            className="h-8 w-8 text-black font-bold flex justify-center items-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="sm:hidden flex flex-col items-center space-y-4 py-4">
          <span className="cursor-pointer" onClick={() => go("/OurStores")}>
            Locations
          </span>
          <span className="cursor-pointer" onClick={() => go("/Products")}>
            Shop
          </span>
          <span className="cursor-pointer" onClick={() => go("/AboutUs")}>
            About
          </span>
          <span className="cursor-pointer" onClick={() => go("/Cart")}>
            Cart
          </span>
          <span className="cursor-pointer" onClick={() => go("/SignUp")}>
            Account
          </span>
        </div>
      )}
    </header>
  );
};
export default Header;
