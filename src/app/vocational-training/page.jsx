'use client';

import BreadcrumbOne from "@/components/BreadcrumbOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import TestimonialVTC from "@/components/TestimonialVTC";
const stats = [
  { label: "Years of Service", value: "26+" },
  { label: "Total Trainees", value: "10,000+" },
  { label: "Courses Offered", value: "6" },
  { label: "STEVTA Registered ", value: "Yes" },
];

// const courses = [
//   {
//     title: "Sewing & Stitching  (since 1998)",
//     desc: "Empowering women with practical tailoring skills for financial independence. Specializations: Basic, Ladies Fashion, Frocks, Newborn Sets, Gents’ Designs.",
//     icon: "fa-solid fa-scissors"
//   },
//   {
//     title: "Computer Training (since 2000)",
//     desc: "Comprehensive computer literacy: Office Automation, Digital Marketing, Graphic Design. Modern lab, qualified instructors.",
//     icon: "fa-solid fa-computer"
//   },
//   {
//     title: "English Language (since 2001)",
//     desc: "Basic & advanced English using Rosetta Stone, group discussions, and daily practice for job market readiness.",
//     icon: "fa-solid fa-language"
//   },
//   {
//     title: "Beautician Course (since 2012)",
//     desc: "Salon and beauty skills: facial, hair, makeup, threading, waxing, manicure, pedicure, henna, nail art.",
//     icon: "fa-solid fa-spa"
//   },
//   {
//     title: "Fitness (GYM) since (2015)",
//     desc: "Yoga, Zumba, Weight Lifting, Aerobics. In-house gym with modern equipment for women’s wellness. We have electric treadmills, a manual treadmill, a home gym, a fitness bench, and cycling machines.",
//     icon: "fa-solid fa-dumbbell"
//   },
//   {
//     title: "Cooking (Discontinued) (since 2013)",
//     desc: "Practical culinary skills for home-based businesses. (Course discontinued due to safety concerns.)",
//     icon: "fa-solid fa-utensils"
//   },
// ];

const courses = [
  {
    title: "Sewing & Stitching",
    image: "/assets/images/programs/sewing.jpg"
  },
  {
    title: "Computer Training",
    image: "/assets/images/programs/computer1.jpg"
  },
  {
    title: "English Language",
    image: "/assets/images/programs/english.jpg"
  },
  {
    title: "Beautician Course",
    image: "/assets/images/programs/beauty.jpg"
  },
  {
    title: "Fitness (GYM)",
    image: "/assets/images/programs/fitness.jpg"
  },
  {
    title: "Cooking",
    image: "/assets/images/programs/cooking.jpg"
  }
];

