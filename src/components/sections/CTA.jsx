import { Link } from "react-router-dom";

const CTA = ({ data }) => (
  <section className="py-16 bg-amber-700 text-white text-center px-4">
    <h2 className="text-3xl font-bold mb-4">
      {data.content.heading}
    </h2>
    <p className="mb-6">{data.content.subheading}</p>
    <Link
      to={data.content.cta_link}
      className="bg-white text-amber-700 px-6 py-3 rounded-full font-semibold"
    >
      {data.content.cta_text}
    </Link>
  </section>
);

export default CTA;
