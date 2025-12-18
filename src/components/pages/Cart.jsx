import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, loading } = useCart();

  if (loading) return <p className="p-10">Loading cart...</p>;

  if (!cart || cart.cart_items.length === 0) {
    return <p className="p-10">Cart is empty</p>;
  }

  return (
    <section className="py-16 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.cart_items.map(item => (
        <div key={item.id} className="border p-3 mb-2">
          {item.product.name} × {item.quantity}
        </div>
      ))}
    </section>
  );
}
