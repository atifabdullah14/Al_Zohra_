import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import React from "react";

const ZakatSadqahPage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper bg-light">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="Zakat & Sadqah" />
        {/* Hero/Intro Section */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1 className="fw-bold text-success mb-3">Zakat & Sadqah at Al-Zohra</h1>
                <p className="lead mb-4">
                  Your Zakat and Sadqah can transform lives. Al-Zohra Welfare Association ensures your contributions reach the most deserving, providing food, education, and hope to Karachi's most vulnerable families.
                </p>
                <ul className="list-unstyled mb-4">
                  <li><i className="fa fa-check-circle text-success me-2"></i>100% transparent distribution</li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Direct support to widows, orphans, and the needy</li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Registered, audited, and trusted since 1991</li>
                </ul>
                <a href="/contact-us" className="btn btn-success btn-lg shadow">Give Zakat or Sadqah</a>
              </div>
              <div className="col-md-5 text-center">
                <img src="/assets/images/donation/thumb-bg.png" alt="Zakat & Sadqah" className="img-fluid rounded shadow" style={{maxHeight: 320}} />
              </div>
            </div>
          </div>
        </section>
        {/* How We Use Your Zakat & Sadqah */}
        <section className="py-5 border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">How Your Zakat & Sadqah Help</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-shopping-basket me-2"></i>Ration Packs</h5>
                    <p>Monthly food packs for 200+ families, including flour, rice, ghee, milk, sugar, tea, lentils, and more. Special Ramadan and Eid distributions.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-ring me-2"></i>Wedding Assistance</h5>
                    <p>Essential wedding packs and support for Zakat-eligible brides, including clothes, crockery, and basic supplies.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-hand-holding-usd me-2"></i>Cash & Emergency Aid</h5>
                    <p>Cash support for elderly, disabled, students, and urgent medical or burial needs, always verified and documented.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Impact & Transparency Section */}
        <section className="py-5 bg-success bg-opacity-10 border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">Impact & Transparency</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li><i className="fa fa-users text-success me-2"></i>249+ registered ration beneficiaries</li>
                  <li><i className="fa fa-user-shield text-success me-2"></i>Rigorous verification: interviews, home visits, board approval</li>
                  <li><i className="fa fa-book text-success me-2"></i>Manual registers, signatures, and itemized records for every distribution</li>
                  <li><i className="fa fa-bullseye text-success me-2"></i>90% of funding from global donations</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li><i className="fa fa-check text-success me-2"></i>Registered under Voluntary Social Welfare Agencies Ordinance, 1961</li>
                  <li><i className="fa fa-balance-scale text-success me-2"></i>Audited by Khalid Imam Co. (Chartered Accountants)</li>
                  <li><i className="fa fa-certificate text-success me-2"></i>Tax-exempt, NTN: 4105378-8</li>
                  <li><i className="fa fa-heart text-success me-2"></i>Every rupee is accounted for—your trust, our responsibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="py-5 text-center bg-white">
          <div className="container">
            <h2 className="fw-bold text-success mb-3">Give Zakat or Sadqah—Change a Life</h2>
            <p className="lead mb-4">Your generosity brings hope, dignity, and opportunity to those who need it most. Donate today or contact us to learn more.</p>
            <a href="/contact-us" className="btn btn-success btn-lg shadow">Donate or Ask a Question</a>
          </div>
        </section>
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default ZakatSadqahPage;