'use client';

import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import React, { useRef } from "react";
import Slider from "react-slick";

const stats = [
  { label: "Years of Service", value: "26+" },
  { label: "Total Trainees", value: "10,000+" },
  { label: "Courses Offered", value: "6" },
  { label: "Registered with STEVTA", value: "Yes" },
];

const courses = [
  {
    title: "Sewing & Stitching",
    desc: "Empowering women with practical tailoring skills for financial independence. Specializations: Basic, Ladies Fashion, Frocks, Newborn Sets, Gents’ Designs.",
    icon: "fa-solid fa-scissors"
  },
  {
    title: "Computer Training",
    desc: "Comprehensive computer literacy: Office Automation, Digital Marketing, Graphic Design. Modern lab, qualified instructors.",
    icon: "fa-solid fa-computer"
  },
  {
    title: "English Language",
    desc: "Basic & advanced English using Rosetta Stone, group discussions, and daily practice for job market readiness.",
    icon: "fa-solid fa-language"
  },
  {
    title: "Beautician Course",
    desc: "Salon and beauty skills: facial, hair, makeup, threading, waxing, manicure, pedicure, henna, nail art.",
    icon: "fa-solid fa-spa"
  },
  {
    title: "Fitness (GYM)",
    desc: "Yoga, Zumba, Weight Lifting, Aerobics. In-house gym with modern equipment for women’s wellness.",
    icon: "fa-solid fa-dumbbell"
  },
  {
    title: "Cooking (Discontinued)",
    desc: "Practical culinary skills for home-based businesses. (Course discontinued due to safety concerns.)",
    icon: "fa-solid fa-utensils"
  },
];

const testimonials = [
  {
    name: "Erum",
    text: "Moved from Lahore to learn graphics; now employed.",
  },
  {
    name: "Anum Zamir",
    text: "Works as an accountant at Levi’s.",
  },
  {
    name: "Nazia Ayub & Rubina Parvez",
    text: "Fashion designers in Gulshan malls.",
  },
];

const timeline = [
  { year: "1998", event: "VTC Established in Punjab Colony" },
  { year: "2000", event: "Computer & English  Courses" },
  { year: "2012", event: "Beautician & Grooming Course" },
  { year: "2016", event: "Fitness & Gym Facilities Added" },
  { year: "2024", event: "10,000+ Trainees Graduated" },
];

const howToEnroll = [
  "Visit Al-Zohra Welfare Association or contact us online.",
  "Choose your desired course and fill out the application form.",
  "Submit required documents and nominal fee.",
  "Attend orientation and begin your training journey!",
];

const moreTestimonials = [
  {
    name: "Shazia & Rubina",
    text: "Opened their own beauty parlors after completing the course.",
  },
  {
    name: "Sana Ahmed",
    text: "Started a home-based tailoring business and now supports her family.",
  },
];

