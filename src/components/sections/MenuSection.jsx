const MenuSection = ({ data }) => (
  <section className="bg-[#fdf6ee] py-16">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Our Menu
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.content.items.map((item, idx) => (
          <div
            key={idx}
            className="flex justify-between border-b pb-3"
          >
            <span className="font-medium">{item.name}</span>
            <span className="font-semibold">₹{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuSection;
