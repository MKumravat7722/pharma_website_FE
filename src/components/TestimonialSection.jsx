export default function TestimonialSection({ testimonials }) {
  return (
    <section className="py-16 bg-blue-50">
      <h2 className="text-2xl text-center mb-8">
        What Doctors Say
      </h2>

      <div className="flex justify-center gap-6 flex-wrap">
        {testimonials.map(t => (
          <div key={t.id} className="bg-white p-6 rounded w-72 text-center">
            <img
              src={t.photo}
              className="w-20 h-20 rounded-full mx-auto"
            />
            <p className="italic mt-4">"{t.quote}"</p>
            <p className="mt-2 font-semibold">{t.author}</p>
            <p className="text-sm text-gray-500">{t.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
