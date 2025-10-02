"use client";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";

const BannerOne = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <>
      <section className='banner-two'>
        <div className='banner-two__slider swiper'>
          <Slider {...settings} ref={sliderRef} className='swiper-wrapper'>
          {/* banner 1 image  */}
            <div className='swiper-slide'>
              <div className='banner-two__slider-single'>
                <div
                  className='banner-two__slider-bg'
                  style={{
                    backgroundImage:
                      "url(/assets/images/banner/banner23.jpg)",
                  }}
                ></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 col-md-9 col-lg-7 col-xxl-6'>
                      <div className='banner-two__slider-content'>
                        <span className='sub-title'>
                          <i className='icon-donation' />
                          Please start donating 
                        </span>
                        <h1>
                          Empowering <br />
                          Women for  <span className='bottom-line'><br /></span>
                          a better Future.
                        </h1>
                        <div className='banner__content-cta cta'>
                          <Link
                            href='/vocational-training'
                            aria-label='about us'
                            title='about us'
                            className='btn--tertiary'
                          >
                            Discover More{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                          <Link
                            href='/contact-us'
                            aria-label='contact us'
                            title='contact us'
                            className='btn--primary'
                          >
                             Contact Us{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* banner 2 image  */}
            <div className='swiper-slide'>
              <div className='banner-two__slider-single'>
                <div
                  className='banner-two__slider-bg'
                  style={{
                    backgroundImage:
                      "url(/assets/images/banner/banner-31.jpg)",
                  }}
                ></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 col-md-9  col-lg-7 col-xxl-6'>
                      <div className='banner-two__slider-content'>
                        <span className='sub-title'>
                          <i className='icon-donation' />
                          Please start donating
                        </span>
                        <h1>
                          Building a <br />
                          Brighter  <span className='bottom-line'><br /></span>
                          Future Together.
                        </h1>
                        <div className='banner__content-cta cta'>
                          <Link
                           href='/alzohra-secondary-school'
                           aria-label='alzohra-secondary-school'
                           title='alzohra-secondary-school'
                           className='btn--tertiary'                        
                          >
                            Discover More{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                          <Link
                            href='/contact-us'
                            aria-label='contact us'
                            title='contact us'
                            className='btn--primary'
                          >
                            Contact Us{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* banner 3 image  */}
            {/* <div className='swiper-slide'>
              <div className='banner-two__slider-single'>
                <div
                  className='banner-two__slider-bg'
                  style={{
                    backgroundImage:
                      "url(/assets/images/banner/banner-31.jpg)",
                  }}
                ></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 col-md-9 col-lg-7 col-xxl-6'>
                      <div className='banner-two__slider-content'>
                        <span className='sub-title'>
                          <i className='icon-donation' />
                          Please start donating
                        </span>
                        <h1>
                          Building a <br />
                          Brighter  <span className='bottom-line'><br /></span>
                          Future Togather.
                        </h1>
                        <div className='banner__content-cta cta'>
                          <Link
                            href='/alzohra-secondary-school'
                            aria-label='alzohra-secondary-school'
                            title='alzohra-secondary-school'
                            className='btn--tertiary'
                          >
                            Discover More{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                          <Link
                            href='/contact-us'
                            aria-label='contact us'
                            title='contact us'
                            className='btn--primary'
                          >
                             Contact Us{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* banner 4 image  */}
            <div className='swiper-slide'>
              <div className='banner-two__slider-single'>
                <div
                  className='banner-two__slider-bg'
                  style={{
                    backgroundImage:
                      "url(/assets/images/banner/banner-1.jpg)",
                  }}
                ></div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12 col-md-9 col-lg-7 col-xxl-6'>
                      <div className='banner-two__slider-content'>
                        <span className='sub-title'>
                          <i className='icon-donation' />
                          Please start donating
                        </span>
                        <h1>
                          Assisting <br />
                          Those <span className='bottom-line'><br /></span>
                          Who Struggle.
                        </h1>
                        <div className='banner__content-cta cta'>
                          <Link
                            href='/welfare-assistance'
                            aria-label='welfare-assistance'
                            title='welfare-assistance'
                            className='btn--tertiary'
                          >
                            Discover More{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                          <Link
                            href='/contact-us'
                            aria-label='contact us'
                            title='contact us'
                            className='btn--primary'
                          >
                             Contact Us{" "}
                            <i className='fa-solid fa-arrow-right' />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className='slider-navigation d-none d-md-flex'>
          <button
            onClick={() => sliderRef.current.slickPrev()}
            type='button'
            aria-label='prev slide'
            title='prev slide'
            className='prev-banner slider-btn'
          >
            <i className='fa-solid fa-arrow-left' />
          </button>
          <button
            onClick={() => sliderRef.current.slickNext()}
            type='button'
            aria-label='next slide'
            title='next slide'
            className='next-banner slider-btn slider-btn-next'
          >
            <i className='fa-solid fa-arrow-right' />
          </button>
        </div>
        <div className='shape'>
          <img src='/assets/images/shape.png' alt='Image_inner' />
        </div>
        <div
          className='shape-left'
          data-aos='fade-right'
          data-aos-duration={1000}
          data-aos-delay={300}
        >
          <img
            src='/assets/images/banner/banner-two-shape.png'
            alt='Image_inner'
          />
        </div>
        <div className='sprade-shape'>
          <img
            src='assets/images/sprade-base.png'
            alt='Image_inner'
            className='base-img'
            data-aos='zoom-in'
            data-aos-duration={1000}
          />
        </div>
        <div className='unity'>
          <img src='/assets/images/unity.png' alt='Image_inner' />
        </div>
      </section>
    </>
  );
};

export default BannerOne;
