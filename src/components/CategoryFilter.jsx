export default function CategoryFilter({
  categories,
  activeCategory,
  onChange
}) {
  return (
    <div className="flex gap-3 justify-center mb-10 flex-wrap">
      
      <button
        onClick={() => onChange(null)}
        className={`px-4 py-2 rounded-full border
          ${!activeCategory
            ? "bg-blue-700 text-white"
            : "bg-white text-gray-700"
          }`}
      >
        All
      </button>

      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.slug)}
          className={`px-4 py-2 rounded-full border
            ${activeCategory === cat.slug
              ? "bg-blue-700 text-white"
              : "bg-white text-gray-700"
            }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}
