const TextSection = ({ data }) => (
  <section className="max-w-6xl mx-auto px-6 py-16">
    <h2 className="text-3xl font-bold mb-4 text-center">
      {data.content.title}
    </h2>
    <p className="text-gray-600 text-lg text-center">
      {data.content.description}
    </p>
  </section>
);

export default TextSection;
