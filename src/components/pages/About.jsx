import { useEffect, useState } from "react";
import { getPages } from "../../api/api";

export default function About() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    getPages().then(pages => {
      setPage(pages.find(p => p.slug === "about-us"));
    });
  }, []);

  if (!page) return null;

  return (
    <section className="py-20 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">{"Mohit"}</h2>

      {page.sections.map(sec => (
        <div
          key={sec.id}
          dangerouslySetInnerHTML={{ __html: sec.content.html }}
        />
      ))}
    </section>
  );
}
