import Hero from "./sections/Hero";
import TextSection from "./sections/TextSection";
import MenuSection from "./sections/MenuSection";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Location from "./sections/Location";
import Merchandise from "./sections/Merchandise";
import CTA from "./sections/CTA";


const SectionRenderer = ({ section }) => {
  switch (section.type) {
    case "hero":
      return <Hero data={section} />;
    case "text":
      return <TextSection data={section} />;
    case "menu":
      return <MenuSection data={section} />;
    case "gallery":
      return <Gallery data={section} />;
    case "contact":
      return <Contact data={section} />;
      case "location":
        return <Location data={section} />;
        case "merchandise":
        return <Merchandise data={section} />;
        case "cta":
        return <CTA data={section} />;

    default:
      return null;
  }
};

export default SectionRenderer;
