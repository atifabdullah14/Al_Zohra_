import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import React from "react";

const SponsorAChildPage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper bg-light">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="Sponsor a Child" />
        {/* Hero/Intro Section */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1 className="fw-bold text-success mb-3">Sponsor a Child—Change a Life</h1>
                <p className="lead mb-4">
                  Your sponsorship gives a child in Karachi the chance to learn, grow, and dream. At Al-Zohra, your support covers school fees, books, uniforms, nutrition, and care for children who need it most.
                </p>
                <ul className="list-unstyled mb-4">
                  <li><i className="fa fa-check-circle text-success me-2"></i>100% of your sponsorship goes to the child’s needs</li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Regular updates and progress reports</li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Registered, audited, and trusted since 1991</li>
                </ul>
                <a href="/contact-us" className="btn btn-success btn-lg shadow">Sponsor Now</a>
              </div>
              <div className="col-md-5 text-center">
                <img src="/assets/images/community/gift.png" alt="Sponsor a Child" className="img-fluid rounded shadow" style={{maxHeight: 320}} />
              </div>
            </div>
          </div>
        </section>
        {/* How Sponsorship Works Section */}
        <section className="py-5 border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">How Sponsorship Works</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-graduation-cap me-2"></i>Education</h5>
                    <p>Your support covers school fees, books, uniforms, and supplies for a deserving child.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-apple-alt me-2"></i>Nutrition & Care</h5>
                    <p>We ensure every sponsored child receives healthy meals and medical care as needed.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-heart me-2"></i>Mentorship & Support</h5>
                    <p>Our team provides guidance, encouragement, and a safe environment for every child to thrive.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Impact Section */}
        <section className="py-5 bg-success bg-opacity-10 border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">Your Impact</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li><i className="fa fa-users text-success me-2"></i>Dozens of children sponsored each year</li>
                  <li><i className="fa fa-book text-success me-2"></i>Improved school attendance and performance</li>
                  <li><i className="fa fa-heart text-success me-2"></i>Brighter futures for vulnerable children</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li><i className="fa fa-check text-success me-2"></i>Every sponsorship is tracked and reported</li>
                  <li><i className="fa fa-certificate text-success me-2"></i>Registered, audited, and tax-exempt</li>
                  <li><i className="fa fa-bullseye text-success me-2"></i>Your trust, our responsibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="py-5 text-center bg-white">
          <div className="container">
            <h2 className="fw-bold text-success mb-3">Sponsor a Child—Inspire a Future</h2>
            <p className="lead mb-4">Your support brings hope, dignity, and opportunity to a child in need. Sponsor today or contact us to learn more.</p>
            <a href="/contact-us" className="btn btn-success btn-lg shadow">Sponsor or Ask a Question</a>
          </div>
        </section>
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default SponsorAChildPage;