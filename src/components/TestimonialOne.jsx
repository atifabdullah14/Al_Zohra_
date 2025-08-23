"use client";

import { useRef, useState } from "react";
import Slider from "react-slick";

const TestimonialOne = () => {
  const sliderRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !isVideoPlaying,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonialVideos = [
    {
      id: 1,
      video: "/assets/videos/testimonial-2.mp4",
      author: "",
      company: "",
    },
    {
      id: 2,
      video: "/assets/videos/testimonial3.mp4",
      author: "",
      company: "",
    },
    {
      id: 3,
      video: "/assets/videos/testimonial4.mp4",
      author: "",
      company: "",
    },
    {
      id: 4,
      video: "/assets/videos/video-1.mp4",
      author: "",
      company: "",
    },
    {
      id: 5,
      video: "/assets/videos/video-2.mp4",
      author: "",
      company: "",
    },
    {
      id: 6,
      video: "/assets/videos/video-3.mp4",
      author: "",
      company: "",
    }
  ];

  const handleVideoClick = (video) => {
    setActiveVideo(video);
    setIsVideoPlaying(true);
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
    setIsVideoPlaying(false);
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const handleVideoEnded = () => {
    setActiveVideo(null);
    setIsVideoPlaying(false);
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  return (
    <>
      <section
        className='testimonial'
        style={{
          backgroundImage: "url(/assets/images/bg-one.png)",
          filter: isVideoPlaying ? 'blur(5px)' : 'none',
          transition: 'filter 0.3s ease',
          pointerEvents: isVideoPlaying ? 'none' : 'auto',
        }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-8 col-xl-7'>
              <div
                className='section__header text-center'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Start donating poor people
                </span>
                <h2 className='title-animation_inner'>
                  Our valuable <span>customer</span>
                  Video Testimonials
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className='testimonial__inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='testimonial__slider swiper'>
                  <Slider
                    {...settings}
                    ref={sliderRef}
                    className='swiper-wrapper'
                  >
                    {testimonialVideos.map((testimonial) => (
                      <div key={testimonial.id} className='swiper-slide'>
                        <div className='testimonial__slider-single'>
                          <div 
                            className='video-testimonial'
                            onClick={() => handleVideoClick(testimonial)}
                            style={{
                              cursor: 'pointer',
                              position: 'relative',
                              borderRadius: '15px',
                              overflow: 'hidden',
                              boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'scale(1.02)';
                              e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.2)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'scale(1)';
                              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                            }}
                          >
                            <video
                              className='testimonial-video'
                              style={{
                                width: '100%',
                                height: '280px',
                                objectFit: 'cover',
                                display: 'block',
                              }}
                              muted
                              preload="metadata"
                            >
                              <source src={testimonial.video} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                            <div
                              style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                background: 'rgba(0,0,0,0.7)',
                                borderRadius: '50%',
                                width: '80px',
                                height: '80px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease',
                              }}
                            >
                              <i 
                                className='fa-solid fa-play'
                                style={{
                                  color: 'white',
                                  fontSize: '24px',
                                  marginLeft: '5px',
                                }}
                              />
                            </div>
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '0',
                                left: '0',
                                right: '0',
                                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                padding: '20px',
                                color: 'white',
                              }}
                            >
                              <h6 style={{ margin: '0', fontSize: '16px', fontWeight: '600' }}>
                                {testimonial.author}
                              </h6>
                              <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: '0.9' }}>
                                {testimonial.company}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
          <div className='slider-navigation'>
            <button
              onClick={() => sliderRef.current.slickPrev()}
              type='button'
              aria-label='prev slide'
              title='prev slide'
              className='prev-testimonial slider-btn'
            >
              <i className='fa-solid fa-arrow-left' />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              type='button'
              aria-label='next slide'
              title='next slide'
              className='next-testimonial slider-btn slider-btn-next'
            >
              <i className='fa-solid fa-arrow-right' />
            </button>
          </div>
        </div>
        <div
          className='shape'
          data-aos='fade-right'
          data-aos-duration={1000}
          data-aos-delay={200}
        >
          <img
            src='assets/images/community/shape.png'
            alt='Image_inner'
            className='base-img'
          />
        </div>
      </section>

      {/* Video Popup Modal */}
      {activeVideo && (
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
          onClick={handleCloseVideo}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '90vh',
              width: '800px',
              height: '600px',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseVideo}
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
                borderRadius: '10px',
              }}
              onEnded={handleVideoEnded}
            >
              <source src={activeVideo.video} type="video/mp4" />
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
              <h4 style={{ margin: '0', fontSize: '20px' }}>{activeVideo.author}</h4>
              <p style={{ margin: '5px 0 0 0', opacity: '0.8' }}>{activeVideo.company}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialOne;


