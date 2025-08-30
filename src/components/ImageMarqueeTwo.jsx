"use client";
import Slider from "react-slick";

const ImageMarqueeTwo = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: false,
    arrows: false,
    rtl: true, // This makes it slide from left to right
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='image-marquee-two'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='image-marquee-two__slider swiper'>
              <Slider {...settings} className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <div className='image-marquee-two__slider-single'>
                    <img
                      src='/assets/images/marquee/2.jpg'
                      alt='Gallery Image 1'
                      className='img-fluid'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='image-marquee-two__slider-single'>
                    <img
                      src='/assets/images/marquee/8.jpg'
                      alt='Gallery Image 2'
                      className='img-fluid'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='image-marquee-two__slider-single'>
                    <img
                      src='/assets/images/marquee/7.jpg'
                      alt='Gallery Image 3'
                      className='img-fluid'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='image-marquee-two__slider-single'>
                    <img
                      src='/assets/images/marquee/6.jpg'
                      alt='Gallery Image 4'
                      className='img-fluid'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='image-marquee-two__slider-single'>
                    <img
                      src='/assets/images/marquee/5.jpg'
                      alt='Gallery Image 5'
                      className='img-fluid'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='image-marquee-two__slider-single'>
                    <img
                      src='/assets/images/marquee/4.jpg'
                      alt='Gallery Image 6'
                      className='img-fluid'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='image-marquee-two__slider-single'>
                    <img
                      src='/assets/images/marquee/3.jpg'
                      alt='Gallery Image 7'
                      className='img-fluid'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='image-marquee-two__slider-single'>
                    <img
                      src='/assets/images/marquee/2.jpg'
                      alt='Gallery Image 8'
                      className='img-fluid'
                    />
                  </div>
                </div>
                {/* Duplicate images for seamless loop */}
                <div className='swiper-slide'>
                  <div className='image-marquee-two__slider-single'>
                    <img
                      src='/assets/images/marquee/1.jpg'
                      alt='Gallery Image 1'
                      className='img-fluid'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='image-marquee-two__slider-single'>
                    <img
                      src='/assets/images/marquee/8.jpg'
                      alt='Gallery Image 2'
                      className='img-fluid'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='image-marquee-two__slider-single'>
                    <img
                      src='/assets/images/marquee/4.jpg'
                      alt='Gallery Image 3'
                      className='img-fluid'
                    />
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='image-marquee-two__slider-single'>
                    <img
                      src='/assets/images/marquee/6.jpg'
                      alt='Gallery Image 4'
                      className='img-fluid'
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

export default ImageMarqueeTwo;
