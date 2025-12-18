import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar({ search, setSearch }) {

  // ✅ Redux is the single source of truth
  const cartCount =
    useSelector((state) => state.cart.cart?.cart_items?.length) || 0;

  const loading = useSelector((state) => state.cart.loading);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <Link to="/" className="text-xl font-bold text-blue-800">
          MediCure Pharma
        </Link>

        <input
          type="text"
          placeholder="Search medicines..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-1 w-64"
        />

        <nav className="flex items-center gap-6">
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart" className="font-medium">
            Cart {loading ? "" : `(${cartCount})`}
          </Link>
        </nav>

      </div>
    </header>
  );
}
