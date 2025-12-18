import { useEffect, useState } from "react";
import { getPages } from "../../api/api";

export default function Home() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    getPages().then(pages => {
      setPage(pages.find(p => p.slug === "home"));
    });
  }, []);

  if (!page) return null;

  return (
    <div>
      {page.sections
        .sort((a, b) => a.position - b.position)
        .map(section => {
          if (section.section_type === "hero") {
            return (
              <section key={section.id} className="py-24 text-center bg-blue-50">
                <h1 className="text-5xl font-bold">
                  {section.content.heading}
                </h1>
                <p className="mt-4 text-xl">
                  {section.content.subheading}
                </p>
              </section>
            );
          }

          if (section.section_type === "rich_text") {
            return (
              <section
                key={section.id}
                className="max-w-4xl mx-auto py-12"
                dangerouslySetInnerHTML={{
                  __html: section.content.html,
                }}
              />
            );
          }

          return null;
        })}
    </div>
  );
}
