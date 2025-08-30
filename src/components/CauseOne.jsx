"use client";
import { useRef } from "react";
import Slider from "react-slick";
import ProgressBar from "../helper/ProgressBar";
import Link from "next/link";

const CauseOne = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: true,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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

    <section
      className='cause'
      style={{
        backgroundImage: "url(/assets/images/cause/cause-bg.png)",
      }}
    >
      <div className='container'>
        <div className='row gutter-30 align-items-center'>
          <div className='col-12 col-md-8 col-xl-7'>
            <div className='section__header'>
              <span className='sub-title'>
                <i className='icon-donation' />
                Start donating poor people
              </span>
              <h2 className='title-animation_inner'>
                Help &amp; <span>donate to</span> them when they're in need
              </h2>
            </div>
          </div>
          <div className='col-12 col-md-4 col-xl-5'>
            <div className='slider-navigation'>
              <button
                onClick={() => sliderRef.current.slickPrev()}
                type='button'
                aria-label='prev slide'
                title='prev slide'
                className='prev-cause slider-btn'
              >
                <i className='fa-solid fa-arrow-left' />
              </button>
              <button
                onClick={() => sliderRef.current.slickNext()}
                type='button'
                aria-label='next slide'
                title='next slide'
                className='next-cause slider-btn slider-btn-next'
              >
                <i className='fa-solid fa-arrow-right' />
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='cause__slider-wrapper'>
              <div className='cause__slider swiper'>
                <Slider
                  {...settings}
                  ref={sliderRef}
                  className='swiper-wrapper'
                >
                  <div className='swiper-slide'>
                    <div className='cause__slider-inner'>
                      <div className='cause__slider-single'>
                        <div className='thumb'>
                          <Link href='/cause-details'>
                            <img
                              src='/assets/images/cause/one.jpg'
                              alt='Image_inner'
                            />
                          </Link>
                          <div className='tag'>
                            <Link href='/our-causes'>Vocational</Link>
                          </div>
                        </div>
                        <div className='content'>
                          <h6>
                            <Link href='/cause-details'>
                            A pack of ration (Zakat / Non-Zakat)

                            </Link>
                          </h6>
                          <p>
                          Provide a family with food security and ease their monthly burden.


                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            {/* <ProgressBar percent={85} /> */}
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                {/* Amount: <span className='raised'>8500Rs</span> */}
                              </p>
                              <p>
                                Amount: <span className='goal'>5500-7000 </span>
                              </p>
                            </div>
                          </div>
                          <div className='cause__cta'>
                            <Link
                              href='/donate-us'
                              aria-label='donate now'
                              title='donate now'
                              className='btn--secondary'
                            >
                              Donate Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='cause__slider-inner'>
                      <div className='cause__slider-single'>
                        <div className='thumb'>
                          <Link href='/cause-details'>
                            <img
                              src='/assets/images/cause/two.jpeg'
                              alt='Image_inner'
                            />
                          </Link>
                          <div className='tag'>
                            <Link href='/our-causes'>Vocational</Link>
                          </div>
                        </div>
                        <div className='content'>
                          <h6>
                            <Link href='/cause-details'>
                            Sponsor a student (monthly or yearly basis)

                            </Link>
                          </h6>
                          <p>
                          Give a child the gift of education and a brighter future.
                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            {/* <ProgressBar percent={90} /> */}
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                {/* Raised: <span className='raised'>8500Rs</span> */}
                              </p>
                              <p>
                                Amount: <span className='goal'>2000/24000</span>
                              </p>
                            </div>
                          </div>
                          <div className='cause__cta'>
                            <Link
                              href='/donate-us'
                              aria-label='donate now'
                              title='donate now'
                              className='btn--secondary'
                            >
                              Donate Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='cause__slider-inner'>
                      <div className='cause__slider-single'>
                        <div className='thumb'>
                          <Link href='/cause-details'>
                            <img
                              src='/assets/images/cause/five.jpg'
                              alt='Image_inner'
                            />
                          </Link>
                          <div className='tag'>
                            <Link href='/our-causes'>Education</Link>
                          </div>
                        </div>
                        <div className='content'>
                          <h6>
                            <Link href='/cause-details'>Sponsor a vocational course
                            </Link>
                          </h6>
                          <p>
                          Help women and youth gain skills to earn with dignity.


                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            {/* <ProgressBar percent={75} /> */}
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                {/* Raised: <span className='raised'>8500Rs</span> */}
                              </p>
                              <p>
                                Amount: <span className='goal'>3500-4500</span>
                              </p>
                            </div>
                          </div>
                          <div className='cause__cta'>
                            <Link
                              href='/donate-us'
                              aria-label='donate now'
                              title='donate now'
                              className='btn--secondary'
                            >
                              Donate Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='cause__slider-inner'>
                      <div className='cause__slider-single'>
                        <div className='thumb'>
                          <Link href='/cause-details'>
                            <img
                              src='/assets/images/cause/eight.jpg'
                              alt='Image_inner'
                            />
                          </Link>
                          <div className='tag'>
                            <Link href='/our-causes'>Education</Link>
                          </div>
                        </div>
                        <div className='content'>
                          <h6>
                            <Link href='/cause-details'>
                            Sponsor a wedding for a needy girl

                            </Link>
                          </h6>
                          <p>
                          Make a girl’s special day possible and support her new journey.                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            {/* <ProgressBar percent={65} /> */}
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                {/* Raised: <span className='raised'> 8500Rs</span> */}
                              </p>
                              <p>
                                Goal: <span className='goal'>25000</span>
                              </p>
                            </div>
                          </div>
                          <div className='cause__cta'>
                            <Link
                              href='/donate-us'
                              aria-label='donate now'
                              title='donate now'
                              className='btn--secondary'
                            >
                              Donate Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='cause__slider-inner'>
                      <div className='cause__slider-single'>
                        <div className='thumb'>
                          <Link href='/cause-details'>
                            <img
                              src='/assets/images/cause/gym.jpg'
                              alt='Image_inner'
                            />
                          </Link>
                          <div className='tag'>
                            <Link href='/our-causes'>Welfare</Link>
                          </div>
                        </div>
                        <div className='content'>
                          <h6>
                            <Link href='/cause-details'>
                            gym , sewing machines, beautician kits, etc.  

                            </Link>
                          </h6>
                          <p>
                          Give the gift of livelihood through practical tools.
                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            {/* <ProgressBar percent={85} /> */}
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                {/* Raised: <span className='raised'>8500Rs</span> */}
                              </p>
                              <p>
                                Amount: <span className='goal'>11000-150000</span>
                              </p>
                            </div>
                          </div>
                          <div className='cause__cta'>
                            <Link
                              href='/donate-us'
                              aria-label='donate now'
                              title='donate now'
                              className='btn--secondary'
                            >
                              Donate Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='cause__slider-inner'>
                      <div className='cause__slider-single'>
                        <div className='thumb'>
                          <Link href='/cause-details'>
                            <img
                              src='/assets/images/cause/four.jpg'
                              alt='Image_inner'
                            />
                          </Link>
                          <div className='tag'>
                            <Link href='/our-causes'> Ration Distribution</Link>
                          </div>
                        </div>
                        <div className='content'>
                          <h6>
                            <Link href='/cause-details'>
                            Sponsor an instructor/Teacher

                            </Link>
                          </h6>
                          <p>
                          “Equip students with tools they need to learn and excel.
                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            {/* <ProgressBar percent={90} /> */}
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                {/* Raised: <span className='raised'>8500Rs</span> */}
                              </p>
                              <p>
                                Amount: <span className='goal'>1000-35000</span>
                              </p>
                            </div>
                          </div>
                          <div className='cause__cta'>
                            <Link
                              href='/donate-us'
                              aria-label='donate now'
                              title='donate now'
                              className='btn--secondary'
                            >
                              Donate Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='cause__slider-inner'>
                      <div className='cause__slider-single'>
                        <div className='thumb'>
                          <Link href='/cause-details'>
                            <img
                              src='/assets/images/cause/bakra.webp'
                              alt='Image_inner'
                            />
                          </Link>
                          <div className='tag'>
                            <Link href='/our-causes'> Sadqa</Link>
                          </div>
                        </div>
                        <div className='content'>
                          <h6>
                            <Link href='/cause-details'>Sadqa/Non-Zakat items , Bakra, Biryani, Chicken, etc.</Link>
                          </h6>
                          <p>
                          Share your blessings by feeding the underprivileged.
                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            {/* <ProgressBar percent={75} /> */}
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                {/* Raised: <span className='raised'>8500Rs</span> */}
                              </p>
                              <p>
                                Amount: <span className='goal'>500-20000</span>
                              </p>
                            </div>
                          </div>
                          <div className='cause__cta'>
                            <Link
                              href='/donate-us'
                              aria-label='donate now'
                              title='donate now'
                              className='btn--secondary'
                            >
                              Donate Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='cause__slider-inner'>
                      <div className='cause__slider-single'>
                        <div className='thumb'>
                          <Link href='/cause-details'>
                            <img
                              src='/assets/images/cause/cause-bg.jpeg'
                              alt='Image_inner'
                            />
                          </Link>
                          <div className='tag'>
                            <Link href='/our-causes'>  Eid Welfare</Link>
                          </div>
                        </div>
                        <div className='content'>
                          <h6>
                            <Link href='/cause-details'>
                            Sponsor stationary or essential items
                            </Link>
                          </h6>
                          <p>
                          (Computer,science lab equipment )equip students with tools they need to learn and execl.
                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            {/* <ProgressBar percent={65} /> */}
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                {/* Raised: <span className='raised'>8500Rs</span> */}
                              </p>
                              <p>
                                Goal: <span className='goal'>5000-25000</span>
                              </p>
                            </div>
                          </div>
                          <div className='cause__cta'>
                            <Link
                              href='/donate-us'
                              aria-label='donate now'
                              title='donate now'
                              className='btn--secondary'
                            >
                              Donate Now
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='spade'>
        <img src='/assets/images/help/spade.png' alt='Image_inner' />
      </div>
    </section>

  );
};

export default CauseOne;
