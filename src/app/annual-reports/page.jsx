
import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import React from "react";

const reports = [
  {
    year: 2023,
    summary: "A year of resilience and impact—expanding education, welfare, and vocational programs for Karachi's most vulnerable.",
    file: "/assets/reports/AlZohra-Annual-Report-2023.pdf"
  },
  {
    year: 2022,
    summary: "Strengthening our community outreach and launching new women empowerment initiatives.",
    file: "/assets/reports/AlZohra-Annual-Report-2022.pdf"
  },
  {
    year: 2021,
    summary: "Adapting to challenges, supporting families through the pandemic, and digital transformation in education.",
    file: "/assets/reports/AlZohra-Annual-Report-2021.pdf"
  },
];

const placeholder = "/assets/images/gallery1.png";

const AnnualReportsPage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper bg-dark text-white">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="Annual Reports" />
        {/* Hero/Intro Section - visually distinct */}
        <section className="py-5" style={{background: "#388e3c", color: "#fff"}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h1 className="fw-bold mb-3" style={{color: "#fff"}}>Annual Reports</h1>
                <p className="lead mb-4" style={{color: "#eaf5ea"}}>
                  Explore our journey of impact, transparency, and growth. Download our annual reports to see how your support transforms lives every year at Al-Zohra Welfare Association.
                </p>
              </div>
              <div className="col-md-4 text-center">
                <img src="/assets/images/donation/thumb-bg.png" alt="Annual Reports" className="img-fluid rounded shadow" style={{maxHeight: 220, background: "#fff"}} />
              </div>
            </div>
          </div>
        </section>
        {/* Reports Grid/List Section */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">Download Our Reports</h2>
            <div className="row g-4 justify-content-center">
              {reports.map((report, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="annual-report-card card h-100 border-0 shadow-sm overflow-hidden">
                    <div className="report-img-wrapper position-relative">
                      <img src={placeholder} alt={`Report ${report.year}`} className="img-fluid w-100" style={{height: 220, objectFit: 'cover'}} />
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h4 className="fw-bold text-success mb-2">{report.year}</h4>
                        <p className="text-secondary mb-3">{report.summary}</p>
                      </div>
                      <a href={report.file} className="btn btn-success mt-auto" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-download me-2"></i>Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Gallery Section */}
        <section className="py-5 bg-light border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">Gallery</h2>
            <div className="row g-4 justify-content-center">
              {Array.from({length: 15}).map((_, idx) => {
                const img = ["one.png","two.png","three.png","four.png","five.png","six.png"][idx % 6];
                return (
                  <div className="col-6 col-md-4 col-lg-3" key={idx}>
                    <div className="annual-report-card card h-100 border-0 shadow-sm overflow-hidden p-0">
                      <div className="report-img-wrapper position-relative">
                        <img src={`/assets/images/gallery/${img}`} alt={`Gallery ${idx+1}`} className="img-fluid w-100" style={{height: 220, objectFit: 'cover'}} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* Call to Action Section - visually distinct */}
        <section className="py-5 text-center" style={{background: "#388e3c"}}>
          <div className="container">
            <h2 className="fw-bold mb-3" style={{color: "#fff"}}>Support Our Mission</h2>
            <p className="lead mb-4" style={{color: "#eaf5ea"}}>Your support makes every achievement possible. Join us in building a brighter future for Karachi.</p>
            <a href="/contact-us" className="btn btn-light btn-lg shadow text-success fw-bold">Contact Us</a>
          </div>
        </section>
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default AnnualReportsPage;
