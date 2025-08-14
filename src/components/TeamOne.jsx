import Link from "next/link";

const TeamOne = () => {
  return (
    <>
      <section className='team'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10 col-xl-6'>
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
                  Meet Our Team
                  <span>Board</span> members
                </h2>
              </div>
            </div>
          </div>
          <div className='row gutter-40'> 

          <div className='col-12 col-sm-6 col-xl-3'>
              <div
                className='team__single-wrapper'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={600}
              >
                <div className='team__single van-tilt'>
                  <div className='team__single-thumb'>
                    <Link href='/team-details'>
                      <img
                        src='assets/images/team/seven.jpg '
                        alt='Image_inner'
                      />
                    </Link>
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Zohra Begum</Link>
                    </h6>
                    <p> Founder(Al-Zohra Welfare ) </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-xl-3'>
              <div
                className='team__single-wrapper'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='team__single van-tilt'>
                  <div className='team__single-thumb'>
                    <Link href='/team-details'>
                      <img src='assets/images/team/one.jpg' alt='Image_inner' />
                    </Link>                    
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Syed Ahtesham Ali </Link>
                    </h6>
                    <p>President (Honorary)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-6 col-xl-3'>
              <div
                className='team__single-wrapper'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={600}
              >
                <div className='team__single van-tilt'>
                  <div className='team__single-thumb'>
                    <Link href='/team-details'>
                      <img
                        src='assets/images/team/five.png'
                        alt='Image_inner'
                      />
                    </Link>              
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Nadeem Bhurgri</Link>
                    </h6>
                    <p>  (Vice President )  Honorary </p>
                  </div>
                </div>
              </div>
            </div>
            
           

            <div className='col-12 col-sm-6 col-xl-3'>
              <div
                className='team__single-wrapper'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={900}
              >
                <div className='team__single van-tilt'>
                  <div className='team__single-thumb'>
                    <Link href='/team-details'>
                      <img
                        src='assets/images/team/four.png'
                        alt='Image_inner'
                      />
                    </Link>                   
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Nighat Zahra Shah</Link>
                    </h6>
                    <p> (General Secretary) Honorary</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3"></div>
            <div className='col-12 col-sm-6 col-xl-3'>
              <div
                className='team__single-wrapper'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={600}
              >
                <div className='team__single van-tilt'>
                  <div className='team__single-thumb'>
                    <Link href='/team-details'>
                      <img
                        src='assets/images/team/three.png'
                        alt='Image_inner'
                      />
                    </Link>            
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>DR. Sara Gardezi</Link>
                    </h6>
                    <p> (TRASURER) Honorary </p>
                  </div>
                </div>
              </div>
            </div>
          
            <div className='col-12 col-sm-6 col-xl-3'>
              <div
                className='team__single-wrapper'
                data-aos='fade-up'
                data-aos-duration={1000}
                data-aos-delay={300}
              >
                <div className='team__single van-tilt'>
                  <div className='team__single-thumb'>
                    <Link href='/team-details'>
                      <img src='assets/images/team/two.png' alt='Image_inner' />
                    </Link>                    
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Imran Ahsen Shah</Link>
                    </h6>
                    <p>(Joint Secretary) Honorary </p>
                  </div>
                </div>
              </div>
            </div>
          
          
           
            
            
            
          
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='section__cta cta text-center'>
                <Link
                  href='/our-team'
                  aria-label='our team'
                  title='our team'
                  className='btn--primary'
                >
                  View All
                  <i className='fa-solid fa-arrow-right' />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='spade'>
          <img src='assets/images/sprade-green.png' alt='Image_inner' />
        </div>
      </section>
    </>
  );
};

export default TeamOne;
