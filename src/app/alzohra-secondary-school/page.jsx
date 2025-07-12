import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import React from "react";

export const metadata = {
  title: "Al Zohra Secondary School | Al Zohra Welfare Association",
  description: "Education for a brighter future."
};

const AlZohraSecondarySchoolPage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="Al Zohra Secondary School" />
        <section className="alzohra-secondary-school-section py-5">
          <div className="container">
            <h1 className="mb-4 fw-bold text-success text-center">Al Zohra Secondary School</h1>
            <p className="lead text-center mb-0">
              Al Zohra Secondary School is dedicated to providing quality education and opportunities for youth. More details coming soon.
            </p>
          </div>
        </section>
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default AlZohraSecondarySchoolPage; 