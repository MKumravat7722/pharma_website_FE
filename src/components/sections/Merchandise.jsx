const Merchandise = ({ data }) => (
  <section className="py-16 bg-[#faf7f2]">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Merchandise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.content.items.map((item, i) => (
          <div
            key={i}
            className="flex justify-between bg-white p-4 rounded-lg shadow"
          >
            <span className="font-medium">{item.name}</span>
            <span className="font-semibold">₹{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Merchandise;
