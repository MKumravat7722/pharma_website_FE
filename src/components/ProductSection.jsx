import { useState } from "react";
import CategoryFilter from "./CategoryFilter";

export default function ProductSection({ products, categories }) {
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredProducts = activeCategory
    ? products.filter(p => p.category.slug === activeCategory)
    : products;

  return (
    <section id="products" className="py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Our Products
      </h2>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onChange={setActiveCategory}
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded-lg p-4">
            <img
              src={product.images[0]}
              alt={product.name}
              className="h-40 w-full object-cover rounded"
            />

            <h3 className="mt-4 font-bold">{product.name}</h3>
            <p className="text-sm text-gray-600">
              {product.short_description}
            </p>

            <p className="text-sm mt-2">
              <strong>Dosage:</strong> {product.dosage.adult}
            </p>

            {product.documents.length > 0 && (
              <a
                href={product.documents[0].url}
                target="_blank"
                className="text-blue-700 underline mt-2 inline-block"
              >
                View Leaflet
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
