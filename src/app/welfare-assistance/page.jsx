import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import React from "react";

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
        <BreadcrumbOne title="Welfare Assistance" />
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
            <h2 className="fw-bold text-danger text-center mb-5">Our Welfare Programs</h2>
            <div className="row g-5">
              {/* Ration Distribution */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h4 className="fw-bold text-danger mb-3"><i className="fa fa-shopping-basket me-2"></i>Monthly Ration Disbursement</h4>
                    <p>We provide monthly ration packs (valued at Rs. 5,500-6,500) to 200+ Zakat-eligible families in 32 low-income areas of Karachi. Packs include flour, rice, ghee, milk, sugar, tea, lentils, chickpeas, and more. Seasonal essentials and Eid/ Ramadan packs are also distributed.</p>
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
                    <h4 className="fw-bold text-danger mb-3"><i className="fa fa-ring me-2"></i>Wedding Welfare</h4>
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
                    <h4 className="fw-bold text-danger mb-3"><i className="fa fa-hand-holding-usd me-2"></i>Cash Disbursement</h4>
                    <p>We provide cash support to elderly, homebound women, higher education candidates, and in emergencies (medicine, burial, etc). All requests are verified and approved by the board.</p>
                    <ul>
                      <li><b>Areas:</b> Karachi-wide, especially for those unable to collect rations</li>
                      <li><b>Selection:</b> Elderly, disabled, students, urgent needs</li>
                      <li><b>Items:</b> Cash, medicine, education fees, burial support</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h4 className="fw-bold text-danger mb-3"><i className="fa fa-shopping-basket me-2"></i>Informal Education (Quran/Tuition)</h4>
                    <p>Through its informal education program at Shah Campus II, Al-Zohra empowers street children by preparing them for admission into government schools. Here's how it works:

                      Over 100 children participate in the program.

                      Quran lessons are held in the morning, from 8:00 to 10:00 AM, followed by tuition in English, Urdu, and Mathematics from 10:00 AM to 12:00 PM.

                      Each year, approximately 45 students successfully transition into government schools.</p>
                    {/* <ul>
                      <li><b>Areas:</b> Baldia, Korangi, Orangi, Surjani, Malir, Landhi, Kemari, and more</li>
                      <li><b>Selection:</b> Widowed grandmothers, elderly women, single mothers, families with chronic illness/disability, and exceptional cases</li>
                      <li><b>Verification:</b> Interviews, home visits, board approval</li>
                    </ul> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h4 className="fw-bold text-danger mb-3"><i className="fa fa-shopping-basket me-2"></i>Iftar Distribution Ramadan Program</h4>
                    <p>During the holy month of Ramadan, Al-Zohra organizes an Iftar Distribution Program that directly benefits needy and underprivileged women. Each day, more than 100 ready-to-eat meal boxes featuring items like chicken biryani, qorma, and pulao are distributed. These freshly prepared meals bring comfort and dignity to vulnerable women who may otherwise struggle to prepare Iftar on their own.</p>
                    {/* <ul>
                      <li><b>Areas:</b> Baldia, Korangi, Orangi, Surjani, Malir, Landhi, Kemari, and more</li>
                      <li><b>Selection:</b> Widowed grandmothers, elderly women, single mothers, families with chronic illness/disability, and exceptional cases</li>
                      <li><b>Verification:</b> Interviews, home visits, board approval</li>
                    </ul> */}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h4 className="fw-bold text-danger mb-3"><i className="fa fa-shopping-basket me-2"></i>Scholarship For Higher Studies</h4>
                    <p>At Al-Zohra, we provide scholarships for higher studies to both our teachers and students.
                      Teachers receive support to complete their academic qualifications and improve their teaching skills.
                      Students who have passed Matric from our school and wish to continue their education are also eligible.
                      Priority is given to those with strong academic performance, especially A-grade achievers, and to those facing financial difficulties.
                      Through these scholarships, we ensure that financial challenges do not stop our teachers and students from achieving success.</p>
                    {/* <ul>
                      <li><b>Areas:</b> Baldia, Korangi, Orangi, Surjani, Malir, Landhi, Kemari, and more</li>
                      <li><b>Selection:</b> Widowed grandmothers, elderly women, single mothers, families with chronic illness/disability, and exceptional cases</li>
                      <li><b>Verification:</b> Interviews, home visits, board approval</li>
                    </ul> */}
                  </div>
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