const videoTestimonials = [
  {
    name: "Sewing Course Graduate",
    videoUrl: "/assets/videos/video-1.mp4",
  },
  {
    name: "Computer Training Success", 
    videoUrl: "/assets/videos/testimonial-2.mp4",
  },
  {
    name: "Beautician Course Graduate",
    videoUrl: "/assets/videos/testimonial3.mp4",
  },
  {
    name: "English Language Success",
    videoUrl: "/assets/videos/testimonial4.mp4",
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
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  const videoRef = useRef(null);

  const nextVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentVideo((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentVideo((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  const handleVideoChange = (index) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setCurrentVideo(index);
  };

  const handleVideoClick = () => {
    setIsVideoPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsVideoPopupOpen(false);
  };

  // Force video reload when currentVideo changes
  useEffect(() => {
    setIsVideoLoading(true);
    if (videoRef.current) {
      videoRef.current.load();
    }
    console.log('Current video changed to:', currentVideo, 'URL:', videoTestimonials[currentVideo].videoUrl);
  }, [currentVideo]);

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  const handleVideoError = () => {
    setIsVideoLoading(false);
    console.error('Error loading video:', videoTestimonials[currentVideo].videoUrl);
  };

  return (
    <AOSWrap>
      <section className="page-wrapper bg-light">
        <Preloader />
        <CustomCursor />
        <TopBarOne />
        <HeaderOne />
        <BreadcrumbOne title="VTC" />
        {/* Hero Section */}
        <section className="py-5 bg-white border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1 className="fw-bold mb-3" style={{ color: '#db567c' }}>Empowering Women Through Skills</h1>
                <p className="lead mb-4">
                Our Vocational Training Center is registered with STEVTA (Sindh Technical Education and Vocational Training Authority) and more than  1000+ students took admission in our courses since 1998. This center is solely dedicated to the empowerment of women. We train these ladies in different fields so that it is easier for them to attain employment and help feed their families. Our center runs 5 days a week, 03:00 pm to 05:00 pm, catering to 25 to 30 students in each course for 2 months.
                </p>
                <ul className="list-unstyled mb-4">
                  <li><i className="fa fa-check-circle me-2" style={{ color: '#db567c' }}></i>Sewing Course</li>
                  <li><i className="fa fa-check-circle me-2" style={{ color: '#db567c' }}></i>Beautician course</li>
                  <li><i className="fa fa-check-circle me-2" style={{ color: '#db567c' }}></i>Computer course</li>
                  <li><i className="fa fa-check-circle me-2" style={{ color: '#db567c' }}></i>English Language course</li>
                  <li><i className="fa fa-check-circle me-2" style={{ color: '#db567c' }}></i>Gym and Fitness course</li>
                </ul>
                <a href="https://www.facebook.com/AlzohraVocational" className="btn btn-success btn-lg shadow" style={{ backgroundColor: '#db567c', borderColor: '#db567c' }}>Follow Us</a>
              </div>
              {/* <div className="col-md-5 text-center">
                <img src="/assets/images/event/overview1.jpg" alt="Vocational Training" className="img-fluid rounded shadow" style={{maxHeight: 320}} />
              </div> */}
              <div className="col-md-5 d-none d-md-block">
  <div
    className="help__thumb text-end"
    style={{
      position: "relative",
      width: "100%",
      display: "inline-block"
    }}
  >
    <img
      src="/assets/images/donation/3.jpg"
      alt="Al-Zohra Banner"
      style={{
        width: "120%",
        height: "auto",
        maxWidth: "150%",
        height : "120%",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
      }}
    />
    <div
      className="vertical-text"
      style={{
        position: "absolute",
        bottom: "10px",
        right: "-40px",
        transform: "rotate(90deg)",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#1800ad",
        whiteSpace: "nowrap"
      }}
    >
      
    </div>
  </div>
 
  
</div>
            </div>
            
          </div>
        </section>
        {/* Stats Section - fixed layout and color */}
        {/* <section className="py-5 bg-danger bg-opacity-10 border-bottom">
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
        </section> */}
        <section
  className="py-5 border-bottom"
  style={{ backgroundColor: 'rgba(220, 53, 69, 0.1)' }} // Bootstrap’s bg-danger with opacity
>
  <div className="container">
    <div className="row text-center">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="mb-4"
          style={{
            width: '100%',
            paddingLeft: '12px',
            paddingRight: '12px',
            flex: '0 0 100%',
            maxWidth: '100%',
            boxSizing: 'border-box',

            // Responsive breakpoints
            ...(window.innerWidth >= 576 && {
              flex: '0 0 50%',
              maxWidth: '50%',
            }),
            ...(window.innerWidth >= 768 && {
              flex: '0 0 33.3333%',
              maxWidth: '33.3333%',
            }),
            ...(window.innerWidth >= 992 && {
              flex: '0 0 25%',
              maxWidth: '25%',
            }),
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '0.375rem',
              boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)',
              padding: '2rem',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                color: '#dc3545', // Bootstrap danger color
                marginBottom: '2rem',
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontWeight: 600, color: '#6c757d' }}>{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

       
        {/* Courses Section with hover effect */}
        {/* <section className="py-5 border-bottom">
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
        </section> */}
        {/* Courses Section - Changed to image cards instead of icons & text */}
<section className="py-5 border-bottom">
  <div className="container">
    <h2 className="fw-bold text-center mb-5" style={{ color: '#db567c' }}>Programs Offered</h2>
    <div className="row g-4">
      {courses.map((course, idx) => (
        <div className="col-md-6" key={idx}>
          {/* Card same size rakha hai, content replace karke image lagayi */}
          <div className="card h-400 border-0 shadow-sm">
            {/* Yahan image laga di — course.image hum add karenge array me */}
            <img 
              src={course.image} 
              alt={course.title} 
              className="img-fluid rounded-top" 
              style={{ height: "550px", objectFit: "fill", }} 
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* Timeline/Journey Section - now a carousel using react-slick */}
        <section className="py-5 bg-light border-bottom">
          <div className="container">
            <h2 className="fw-bold text-center mb-5" style={{ color: '#db567c' }}>Our Journey</h2>
            <section className="py-5">
          <div className="container-fluid px-0">
          <div className="ratio ratio-16x9">
      <iframe 
        src="/assets/images/event/vtc.mp4" 
        title="School Journey Video" 
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>
{/* banner  */}
{/* <section className="community" style={{ padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div
        className="community-donation__inner"
        style={{
          display: 'inline-block',
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <img
          src="/assets/images/donation/5.jpg" // your image path here
          alt="Donation Card"
          style={{ maxWidth: "120%", height: "auto", width: "100%" }}
        />
      </div>
    </section> */}
    <section
  className="community"
  style={{
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  }}
>
  {/* <div
    className="community-donation__inner"
    style={{
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      width: "100%", // Now takes full width of section or image
      maxWidth: "900px", // Optional: limit how big it can get
    }}
  >
    <img
      src="/assets/images/donation/5.jpg"
      alt="Donation Card"
      style={{
        display: "block",
        width: "120%",   // Image fills container
        height: "auto",  // Maintain aspect ratio
      }}
    />
  </div> */}
  <div
  className="community-donation__inner mx-auto"
  style={{
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "900px"
  }}
>
  <img
    src="/assets/images/donation/5.jpg"
    alt="Donation Card"
    className="img-fluid"
    style={{
      display: "block",
      width: "100%",
      height: "auto",
      objectFit: "cover"
    }}
  />
</div>

</section>

            {/* <div className="timeline-carousel-wrapper position-relative">
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
            </div> */}
          </div>
        </section>
        {/* Facilities Section */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                <img src="/assets/images/gallery/gallery.jpg" alt="Facilities" className="img-fluid rounded shadow" />
              </div>
              <div className="col-md-6">
                <h2 className="fw-bold mb-3" style={{ color: '#db567c' }}>Facilities & Schedule</h2>
                <ul className="list-unstyled mb-3">
                  <li><i className="fa fa-clock me-2" style={{ color: '#db567c' }}></i>5 days a week, 3:00 PM – 5:00 PM</li>
                  <li><i className="fa fa-users me-2" style={{ color: '#db567c' }}></i>Batch size: 25–30 students</li>
                  <li><i className="fa fa-building me-2" style={{ color: '#db567c' }}></i>Modern classrooms, computer lab, gym, beauty studio</li>
                  <li><i className="fa fa-certificate me-2" style={{ color: '#db567c' }}></i>Nominal fee: Rs 2,000 (Rs 3,600 for computer/language)</li>
                </ul>
                <p className="text-secondary small mb-0">
                  Our holistic approach builds confidence, self-reliance, and employability. Many graduates are now entrepreneurs or employed in their fields.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* How to Enroll Section */}
        <section className="py-5 border-bottom" style={{ backgroundColor: 'rgba(219, 86, 124, 0.1)' }}>
          <div className="container">
            <h2 className="fw-bold text-center mb-4" style={{ color: '#db567c' }}>How to Enroll</h2>
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
          <section 
            className="py-5 bg-white border-bottom"
            style={{
              filter: isVideoPopupOpen ? 'blur(5px)' : 'none',
              transition: 'filter 0.3s ease',
              pointerEvents: isVideoPopupOpen ? 'none' : 'auto',
            }}
          >
            <TestimonialVTC />
            
          </section>
          

        {/* Call to Action Section */}
        <section className="py-5 text-center bg-white">
          <div className="container">
            <h2 className="fw-bold mb-3" style={{ color: '#db567c' }}>Support Women’s Empowerment</h2>
            <p className="lead mb-4">Your support helps us continue providing life-changing skills and opportunities. Join us as a donor, volunteer, or student.</p>
            <a href="https://wa.me/message/H4XCFQ5TGB5QN1" className="btn btn-success btn-lg shadow" style={{ backgroundColor: '#db567c', borderColor: '#db567c' }}>Contact Us</a>
          </div>
        </section>

        {/* Video Popup Modal */}
        {isVideoPopupOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              padding: '20px',
            }}
            onClick={handleClosePopup}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: '600px',
                height: '800px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClosePopup}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '0',
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '30px',
                  cursor: 'pointer',
                  zIndex: 10000,
                }}
              >
                <i className='fa-solid fa-times' />
              </button>
              <video
                controls
                autoPlay
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '15px',
                }}
              >
                <source src={videoTestimonials[currentVideo].videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div
                style={{
                  position: 'absolute',
                  bottom: '-40px',
                  left: '0',
                  right: '0',
                  textAlign: 'center',
                  color: 'white',
                }}
              >
                <h4 style={{ margin: '0', fontSize: '18px' }}>{videoTestimonials[currentVideo].name}</h4>
              </div>
            </div>
          </div>
        )}

        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default VocationalTrainingPage; 