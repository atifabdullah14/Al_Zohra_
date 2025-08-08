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
                              Empower Women with Skills
                            </Link>
                          </h6>
                          <p>
                            Help women gain practical skills through stitching, embroidery, and IT training to achieve financial independence.
                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            <ProgressBar percent={85} />
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                Raised: <span className='raised'>8500Rs</span>
                              </p>
                              <p>
                                Goal: <span className='goal'>1,0000Rs</span>
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
                              src='/assets/images/cause/two.jpg'
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
                            Support Youth for Jobs
                            </Link>
                          </h6>
                          <p>
                          Provide technical training to unemployed youth to build their careers and secure stable livelihoods.
                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            <ProgressBar percent={90} />
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                Raised: <span className='raised'>8500Rs</span>
                              </p>
                              <p>
                                Goal: <span className='goal'>1,0000Rs</span>
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
                              src='/assets/images/cause/three.jpg'
                              alt='Image_inner'
                            />
                          </Link>
                          <div className='tag'>
                            <Link href='/our-causes'>Education</Link>
                          </div>
                        </div>
                        <div className='content'>
                          <h6>
                            <Link href='/cause-details'>Educate a Child Today</Link>
                          </h6>
                          <p>
                          Support a child’s schooling by covering books, uniforms, fees, and a safe learning environment.


                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            <ProgressBar percent={75} />
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                Raised: <span className='raised'>8500Rs</span>
                              </p>
                              <p>
                                Goal: <span className='goal'>1,0000Rs</span>
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
                              src='/assets/images/cause/four.jpeg'
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
                            Build Bright Futures
                            </Link>
                          </h6>
                          <p>
                          Help us construct and maintain schools to provide accessible education in underserved areas
                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            <ProgressBar percent={65} />
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                Raised: <span className='raised'> 8500Rs</span>
                              </p>
                              <p>
                                Goal: <span className='goal'>1,0000Rs</span>
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
                            <Link href='/our-causes'>Welfare</Link>
                          </div>
                        </div>
                        <div className='content'>
                          <h6>
                            <Link href='/cause-details'>
                            Feed a Family
                            </Link>
                          </h6>
                          <p>
                          Donate monthly food packs to needy families and fight hunger within our community.
                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            <ProgressBar percent={85} />
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                Raised: <span className='raised'>8500Rs</span>
                              </p>
                              <p>
                                Goal: <span className='goal'>1,0000Rs</span>
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
                              src='/assets/images/cause/six.jpg'
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
                            Food & Ration Support
                            </Link>
                          </h6>
                          <p>
                          Provide essential food items to families struggling to make ends meet.
                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            <ProgressBar percent={90} />
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                Raised: <span className='raised'>8500Rs</span>
                              </p>
                              <p>
                                Goal: <span className='goal'>1,0000Rs</span>
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
                              src='/assets/images/cause/seven.jpg'
                              alt='Image_inner'
                            />
                          </Link>
                          <div className='tag'>
                            <Link href='/our-causes'> Sponsor a Student</Link>
                          </div>
                        </div>
                        <div className='content'>
                          <h6>
                            <Link href='/cause-details'>Equipping Students with School Essentials</Link>
                          </h6>
                          <p>
                          We distribute school kits including bags, notebooks, and stationery to help kids succeed in school.
                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            <ProgressBar percent={75} />
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                Raised: <span className='raised'>8500Rs</span>
                              </p>
                              <p>
                                Goal: <span className='goal'>1,0000Rs</span>
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
                            <Link href='/our-causes'>  Eid Welfare</Link>
                          </div>
                        </div>
                        <div className='content'>
                          <h6>
                            <Link href='/cause-details'>
                            Spreading Joy with Eid Gift Packs
                            </Link>
                          </h6>
                          <p>
                          We spread smiles by gifting clothes, shoes, and essentials to children during Eid
                          </p>
                        </div>
                        <div className='cause__slider-cta'>
                          <div className='cause__progress progress-bar-single'>
                            {/* ProgressBar */}
                            <ProgressBar percent={65} />
                            {/* ProgressBar */}
                            <div className='cause-progress__goal'>
                              <p>
                                Raised: <span className='raised'>8500Rs</span>
                              </p>
                              <p>
                                Goal: <span className='goal'>1,0000Rs</span>
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
