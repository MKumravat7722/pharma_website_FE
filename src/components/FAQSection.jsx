export default function FAQSection({ faqs }) {
  return (
    <section className="bg-gray-50 py-16">
      <h2 className="text-2xl text-center mb-8">FAQs</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map(faq => (
          <div key={faq.id} className="bg-white p-4 rounded shadow">
            <h4 className="font-semibold">{faq.question}</h4>
            <p className="text-gray-600 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
