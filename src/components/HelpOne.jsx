// "use client";
// import Link from "next/link";
// import { useState } from "react";
// import ModalVideo from "react-modal-video";

// const HelpOne = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//       <section className='help'>
//         <div className='container'>
//           <div className='row align-items-center gutter-40'>
//             <div className='col-10 col-lg-5 col-xxl-5 d-none d-lg-block'>
//               <div className='help__thumb'>
//                 <div className='help__thumb-inner'>
//                   <div className='thumb-top thumb'>
//                     <img
//                       src='/assets/images/help/thumb-lg.jpg'
//                       alt='Image_inner'
//                     />
//                   </div>
//                   <div
//                     className='thumb-lg thumb'
//                     data-aos='fade-left'
//                     data-aos-duration={1000}
//                   >
//                     <img
//                       src='/assets/images/help/thumb.jpg'
//                       alt='Image_inner'
//                     />
//                     <div className='video-btn-wrapper'>
//                       <span
//                         onClick={() => setIsOpen(true)}
//                         className='open-video-popup'
//                       >
//                         <i className='icon-play' />
//                       </span>
//                     </div>
//                   </div>
//                   <div className='thumb thumb-bottom'>
//                     <img
//                       src='/assets/images/help/thumb-bottom1.jpg'
//                       alt='Image_inner'
//                     />
//                   </div>
//                   <div className='line'>
//                     <img src='/assets/images/help/line.png' alt='Image_inner' />
//                   </div>
//                   <div className='grid-line'>
//                     <img
//                       src='/assets/images/help/grid.png'
//                       alt='Image_inner'
//                       className='base-img'
//                     />
//                   </div>
//                   <div className='vertical-text'>
//                     <h5>
//                       We Give <span>Donations</span> to Poor People{" "}
//                     </h5>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className='col-12 col-lg-7 col-xxl-6'>
//               <div className='help__content'>
//                 <span className='sub-title'>
//                   <i className='icon-donation' />
//                   Please start donating
//                 </span>
//                 <h2 className='title-animation_inner'>
//                  Our Programs
//                 </h2>
//                 {/* <p>
//                   Volunteering offers opportunities to develop new skills and
//                   gain valuable experience. This can include leadership,
//                   communication, project management, and teamwork skills.
//                 </p> */}
//                 <div className='help__content-list'>
//                   <ul>
//                     <li>
//                       <i className='fa-solid fa-circle-check' /> Monthly Welfare Assitance (Zakat/Non-Zakat)
//                     </li>
//                     <li>
//                       <i className='fa-solid fa-circle-check' />High Standard English Medium School
//                     </li>
//                     <li>
//                       <i className='fa-solid fa-circle-check' />High Standard Vocational Training Center
//                     </li>
//                   </ul>
//                 </div>
//                 <div className='help__content-icon-group'>
//                   <div className='help__content-icon'>
//                     <div className='thumb'>
//                       <i className='icon-make-donation' />
//                     </div>
//                     <div className='content'>
//                       <h6>Monthly Welfare <span>Assitance</span> </h6>
//                       <p>
//                       We are currently supporting more than 200 families underprivileged widows and single mothers across Karachi through Al-Zohra Welfare Cards. After proper verification, these cards are issued to deserving women to help lessen the burden of running their households by providing them with monthly financial assistance.
//                       </p>
//                     </div>
                    
//                   </div>
                  
//                   <div className='help__content-icon'>
//                     <div className='thumb'>
//                       <i className='icon-support-heart' />
//                     </div>
//                     <div className='content'>
//                       <h6>Al-Zohra Secondary School</h6>
//                       <p>
//                       Al-Zohra Secondary School, registered as an English-medium institution from Nursery to Matric, combines elite-standard academics with digital literacy and modern teaching resources. With nominal fees and no extra costs, it ensures that high-quality, future-focused education is within every child’s reach.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='help__content-icon-group'>
//                   <div className='help__content-icon'>
//                     <div className='thumb'>
//                       <i className='icon-make-donation' />
//                     </div>
//                     <div className='content'>
//                       <h6>Al-Zohra Vocational Training</h6>
//                       <p>
//                         Raising awareness about the charity's mission and cause.Al-Zohra Vocational Training Center empowers women by offering exceptional skill-building courses at nominal rates. We provide specialized training in Beautician, Gym, Sewing, and Mehndi art—all wrapped into a comprehensive package with a complete course fee of just Rs. 2,000. For those seeking to enhance their digital and language capabilities, our complete Computer and English Language course is available at Rs. 3,600. Join us to learn, grow, and step confidently into your future.
//                       </p>
//                     </div>
                    
