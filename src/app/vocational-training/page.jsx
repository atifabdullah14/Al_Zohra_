import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import React from "react";

export const metadata = {
  title: "Vocational Training | Al Zohra Welfare Association",
  description: "Empowering individuals with skills for a better future."
};

const VocationalTrainingPage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="Vocational Training" />
        <section className="vocational-training-section py-5">
          <div className="container">
            <h1 className="mb-4 fw-bold text-success text-center">Vocational Training</h1>
            <p className="lead text-center mb-0">
              Our vocational training programs empower individuals with practical skills, opening doors to employment and self-sufficiency. More details coming soon.
            </p>
          </div>
        </section>
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default VocationalTrainingPage; 