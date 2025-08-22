import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import React from "react";
import VideoSection from "@/components/VideoSection";

const feeRows = [
  ["Nursery", "2375", "1250", "7125", "2000", "1200"],
  ["KG 1", "2375", "1350", "7125", "2000", "1200"],
  ["KG 2", "2435", "1450", "7305", "2000", "1200"],
  ["1", "2490", "1500", "7470", "2000", "1200"],
  ["2", "2600", "1550", "7800", "2000", "1200"],
  ["3", "2660", "1600", "7980", "2500", "1200"],
  ["4", "2725", "1650", "8175", "2500", "1200"],
  ["5", "2780", "1700", "8340", "2500", "1200"],
  ["6", "2780", "1750", "8340", "2500", "1200"],
  ["7", "2840", "1800", "8520", "3000", "1200"],
  ["8", "2900", "1850", "8700", "3000", "1200"],
  ["9", "3010", "1900", "9030", "3000", "1200"],
  ["10", "3010", "2000", "9030", "3000", "1200"],
];

const feeStructure = [
  {
    title: "Sewing & Stitching",
    image: "/assets/images/programs/fee1.jpg"
  },
  {
    title: "Computer Training",
    image: "/assets/images/programs/fee2.jpg"
  },
  {
    title: "English Language",
    image: "/assets/images/programs/fee3.jpg"
  },
  {
    title: "Beautician Course",
    image: "/assets/images/programs/fee4.jpg"
  }
];

