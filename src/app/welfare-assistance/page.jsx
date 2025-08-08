import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import React from "react";

const stats = [
  { label: "Years Serving Karachi", value: "34+" },
  { label: "Monthly Ration Packs", value: "200+" },
  { label: "Wedding Assistances", value: "300+" },
  { label: "Cash Disbursements", value: "Countless" },
];

const WelfareAssistancePage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper bg-light">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="Welfare Assistance" />
        {/* Hero/Intro Section */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1 className="fw-bold text-success mb-3">Welfare Assistance at Al-Zohra</h1>
                <p className="lead mb-4">
                  Al-Zohra Welfare Association is a grassroots, registered non-profit dedicated to uplifting marginalized communities in Karachi since 1991. Our mission is to empower women, support families, and provide dignity through targeted welfare programs.
                </p>
                <ul className="list-unstyled mb-4">
                  <li><i className="fa fa-check-circle text-success me-2"></i>Ration Distribution</li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Wedding Welfare</li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Cash Disbursement</li>
                </ul>
                <a href="/contact-us" className="btn btn-success btn-lg shadow">Support Our Cause</a>
              </div>
              <div className="col-md-5 text-center">
                <img src="/assets/images/community/gift.png" alt="Welfare Assistance" className="img-fluid rounded shadow" style={{maxHeight: 320}} />
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-5 bg-success bg-opacity-10 border-bottom">
          <div className="container">
            <div className="row text-center">
              {stats.map((stat, idx) => (
                <div className="col-6 col-md-3 mb-4" key={idx}>
                  <div className="bg-white rounded shadow p-4 h-100">
                    <div className="display-5 fw-bold text-success mb-2">{stat.value}</div>
                    <div className="fw-semibold text-secondary">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* How It Started / How It's Going */}
        <section className="py-5 border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img src="/assets/images/community/mask.png" alt="Our Journey" className="img-fluid rounded shadow" />
              </div>
              <div className="col-md-6">
                <h2 className="fw-bold text-success mb-3">How It Started</h2>
                <p>
                  Founded by Respected Zohra Begum in 1991, Al-Zohra began in a humble two-room quarter in Punjab Colony, Karachi, providing rations, free clinics, and basic literacy to Zakat-eligible women and children.
                </p>
                <h2 className="fw-bold text-success mb-3 mt-4">How It's Going</h2>
                <p>
                  Now, after 34 years, Al-Zohra operates from a six-storey building and a new campus, running a secondary school, two vocational centers, and distributing monthly rations to over 200 families. Our impact is made possible by the dedication of Mrs. Nighat and her team.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Welfare Programs Section */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">Our Welfare Programs</h2>
            <div className="row g-5">
              {/* Ration Distribution */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h4 className="fw-bold text-success mb-3"><i className="fa fa-shopping-basket me-2"></i>Ration Distribution</h4>
                    <p>We provide monthly ration packs (valued at Rs. 5,500) to 200+ Zakat-eligible families in 32 low-income areas of Karachi. Packs include flour, rice, ghee, milk, sugar, tea, lentils, chickpeas, and more. Seasonal essentials and Eid/ Ramadan packs are also distributed.</p>
                    <ul>
                      <li><b>Areas:</b> Baldia, Korangi, Orangi, Surjani, Malir, Landhi, Kemari, and more</li>
                      <li><b>Selection:</b> Widowed grandmothers, elderly women, single mothers, families with chronic illness/disability, and exceptional cases</li>
                      <li><b>Verification:</b> Interviews, home visits, board approval</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Wedding Welfare */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h4 className="fw-bold text-success mb-3"><i className="fa fa-ring me-2"></i>Wedding Welfare</h4>
                    <p>Wedding assistance is available for cardholders and Zakat-eligible applicants. After thorough verification, we provide essential wedding packs (crockery, clothes, cash, and supplies) to help brides start their new lives with dignity.</p>
                    <ul>
                      <li><b>Areas:</b> Same as ration program</li>
                      <li><b>Selection:</b> Cardholder dependents, Zakat-verified applicants, non-Muslim and staff support</li>
                      <li><b>Items:</b> Crockery, bridal/groom clothes, watches, jewelry, Quran, prayer mat, cash</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Cash Disbursement */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h4 className="fw-bold text-success mb-3"><i className="fa fa-hand-holding-usd me-2"></i>Cash Disbursement</h4>
                    <p>We provide cash support to elderly, homebound women, higher education candidates, and in emergencies (medicine, burial, etc). All requests are verified and approved by the board.</p>
                    <ul>
                      <li><b>Areas:</b> Karachi-wide, especially for those unable to collect rations</li>
                      <li><b>Selection:</b> Elderly, disabled, students, urgent needs</li>
                      <li><b>Items:</b> Cash, medicine, education fees, burial support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="py-5 text-center bg-success bg-opacity-10">
          <div className="container">
            <h2 className="fw-bold text-success mb-3">Support Our Welfare Programs</h2>
            <p className="lead mb-4">Your support helps us provide dignity, hope, and essential resources to Karachi's most vulnerable. Join us as a donor, volunteer, or advocate.</p>
            <a href="/contact-us" className="btn btn-success btn-lg shadow">Get Involved</a>
          </div>
        </section>
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default WelfareAssistancePage; 