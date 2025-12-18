export default function HeroSection({ section }) {
  return (
    <section className="bg-blue-50 py-24 text-center">
      <h1 className="text-4xl font-bold text-blue-900">
        {section.content.heading}
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        {section.content.subheading}
      </p>
    </section>
  );
}