const AlZohraSecondarySchoolPage = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper bg-light">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="Al Zohra Secondary School" />
        {/* Hero/Intro Section */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1 className="fw-bold text-success mb-3">Al Zohra Secondary School</h1>
                <p className="lead mb-4">
                Al-Zohra Secondary School caters to students from Nursery to Matric, offering a high standard of education comparable to the country’s elite English medium institutions. Our teachers are experts in their subjects, and their dedication is reflected in our outstanding results in the 2024 batch, Matric students achieved 60/60 marks in Computer Science, with the majority securing A grades in other board examination subjects as well.
                <br />We offer the following facilities and features:

  </p>
                <ul className="list-unstyled mb-4">
                  <li><i className="fa fa-check-circle text-success me-2"></i>High Standard Curriculum: Incorporates Microsoft Office computer courses and Rosetta Stone English Language software into the syllabus, ensuring students are proficient in both technology and communication.
                  </li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>State-of-the-Art Facilities: Equipped with modern science laboratories, 24/7 internet access, and advanced technology integration in classrooms.
                  </li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Video-Based Learning: Subject-wise and chapter-wise educational videos are shared daily via WhatsApp, along with moral and educational content to reinforce learning.
                  </li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Affordable Education: We maintain nominal fee structures, with over 35% of students receiving full scholarships.
                  </li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Digital Literacy Focus: Specialized training prepares students to excel in the digital era.
                  </li>
                </ul>
                <a href="https://www.facebook.com/AlzohraSchool" className="btn btn-success btn-lg shadow">Follow Us 
                </a>
              </div>
              <div className="col-md-5 text-center">
                <img src="/assets/images/event/overview.jpg" alt="Secondary School" className="img-fluid rounded shadow" style={{maxHeight: 320}} />
              </div>
            </div>
          </div>
        </section>
        {/* How It Started / How It's Going */}
{/* How It Started / How It's Going */}
<section className="py-5 border-bottom">
  <div className="container">
    <div className="row">
      {/* Left Side: How It Started */}
      <div className="col-md-6">
        <h2 className="fw-bold text-success mb-3">How It Started</h2>
        <p>
          Founded in 2011 as an initiative of Al Zohra Welfare Association, the school began with a vision to provide quality education to all, regardless of background. Starting from humble beginnings, we have grown into a thriving institution.
        </p>
      </div>

      {/* Right Side: How It's Going */}
      <div className="col-md-6">
        <h2 className="fw-bold text-success mb-3">How It's Going</h2>
        <p>
          Today, Al Zohra Secondary School offers education from Pre-Nursery to Grade 10, with a focus on digital literacy, modern teaching, and holistic development. Our students excel in academics and character, supported by dedicated staff and modern facilities.
        </p>
      </div>
    </div>
  </div>
</section>
<section className="pt-5 bg-white border-bottom">
<VideoSection
  src="/assets/images/event/school.mp4"
  poster="/assets/images/event/overview.jpg"
  title="School journey video showcasing Al Zohra Secondary School"
  sectionClass="p-5"
  containerClass="container-fluid px-0"
  ratio="" 
  backgroundClass="bg-white"
  minHeightClass=""
  objectFit="contain"
  paddingPercent={40}
  controls
/>
</section>
        {/* Fee Structure Section */}
        <section className="py-5 bg-white border-bottom">
        <div className="container">
    <h2 className="fw-bold text-center mb-5" style={{ color: '#db567c' }}>Fee Structure (2024)</h2>
    <div className="row g-4">
      {feeStructure.map((fee, idx) => (
        <div className="col-md-6" key={idx}>
          {/* Card same size rakha hai, content replace karke image lagayi */}
          <div className="card h-400 border-0 shadow-sm">
            {/* Yahan image laga di — course.image hum add karenge array me */}
            <img 
              src={fee.image} 
              alt={fee.title} 
              className="img-fluid rounded-top" 
              style={{ height: "600px", objectFit: "fill", }} 
            />
          </div>
        </div>
      ))}
    </div>
  </div>
          {/* <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">Fee Structure (2024)</h2>
            <div className="table-responsive">
              <table className="table table-bordered align-middle bg-white">
                <thead className="table-success">
                  <tr>
                    <th>Class</th>
                    <th>Dir. Approved Fee</th>
                    <th>Our Monthly Fee</th>
                    <th>Dir. Approved Admission</th>
                    <th>Our Admission Fee</th>
                    <th>Annual Charges</th>
                  </tr>
                </thead>
                <tbody>
                  {feeRows.map((row, idx) => (
                    <tr key={idx}>
                      {row.map((cell, cidx) => <td key={cidx}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-secondary mt-2">No other charges. Fees are kept affordable for all families.</p>
          </div> */}
        </section>
        
        {/* Admission & Promotion Criteria */}
        <section className="py-5 border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">Admission & Promotion Criteria</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <h4 className="fw-bold text-success mb-3">Admission</h4>
                <ul>
                  <li>Entry test in English, Math, Urdu, and General Knowledge</li>
                  <li>Verified transcript for Grades 1-9</li>
                  <li>Interview with student and parents</li>
                  <li>Required documents: Birth certificate, B-form, CNIC, previous reports</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h4 className="fw-bold text-success mb-3">Promotion & Exams</h4>
                <ul>
                  <li>Minimum 40% passing marks in each subject</li>
                  <li>Failure in 2 core subjects means no promotion</li>
                  <li>Two terms per year: Mid & Final</li>
                  <li>Regular monthly assessments, assignments, and projects</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Facilities Section */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">Facilities & Learning Environment</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-laptop me-2"></i>Digital & Language</h5>
                    <ul>
                      <li>Computer labs with internet & IT curriculum</li>
                      <li>Rosetta Stone English language software</li>
                      <li>Daily video lessons, shared with homes</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-flask me-2"></i>Science & Library</h5>
                    <ul>
                      <li>Science lab for hands-on experiments</li>
                      <li>Library with 6300+ books</li>
                      <li>Friday assemblies for science, GK, character</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold text-success mb-2"><i className="fa fa-shield-alt me-2"></i>Safety & Activities</h5>
                    <ul>
                      <li>CCTV surveillance & controlled entry</li>
                      <li>Co-curriculars: debates, events, sports</li>
                      <li>Well-furnished, ventilated classrooms</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Scholarships & Achievements */}
        <section className="py-5 border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">Scholarships & Achievements</h2>
            <div className="row g-4">
              <div className="col-md-6">
                <h4 className="fw-bold text-success mb-3">Scholarships</h4>
                <ul>
                  <li>100% free-ship for top students in final exams</li>
                  <li>Need + merit-based scholarships for orphans and deserving students</li>
                  <li>Certificates, medals, free vocational courses, and fee waivers for top achievers</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h4 className="fw-bold text-success mb-3">Recent Achievements</h4>
                <ul>
                  <li>82 full scholarships awarded in 2024–2025</li>
                  <li>100% pass rate in Computer Science (Matric 2024)</li>
                  <li>Majority of students achieved A/A+ grades</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="py-5 text-center bg-success bg-opacity-10">
          <div className="container">
            <h2 className="fw-bold text-success mb-3">Empower a Child's Future</h2>
            <p className="lead mb-4">Support our mission to provide quality, affordable education to all. Join us as a donor, volunteer, or parent.</p>
            <a href=" https://wa.me/message/H4XCFQ5TGB5QN1 " className="btn btn-success btn-lg shadow">Contact Us </a>
          </div>
        </section>
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default AlZohraSecondarySchoolPage; 