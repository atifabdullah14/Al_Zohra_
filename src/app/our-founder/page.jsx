import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TeamDetailsInner from "@/components/TeamDetailsInner";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
// import TeamInner from "@/components/TeamInner";
import TeamOne from "@/components/TeamOne";

export const metadata = {
  title: "Al Zohra Welfare Association",
  description: "Al Zohra Welfare Association",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

        {/* CustomCursor  */}
        <CustomCursor />

        {/* TopBarOne */}
        <TopBarOne />

        {/* HeaderOne */}
        <HeaderOne />

        {/* BreadcrumbOne */}
        {/* <BreadcrumbOne title='Our Founder' /> */}

        {/* TeamDetailsInner */}
        <TeamDetailsInner />
                
        {/* TeamOne */}
        <TeamOne />


        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
