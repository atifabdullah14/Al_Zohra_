import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import React from "react";

const PartnerWithUsPage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper bg-light">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="Partner With Us" />
        {/* Hero/Intro Section */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1 className="fw-bold text-success mb-3">Partner With Al-Zohra</h1>
                <p className="lead mb-4">
                  Join hands with Al-Zohra Welfare Association to create lasting impact in Karachi. Your partnership—whether as a business, institution, or individual—helps us empower women, educate children, and uplift entire communities.
                </p>
                <ul className="list-unstyled mb-4">
                  <li><i className="fa fa-check-circle text-success me-2"></i>Corporate Social Responsibility (CSR) collaborations</li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Institutional and community partnerships</li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Individual and volunteer engagement</li>
                </ul>
                <a href="/contact-us" className="btn btn-success btn-lg shadow">Become a Partner</a>
              </div>
              <div className="col-md-5 text-center">
                <img src="/assets/images/community/partner.png" alt="Partner With Us" className="img-fluid rounded shadow" style={{maxHeight: 320}} />
              </div>
            </div>
          </div>
        </section>
        {/* Types of Partnerships Section */}
        <section className="py-5 border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">Ways to Partner</h2>
            <div className="row g-4">
              <div className="col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-building me-2"></i>Corporate Partners</h5>
                    <p>Support through CSR, employee giving, or in-kind donations. Make a difference with your brand.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-university me-2"></i>Institutions</h5>
                    <p>Partner as a school, college, or NGO to co-host events, run drives, or share expertise.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-users me-2"></i>Community Groups</h5>
                    <p>Mobilize your neighborhood, club, or association to support a cause or run a campaign.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-user-friends me-2"></i>Individuals</h5>
                    <p>Volunteer, fundraise, or advocate for Al-Zohra’s mission. Every effort counts!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Impact Section */}
        <section className="py-5 bg-success bg-opacity-10 border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">Our Impact—Together</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li><i className="fa fa-users text-success me-2"></i>Thousands of lives improved each year</li>
                  <li><i className="fa fa-book text-success me-2"></i>Hundreds of children educated and empowered</li>
                  <li><i className="fa fa-heart text-success me-2"></i>Women trained, families supported, communities uplifted</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li><i className="fa fa-check text-success me-2"></i>Transparent, accountable, and results-driven</li>
                  <li><i className="fa fa-certificate text-success me-2"></i>Registered, audited, and tax-exempt</li>
                  <li><i className="fa fa-bullseye text-success me-2"></i>Your partnership, our responsibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="py-5 text-center bg-white">
          <div className="container">
            <h2 className="fw-bold text-success mb-3">Partner With Us—Multiply Your Impact</h2>
            <p className="lead mb-4">Your support brings hope, dignity, and opportunity to Karachi. Partner today or contact us to learn more.</p>
            <a href="/contact-us" className="btn btn-success btn-lg shadow">Partner or Ask a Question</a>
          </div>
        </section>
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default PartnerWithUsPage;