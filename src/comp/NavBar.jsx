import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
  const [scroll, setScroll] = useState(false);

  // logic khi scrollY > 100px
  useEffect(function () {
    function handleScroll() {
      if (window.scrollY > 100) setScroll(true);
      else setScroll(false);
    }
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 text-white flex justify-between items-center py-4 px-12 text-[32px] ${
        scroll ? "bg-black" : "bg-transparent"
      }`}>
      <Link to="/">
        <h1 className="text-red-600">Movie App</h1>
      </Link>
      <Link to="/search">
        <div className="text-gray-300">
          <FaSearch />
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