//                   </div>
                  
//                   {/* <div className='help__content-icon'>
//                     <div className='thumb'>
//                       <i className='icon-support-heart' />
//                     </div>
//                     <div className='content'>
//                       <h6>Make Donations</h6>
//                       <p>
//                         Raising awareness about the charity's mission and cause.
//                       </p>
//                     </div>
//                   </div> */}
//                 </div>
//                 {/* <div className='help__content-list'>
//                   <ul>
//                     <li>
//                       <i className='fa-solid fa-circle-check' /> Helped fund
//                       3,265 Project powerful corporate poor.
//                     </li>
//                     <li>
//                       <i className='fa-solid fa-circle-check' /> We give child a
//                       gift of a education
//                     </li>
//                     <li>
//                       <i className='fa-solid fa-circle-check' /> We help
//                       companies develop powerful corporate social
//                       Responsibility,
//                     </li>
//                   </ul>
//                 </div> */}
//                 <div className='help__content-cta cta'>
//                   <Link
//                     href='/contact-us'
//                     aria-label='contact-us'
//                     title='contact-us'
//                     className='btn--primary'
//                   >
//                     Contact Us
//                   </Link>
//                   <div className='contact-btn'>
//                     <div className='contact-icon'>
//                       <i className='fa-brands fa-whatsapp' style={{ color: '#25D366' }} />
//                     </div>
//                     <div className='contact-content'>
//                       <p>WhatsApp Online</p>
//                       <a href='https://wa.me/923201431143' target='_blank' rel='noopener noreferrer' style={{ color: '#25D366', fontWeight: 600 }}>
//                         +92 320 0205478
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='hand'>
//           <img src='/assets/images/help/hand.png' alt='Image_inner' />
//         </div>
//         <div className='parasuit'>
//           <img src='/assets/images/parasuit.png' alt='Image_inner' />
//         </div>
//         <div className='spade'>
//           <img src='/assets/images/help/spade.png' alt='Image_inner' />
//         </div>

//         <ModalVideo
//           channel='youtube'
//           autoplay
//           isOpen={isOpen}
//           videoId='XxVg_s8xAms'
//           onClose={() => setIsOpen(false)}
//           allowFullScreen
//         />
//       </section>
//     </>
//   );
// };

// export default HelpOne;

"use client";
import Link from "next/link";
import { useState } from "react";

