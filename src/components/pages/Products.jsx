import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../api/api";
import { addToCart } from "../../redux/actions/cartActions";

export default function Products({ search }) {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const { cart, loading } = useSelector((state) => state.cart);

  useEffect(() => {
    getProducts(search).then(setProducts);
  }, [search]);

  const getQuantity = (productId) => {
    const item = cart?.cart_items?.find(
      (i) => i.product_id === productId
    );
    return item ? item.quantity : 0;
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Products</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => {
          const qty = getQuantity(product.id);

          return (
            <div key={product.id} className="border p-4 rounded relative">

              {qty > 0 && (
                <span className="absolute top-2 right-2 bg-blue-700 text-white text-xs px-2 py-1 rounded-full">
                  In Cart: {qty}
                </span>
              )}

              <img
                src={product.images?.[0]}
                alt={product.name}
                className="h-40 w-full object-cover"
              />

              <h3 className="font-bold mt-3">{product.name}</h3>
              <p className="text-sm text-gray-600">
                {product.short_description}
              </p>

              <button
                disabled={loading}
                onClick={() => dispatch(addToCart(product.id))}
                className={`mt-4 w-full px-4 py-2 rounded
                  ${qty > 0 ? "bg-green-600" : "bg-blue-700"}
                  text-white disabled:opacity-50`}
              >
                {qty > 0 ? "Add More" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
