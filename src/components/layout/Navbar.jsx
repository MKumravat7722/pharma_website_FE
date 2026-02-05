import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPages } from "../../api/pages";

const Navbar = () => {
  const [pages, setPages] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchPages().then(res => setPages(res.data));
  }, []);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-amber-700"
          onClick={() => setOpen(false)}
        >
          Brew Café
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {pages.map(page => (
            <Link
              key={page.slug}
              to={page.slug === "home" ? "/" : `/${page.slug}`}
              className="hover:text-amber-700 transition"
            >
              {page.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <div className="flex flex-col px-4 py-4 space-y-3 text-gray-700 font-medium">
            {pages.map(page => (
              <Link
                key={page.slug}
                to={page.slug === "home" ? "/" : `/${page.slug}`}
                className="py-2 border-b last:border-none hover:text-amber-700 transition"
                onClick={() => setOpen(false)}
              >
                {page.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
