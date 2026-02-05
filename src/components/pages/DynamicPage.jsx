import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPage } from "../../api/pages";
import SectionRenderer from "../../components/SectionRenderer";

const DynamicPage = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetchPage(slug || "home").then(res => setPage(res.data));
    console.log(slug);
  }, [slug]);

  if (!page) return <div className="p-10 text-center">Loading...</div>;

  return (
    <>
      {page.sections.map(section => (
        <SectionRenderer key={section.id} section={section} />
      ))}
    </>
  );
};

export default DynamicPage;



