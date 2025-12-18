export default function RichTextSection({ section }) {
  return (
    <section className="py-12 max-w-4xl mx-auto px-4 text-gray-700">
      <div
        dangerouslySetInnerHTML={{ __html: section.content.html }}
      />
    </section>
  );
}
