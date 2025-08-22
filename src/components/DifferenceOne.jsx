"use client";
import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";

const DifferenceOne = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
  return (
    <>
      <section className='difference'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10 col-xl-8'>
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
                  Charity With Difference
                </h2>
                <p>
                  Join our monthly giving program to provide consistent support
                  to our initiatives. Regular contributions, no matter the size,
                  help us plan and sustain long-term projects.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='difference__inner'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='difference__slider swiper'>
                  <Slider
                    {...settings}
                    ref={sliderRef}
                    className='swiper-wrapper'
                  >
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-first'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-one.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-education' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/vocational-training'>Vocational Training</Link>
                            </h5>
                            <p>
                            Our Vocational Training Center is  also registered with STEVTA (Sindh Technical Education and Vocational Training Authority) and more ...                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-second'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-two.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-food' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/welfare-assistance'>Welfare Assistance</Link>
                            </h5>
                            <p>
                            Under privileged women from all over Karachi are issued Al Zohra Welfare cards to lessen the burden of running their households through ...                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-third '
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-three.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-education' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/alzohra-secondary-school'>Secondary School </Link>
                            </h5>
                            <p>
                            Al-Zohra Secondary School, registered as an English-medium institution from Nursery to Matric, combines elite-standard academics with digital literacy and modern teaching resources. With nominal fees, it ensures that high-quality, future-focused education is within every child’s reach. </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-first'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-one.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-education' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Vocational Training</Link>
                            </h5>
                            <p>
                            Our Vocational Training Center is  also registered with STEVTA (Sindh Technical Education and Vocational Training Authority) and more ...                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-second'
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-two.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-food' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Welfare Assistance</Link>
                            </h5>
                            <p>
                            Under privileged women from all over Karachi are issued Al Zohra Welfare cards to lessen the burden of running their households through ...                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='swiper-slide px-2'>
                      <div className='difference__single-wrapper'>
                        <div
                          className='difference__single difference__single-third '
                          style={{
                            backgroundImage:
                              "url(/assets/images/difference/bg-three.png)",
                          }}
                        >
                          <div className='difference__single-thumb'>
                            <i className='icon-education' />
                          </div>
                          <div className='difference__single-content'>
                            <h5>
                              <Link href='/cause-details'>Secondary School </Link>
                            </h5>
                            <p>
                            Al Zohra currently teaches more than 250 students from Pre-Nursery to Matric. <br /> It provides a high standard of education ...
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
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
              className='prev-difference slider-btn'
            >
              <i className='fa-solid fa-arrow-left' />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              type='button'
              aria-label='next slide'
              title='next slide'
              className='next-difference slider-btn slider-btn-next'
            >
              <i className='fa-solid fa-arrow-right' />
            </button>
          </div>
        </div>
        <div
          className='shape-hand'
          data-aos='fade-right'
          data-aos-duration={1000}
          data-aos-delay={300}
        >
          <img
            src='/assets/images/difference/shape-hand.png'
            alt='Image_inner'
          />
        </div>
      </section>
    </>
  );
};

export default DifferenceOne;
