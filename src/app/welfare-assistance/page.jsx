import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import React from "react";

export const metadata = {
  title: "Welfare Assistance | Al Zohra Welfare Association",
  description: "Providing support and aid to those in need."
};

const WelfareAssistancePage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="Welfare Assistance" />
        <section className="welfare-assistance-section py-5">
          <div className="container">
            <h1 className="mb-4 fw-bold text-success text-center">Welfare Assistance</h1>
            <p className="lead text-center mb-0">
              We offer welfare assistance to support families and individuals facing hardship. More details coming soon.
            </p>
          </div>
        </section>
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default WelfareAssistancePage; 