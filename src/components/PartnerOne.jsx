"use client";
import Slider from "react-slick";

const PartnerOne = () => {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className='partner'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='partner__slider swiper'>
              <Slider {...settings} className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <div className='partner__slider-single'>
                    <img
                      src='/assets/images/sponsor/1.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='partner__slider-single'>
                    <img
                      src='/assets/images/sponsor/3.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='partner__slider-single'>
                    <img
                      src='/assets/images/sponsor/2.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='partner__slider-single'>
                    <img
                      src='/assets/images/sponsor/33.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='partner__slider-single'>
                    <img
                      src='/assets/images/sponsor/3.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='partner__slider-single'>
                    <img
                      src='/assets/images/sponsor/4.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='partner__slider-single'>
                    <img
                      src='/assets/images/sponsor/1.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='partner__slider-single'>
                    <img
                      src='/assets/images/sponsor/2.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='partner__slider-single'>
                    <img
                      src='/assets/images/sponsor/3.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='partner__slider-single'>
                    <img
                      src='/assets/images/sponsor/4.png'
                      alt='Image_inner'
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerOne;