const VocationalTrainingPage = () => {
  const timelineSliderRef = useRef(null);

  return (
    <AOSWrap>
      <section className="page-wrapper bg-light">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="Vocational Training Program" />
        {/* Hero Section */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1 className="fw-bold text-success mb-3">Empowering Women Through Skills</h1>
                <p className="lead mb-4">
                  Established in 1998, Al-Zohra Vocational Training Center is committed to uplifting women through practical skills and career-oriented education. Over 10,000 trainees have graduated, many now supporting their families and communities.
                </p>
                <ul className="list-unstyled mb-4">
                  <li><i className="fa fa-check-circle text-success me-2"></i>Registered with STEVTA</li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Affordable, short-term courses</li>
                  <li><i className="fa fa-check-circle text-success me-2"></i>Personalized attention, hands-on practice</li>
                </ul>
                <a href="/contact-us" className="btn btn-success btn-lg shadow">Join or Support</a>
              </div>
              <div className="col-md-5 text-center">
                <img src="/assets/images/event/overview.png" alt="Vocational Training" className="img-fluid rounded shadow" style={{maxHeight: 320}} />
              </div>
            </div>
          </div>
        </section>
        {/* Stats Section - fixed layout and color */}
        <section className="py-5 bg-success bg-opacity-10 border-bottom stats-section-alzohra">
          <div className="container">
            <div className="row justify-content-center g-4">
              {stats.map((stat, idx) => (
                <div className="col-6 col-md-3" key={idx}>
                  <div className="bg-white rounded shadow p-4 h-100 text-center d-flex flex-column align-items-center justify-content-center stats-card-alzohra">
                    <div className="stat-number-alzohra mb-2">{stat.value}</div>
                    <div className="stat-label-alzohra">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Courses Section with hover effect */}
        <section className="py-5 border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">Programs Offered</h2>
            <div className="row g-4">
              {courses.map((course, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="card h-100 border-0 shadow-sm course-card-hover">
                    <div className="card-body text-center">
                      <i className={`${course.icon} fa-2x text-success mb-3`}></i>
                      <h5 className="fw-bold mb-2">{course.title}</h5>
                      <p className="text-secondary small mb-0">{course.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Timeline/Journey Section - now a carousel using react-slick */}
        <section className="py-5 bg-light border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">Our Journey</h2>
            <div className="timeline-carousel-wrapper position-relative">
              <button
                className="timeline-arrow timeline-arrow-left"
                onClick={() => timelineSliderRef.current.slickPrev()}
                aria-label="Previous"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button
                className="timeline-arrow timeline-arrow-right"
                onClick={() => timelineSliderRef.current.slickNext()}
                aria-label="Next"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              <Slider
                ref={timelineSliderRef}
                slidesToShow={3}
                swipeToSlide={true}
                arrows={false}
                responsive={[
                  { breakpoint: 991, settings: { slidesToShow: 2 } },
                  { breakpoint: 600, settings: { slidesToShow: 1 } },
                ]}
              >
                {timeline.map((item, idx) => (
                  <div key={idx}>
                    <div className="timeline-item-alzohra text-center">
                      <div className="timeline-circle-alzohra mb-2">{item.year}</div>
                      <div className="timeline-label-alzohra mt-2">{item.event}</div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
        {/* Facilities Section */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img src="/assets/images/gallery1.png" alt="Facilities" className="img-fluid rounded shadow" />
              </div>
              <div className="col-md-6">
                <h2 className="fw-bold text-success mb-3">Facilities & Schedule</h2>
                <ul className="list-unstyled mb-3">
                  <li><i className="fa fa-clock text-success me-2"></i>5 days a week, 3:00 PM – 5:00 PM</li>
                  <li><i className="fa fa-users text-success me-2"></i>Batch size: 25–30 students</li>
                  <li><i className="fa fa-building text-success me-2"></i>Modern classrooms, computer lab, gym, beauty studio</li>
                  <li><i className="fa fa-certificate text-success me-2"></i>Nominal fee: Rs 2,000 (Rs 3,600 for computer/language)</li>
                </ul>
                <p className="text-secondary small mb-0">
                  Our holistic approach builds confidence, self-reliance, and employability. Many graduates are now entrepreneurs or employed in their fields.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* How to Enroll Section */}
        <section className="py-5 bg-success bg-opacity-10 border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-4">How to Enroll</h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <ol className="list-group list-group-numbered shadow-sm">
                  {howToEnroll.map((step, idx) => (
                    <li className="list-group-item py-3" key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* Expanded Testimonials Section */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <h2 className="fw-bold text-success text-center mb-5">Success Stories</h2>
            <div className="row g-4 justify-content-center">
              {[...testimonials, ...moreTestimonials].map((t, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body">
                      <p className="mb-3">“{t.text}”</p>
                      <div className="fw-bold text-success">— {t.name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="py-5 text-center bg-white">
          <div className="container">
            <h2 className="fw-bold text-success mb-3">Support Women’s Empowerment</h2>
            <p className="lead mb-4">Your support helps us continue providing life-changing skills and opportunities. Join us as a donor, volunteer, or student.</p>
            <a href="/contact-us" className="btn btn-success btn-lg shadow">Get Involved</a>
          </div>
        </section>
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default VocationalTrainingPage; 