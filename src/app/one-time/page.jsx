import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import React from "react";

const OneTimePage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper bg-light">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="One-Time Donation" />
        {/* Hero/Intro Section */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1 className="fw-bold text-success mb-3">Make a One-Time Donation</h1>
                <p className="lead mb-4">
                  Your one-time gift to Al-Zohra Welfare Association brings immediate relief and hope to families in need. Every rupee you give goes directly to food, education, medical aid, and emergency support for Karachi's most vulnerable.
                </p>
                <ul className="list-unstyled mb-4">
                  <li><i className="fa fa-check-circle text-success me-2"></i>100% of your donation reaches those in need</li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Choose where your support goes: food, education, medical, or general aid</li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Registered, audited, and trusted since 1991</li>
                </ul>
                <a href="/contact-us" className="btn btn-success btn-lg shadow">Donate Now</a>
              </div>
              <div className="col-md-5 text-center">
                <img src="/assets/images/donation/bg.png" alt="One-Time Donation" className="img-fluid rounded shadow" style={{maxHeight: 320}} />
              </div>
            </div>
          </div>
        </section>
        {/* What You Can Support Section */}
        <section className="py-5 border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">What Your One-Time Gift Supports</h2>
            <div className="row g-4">
              <div className="col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-shopping-basket me-2"></i>Ration Packs</h5>
                    <p>Provide a month's worth of food staples to a family in need.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-graduation-cap me-2"></i>Education</h5>
                    <p>Fund school fees, books, and supplies for deserving children.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-medkit me-2"></i>Medical Aid</h5>
                    <p>Help cover urgent medical expenses, medicines, and treatments.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-hands-helping me-2"></i>Emergency & General Aid</h5>
                    <p>Support burial costs, disaster relief, or wherever the need is greatest.</p>
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
                  <li><i className="fa fa-users text-success me-2"></i>200+ families receive monthly rations</li>
                  <li><i className="fa fa-book text-success me-2"></i>Dozens of children supported in school each year</li>
                  <li><i className="fa fa-heart text-success me-2"></i>Countless lives touched by your generosity</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li><i className="fa fa-check text-success me-2"></i>Every donation is tracked and reported</li>
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
            <h2 className="fw-bold text-success mb-3">Give a One-Time Gift—Change a Life</h2>
            <p className="lead mb-4">Your support brings hope, dignity, and opportunity to those who need it most. Donate today or contact us to learn more.</p>
            <a href="/contact-us" className="btn btn-success btn-lg shadow">Donate or Ask a Question</a>
          </div>
        </section>
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default OneTimePage;