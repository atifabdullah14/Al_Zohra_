import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactOne from "@/components/ContactOne";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import DifferenceTwo from "@/components/DifferenceTwo";
import FaqOne from "@/components/FaqOne";
import FooterOne from "@/components/FooterOne";
import GalleryOne from "@/components/GalleryOne";
import HeaderOne from "@/components/HeaderOne";
import HelpOne from "@/components/HelpOne";
import Preloader from "@/components/Preloader";
import TeamTwo from "@/components/TeamTwo";
import TestimonialOne from "@/components/TestimonialOne";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

// ✅ Custom Story Sections
import OurStoryIntro from "@/components/OurStoryIntro";
import TimelineJourney from "@/components/TimelineJourney";
import ImpactSection from "@/components/ImpactSection";

export const metadata = {
  title: "Al Zohra Welfare Association",
  description: "Al Zohra Welfare Association",
};

const page = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        {/* Preloader */}
        <Preloader />

        {/* Custom Cursor */}
        <CustomCursor />

        {/* TopBar */}
        <TopBarOne />

        {/* Header */}
        <HeaderOne />

        {/* Breadcrumb */}
        <BreadcrumbOne title="Our Story" />

        {/* Optional: Gallery (if relevant to story) */}
        <GalleryOne />

        {/* Our Story Intro */}
        <OurStoryIntro />

        {/* Timeline Journey */}
        <TimelineJourney />

        {/* Impact Numbers */}
        <ImpactSection />

        {/* Call To Action */}
        <CtaSectionTwo />

        {/* Footer */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
