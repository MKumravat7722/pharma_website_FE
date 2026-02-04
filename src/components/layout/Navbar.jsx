import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPages } from "../../api/pages";

const Navbar = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    fetchPages().then(res => setPages(res.data));
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-amber-700">
          Brew Café
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {pages.map(page => (
            <Link
              key={page.slug}
              to={page.slug === "home" ? "/" : `/${page.slug}`}
              className="hover:text-amber-700"
            >
              {page.title}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
