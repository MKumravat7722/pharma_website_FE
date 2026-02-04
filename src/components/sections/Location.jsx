const Location = ({ data }) => {
  const { address, hours, map_embed_url } = data.content;

  return (
    <section className="py-16 px-4 md:px-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Our Location</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-lg mb-2"><strong>Address:</strong> {address}</p>
          <p className="text-lg mb-4"><strong>Hours:</strong> {hours}</p>
        </div>

        <iframe
          src={map_embed_url}
          className="w-full h-64 rounded-lg"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Location;
