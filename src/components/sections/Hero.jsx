const Hero = ({ data }) => {
  const image = data.images?.[0];

  return (
    <section className="relative h-[70vh]">
      <img
        src={image}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
        <div className="text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {data.content.heading}
          </h1>
          <p className="text-lg md:text-xl mb-6">
            {data.content.subheading}
          </p>
          <a
            href={data.content.cta_link}
            className="inline-block bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-full text-white font-semibold"
          >
            {data.content.cta_text}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