const HelpOne = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="help">
        <div className="container">
          <div className="row align-items-center gutter-40">
            <div className="col-10 col-lg-5 col-xxl-5 d-none d-lg-block">
              <div className="help__thumb">
                <div className="help__thumb-inner">
                  <div className="thumb-top thumb">
                    <img
                      src="/assets/images/help/thumb-lg.jpg"
                      alt="Image_inner"
                    />
                  </div>
                  <div
                    className="thumb-lg thumb"
                    data-aos="fade-left"
                    data-aos-duration={1000}
                  >
                    <img
                      src="/assets/images/help/thumb.jpg"
                      alt="Image_inner"
                    />
                    <div className="video-btn-wrapper">
                      <span
                        onClick={() => setIsOpen(true)}
                        className="open-video-popup"
                        style={{ cursor: "pointer" }}
                      >
                        <i className="icon-play" />
                      </span>
                    </div>
                  </div>
                  <div className="thumb thumb-bottom">
                    <img
                      src="/assets/images/help/thumb-bottom1.jpg"
                      alt="Image_inner"
                    />
                  </div>
                  <div className="line">
                    <img src="/assets/images/help/line.png" alt="Image_inner" />
                  </div>
                  <div className="grid-line">
                    <img
                      src="/assets/images/help/grid.png"
                      alt="Image_inner"
                      className="base-img"
                    />
                  </div>
                  <div className="vertical-text">
                    <h5>
                      We Give <span>Donations</span> to Poor People{" "}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-7 col-xxl-6">
              <div className="help__content">
                <span className="sub-title">
                  <i className="icon-donation" />
                  Please start donating
                </span>
                <h2 className="title-animation_inner">Our Programs</h2>

                <div className="help__content-list">
                  <ul>
                    <li>
                      <i className="fa-solid fa-circle-check" /> Monthly Welfare
                      Assitance (Zakat/Non-Zakat)
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      High Standard English Medium School
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      High Standard Vocational Training Center
                    </li>
                  </ul>
                </div>
                <div className="help__content-icon-group">
                  <div className="help__content-icon">
                    <div className="thumb">
                      <i className="icon-make-donation" />
                    </div>
                    <div className="content">
                      <h6>
                        Monthly Welfare <span>Assitance</span>{" "}
                      </h6>
                      <p>
                        We are currently supporting more than 200 families
                        underprivileged widows and single mothers across Karachi
                        through Al-Zohra Welfare Cards. After proper
                        verification, these cards are issued to deserving women
                        to help lessen the burden of running their households by
                        providing them with monthly financial assistance.
                      </p>
                    </div>
                  </div>

                  <div className="help__content-icon">
                    <div className="thumb">
                      <i className="icon-support-heart" />
                    </div>
                    <div className="content">
                      <h6>Al-Zohra Secondary School</h6>
                      <p>
                        Al-Zohra Secondary School, registered as an
                        English-medium institution from Nursery to Matric,
                        combines elite-standard academics with digital literacy
                        and modern teaching resources. With nominal fees and no
                        extra costs, it ensures that high-quality, future-focused
                        education is within every child’s reach.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="help__content-icon-group">
                  <div className="help__content-icon">
                    <div className="thumb">
                      <i className="icon-make-donation" />
                    </div>
                    <div className="content">
                      <h6>Al-Zohra Vocational Training</h6>
                      <p>
                        Raising awareness about the charity's mission and
                        cause.Al-Zohra Vocational Training Center empowers women
                        by offering exceptional skill-building courses at nominal
                        rates. We provide specialized training in Beautician,
                        Gym, Sewing, and Mehndi art—all wrapped into a
                        comprehensive package with a complete course fee of just
                        Rs. 2,000. For those seeking to enhance their digital and
                        language capabilities, our complete Computer and English
                        Language course is available at Rs. 3,600. Join us to
                        learn, grow, and step confidently into your future.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="help__content-cta cta">
                  <Link
                    href="/contact-us"
                    aria-label="contact-us"
                    title="contact-us"
                    className="btn--primary"
                  >
                    Contact Us
                  </Link>
                  <div className="contact-btn">
                    <div className="contact-icon">
                      <i
                        className="fa-brands fa-whatsapp"
                        style={{ color: "#25D366" }}
                      />
                    </div>
                    <div className="contact-content">
                      <p>WhatsApp Online</p>
                      <a
                        href="https://wa.me/923201431143"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#25D366", fontWeight: 600 }}
                      >
                        +92 320 0205478
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hand">
          <img src="/assets/images/help/hand.png" alt="Image_inner" />
        </div>
        <div className="parasuit">
          <img src="/assets/images/parasuit.png" alt="Image_inner" />
        </div>
        <div className="spade">
          <img src="/assets/images/help/spade.png" alt="Image_inner" />
        </div>

        {/* 
        // Old YouTube ModalVideo commented out:
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="XxVg_s8xAms"
          onClose={() => setIsOpen(false)}
          allowFullScreen
        />
        */}

        {/* New Modal for local video */}
        {isOpen && (
          <div
            className="video-modal"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={() => setIsOpen(false)}
          >
            <video
              src="/assets/videos/1001.mp4"
              controls
              autoPlay
              style={{ maxWidth: "90%", maxHeight: "90%" }}
              onClick={(e) => e.stopPropagation()} // prevent modal close when clicking on video
              controlsList="fullscreen"
              // fullscreen attribute is controlled by browser, no direct attribute
              // but user can click fullscreen button in controls
            />
          </div>
        )}
      </section>
    </>
  );
};

export default HelpOne;
