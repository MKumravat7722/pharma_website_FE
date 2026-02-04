const Gallery = ({ data }) => {
  return (
    <section className="py-20 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        {data.content?.title && (
          <h2 className="text-4xl font-bold text-center mb-12">
            {data.content.title}
          </h2>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              {/* Image */}
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <p className="text-white text-lg font-semibold">
                  Brew Café Moment
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
