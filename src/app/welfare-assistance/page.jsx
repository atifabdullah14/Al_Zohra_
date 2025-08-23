import BreadcrumbWelfare from "@/components/BreadcrumbWelfare";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import React from "react";
import Image from "next/image";

// const stats = [
//   { label: "Years Serving Karachi", value: "34+" },
//   { label: "Monthly Ration Packs", value: "200+" },
//   { label: "Wedding Assistances", value: "300+" },
//   { label: "Cash Disbursements", value: "Countless" },
// ];
const stats = [
  { label: "Years Serving Karachi", value: "34+" },
  { label: "Monthly Ration Packs", value: "200+" },
  { label: "Wedding Assistances", value: "300+" },
  { label: "Cash Disbursements", value: "Endless" },
];


const WelfareAssistancePage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper bg-light">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbWelfare title="Welfare Assistance" />
        {/* Hero/Intro Section */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1 className="fw-bold text-danger mb-3">Welfare Assistance at Al-Zohra</h1>
                <p className="lead mb-4">
                  Al-Zohra Welfare Association is registered with the Directorate of Social Welfare, Government of Sindh under Registration Number DSW (645)-K, issued on May 19, 1991.   The Al-Zohra Welfare Association is a grass root level organisation. It was founded by Respected Zohra begum in May 1991 and is registered under the Voluntary Social Welfare Agencies
                  Ordinance, 1961 for the benefit of women and the destitute families of Karachi. It is a non-profit organization with the dual aim of Empowering women making them self sufficient, providing education and community development alongside caring for our older generation and needy by providing assistance .

                </p>
                <ul className="list-unstyled mb-4">
                  <li><i className="fa fa-check-circle text-danger me-2"></i>Monthly Zakat Assistance</li>
                  <li><i className="fa fa-check-circle text-danger me-2"></i>Wedding Assistance</li>
                  <li><i className="fa fa-check-circle text-danger me-2"></i>Monthly Non-Zakat Assistance</li>
                  <li><i className="fa fa-check-circle text-danger me-2"></i>Scholarships</li>
                  {/* <li><i className="fa fa-check-circle text-success me-2"></i>Wedding Assitance</li> */}
                  {/* <li><i className="fa fa-check-circle text-success me-2"></i>Cash Disbursement</li> */}
                </ul>
                <a href="https://www.facebook.com/AlzohraWelfare/" className="btn btn-danger btn-lg shadow">Follow Us</a>
              </div>
              <div className="col-md-5 text-center">
                <img src="/assets/images/community/gift.png" alt="Welfare Assistance" className="img-fluid rounded shadow" style={{ maxHeight: 320 }} />
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-5 bg-danger bg-opacity-10 border-bottom">
          <div className="container">
            <div className="row text-center">
              {stats.map((stat, idx) => (
                <div className="col-6 col-md-3 mb-4" key={idx}>
                  <div className="bg-white rounded shadow p-5 h-100">
                    <div className="display-5 fw-bold text-danger mb-5">{stat.value}</div>
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
              <div className="col-md-5 mb-4 mb-md-0">
                <img src="/assets/images/community/mask.jpg" alt="Our Journey" className="img-fluid rounded shadow" />
              </div>
              <div className="col-md-6">
                <h2 className="fw-bold text-danger mb-3">How It Started</h2>
                <p>
                  Founded by Respected Zohra Begum in 1991, Al-Zohra began in a humble two-room quarter in Punjab Colony, Karachi, providing rations, free clinics, and basic literacy to Zakat-eligible women and children.
                </p>
                <h2 className="fw-bold text-danger mb-3 mt-4">How It's Going</h2>
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
            <div className="row g-4">
              {/* Ration Distribution */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm overflow-hidden h-100">
                  <Image 
                    src="/assets/images/banner/banner1.jpg" 
                    alt="Ration Distribution" 
                    width={400}
                    height={300}
                    className="card-img-top"
                    style={{ objectFit: 'fill', height: '500px' }}
                  />
                </div>
              </div>
              
              {/* Wedding Welfare */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm overflow-hidden h-100">
                  <Image 
                    src="/assets/images/banner/banner2.jpg" 
                    alt="Wedding Assistance" 
                    width={400}
                    height={300}
                    className="card-img-top"
                    style={{ objectFit: 'fill', height: '500px' }}
                  />
                </div>
              </div>
              
              {/* Cash Disbursement */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm overflow-hidden h-100">
                  <Image 
                    src="/assets/images/banner/banner3.jpg" 
                    alt="Cash Assistance" 
                    width={400}
                    height={300}
                    className="card-img-top"
                    style={{ objectFit: 'fill', height: '500px' }}
                  />
                </div>
              </div>
              
              {/* Informal Education */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm overflow-hidden h-100">
                  <Image 
                    src="/assets/images/banner/banner4.jpg" 
                    alt="Informal Education" 
                    width={400}
                    height={300}
                    className="card-img-top"
                    style={{ objectFit: 'fill', height: '500px' }}
                  />
                </div>
              </div>
              
              {/* Iftar Distribution */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm overflow-hidden h-100">
                  <Image 
                    src="/assets/images/banner/banner5.jpg" 
                    alt="Iftar Distribution" 
                    width={400}
                    height={300}
                    className="card-img-top"
                    style={{ objectFit: 'fill', height: '500px' }}
                  />
                </div>
              </div>
              
              {/* Scholarship Program */}
              <div className="col-md-4">
                <div className="card border-0 shadow-sm overflow-hidden h-100">
                  <Image 
                    src="/assets/images/banner/banner6.jpg" 
                    alt="Scholarship Program" 
                    width={400}
                    height={300}
                    className="card-img-top"
                    style={{ objectFit: 'fill', height: '500px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="py-5 text-center bg-danger bg-opacity-10">
          <div className="container">
            <h2 className="fw-bold text-danger mb-3">Support Our Welfare Programs</h2>
            <p className="lead mb-4">Your support helps us provide dignity, hope, and essential resources to Karachi's most vulnerable. Join us as a donor, volunteer, or advocate.</p>
            <a href="https://wa.me/message/H4XCFQ5TGB5QN1" className="btn btn-danger btn-lg shadow">Contact Us</a>
          </div>
        </section>
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default WelfareAssistancePage; 