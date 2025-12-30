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
                  Please start donating
                </span>
                <h2 className='title-animation_inner'>
                  Meet Our Board
                  <span>members</span> 
                </h2>
              </div>
            </div>
          </div>
          <div className='row gutter-40'> 

          {/* <div className='col-12 col-sm-6 col-xl-3'>
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
            </div> */}
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
                    <p>President (Honorary) <br />
                    Advocate & Landlord
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
                    <p>  (Vice President )  Honorary <br />
                    Business Man
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
                data-aos-delay={900}
              >
                <div className='team__single van-tilt'>
                  <div className='team__single-thumb'>
                    <Link href='/team-details'>
                      <img
                        src='assets/images/team/four.jpg'
                        alt='Image_inner'
                      />
                    </Link>                   
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Nighat Zahra Shah</Link>
                    </h6>
                    <p> (General Secretary) Honorary
                      <br /> Housewife
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-12 col-sm-6 col-xl-3"></div> */}
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
                        src='assets/images/team/three.jpg'
                        alt='Image_inner'
                      />
                    </Link>            
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>DR. Sara Gardezi</Link>
                    </h6>
                    <p> (TRASURER) Honorary
                      <br /> MBBS, MPHIL, Doctor  </p>
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
                      <Link href='/team-details'>Imran Ahsan Shah</Link>
                    </h6>
                    <p>(Joint Secretary) Honorary
                      <br /> Chief Supply Chain Officer, Gatronova. </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Meet our executive members  */}
            <div
                className='section__header text-center'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' />
                  Please start donating
                </span>
                <h2 className='title-animation_inner'>
                  Meet Our Executive <span>members</span>
                   
                </h2>
              </div>
              {/* 1.Ms. Mehmooda zarin Bhurgri */}              
              <div className='col-12 col-sm-6 col-xl-3'>
              <div
                className='team__single-wrapper'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='team__single van-tilt'>
                  <div className='team__single-thumb'>
                    <Link href='/team-details'>
                      <img src='assets/images/team/120.png' alt='Image_inner' />
                    </Link>                    
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Ms.Mehmooda zarin Burghari</Link>
                    </h6>
                    <p>Executive member
                    </p>
                  </div>
                </div>
              </div>
            </div>
              {/* 2.Mr. Asad Ali Shah */}

            <div className='col-12 col-sm-6 col-xl-3'>
              <div
                className='team__single-wrapper'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='team__single van-tilt'>
                  <div className='team__single-thumb'>
                    <Link href='/team-details'>
                      <img src='assets/images/team/NINE10.png' alt='Image_inner' />
                    </Link>                    
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Mr. Asad Ali Shah </Link>
                    </h6>
                    <p>Exective member
                    </p>
                  </div>
                </div>
              </div>
            </div>
             {/* 3. Bibi Naila Naveen */}
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
                        src='assets/images/team/ELEVEN.jpg'
                        alt='Image_inner'
                      />
                    </Link>              
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Bibi Naila Naveen</Link>
                    </h6>
                    <p>  Executive member </p>
                  </div>
                </div>
              </div>
            </div>          
           {/* 4.Ms. Mehnaz Mahmud */}
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
                        src='assets/images/team/12.jpg'
                        alt='Image_inner'
                      />
                    </Link>                   
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Ms. Mehnaz Mahmud</Link>
                    </h6>
                    <p> Executive member</p>
                  </div>
                </div>
              </div>
            </div>
           {/* 5.Syed Hassan Javed Gardezi */}  
            {/* <div className="col-12 col-sm-6 col-xl-3"></div> */}
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
                        src='assets/images/team/13.jpg'
                        alt='Image_inner'
                      />
                    </Link>            
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Syed Hassan Javed</Link>
                    </h6>
                    <p> Executive member</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div className="col-12 col-sm-6 col-xl-3"></div> */}
            {/* 6.Ms. Sakeena Bhurgri */}
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
                      <img src='assets/images/team/18.png' alt='Image_inner' />
                    </Link>                    
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Ms. Sakeena Bhurgri</Link>
                    </h6>
                    <p>Executive members</p>
                  </div>
                </div>
              </div>
            </div>
          {/* 7.Hafiz Muhammad Faisal Lakhani */}

            <div className='col-12 col-sm-6 col-xl-3'>
              <div
                className='team__single-wrapper'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <div className='team__single van-tilt'>
                  <div className='team__single-thumb'>
                    <Link href='/team-details'>
                      <img src='assets/images/team/19.jpg' alt='Image_inner' />
                    </Link>                    
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'> Mr.Hafiz  M Faisal  </Link>
                    </h6>
                    <p>Executive member
                    </p>
                  </div>
                </div>
              </div>
            </div>
                   {/* 8.Mr. Khalid Hassan Butt */}   
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
                        src='assets/images/team/20.jpg'
                        alt='Image_inner'
                      />
                    </Link>              
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Mr. Khalid Hassan  </Link>
                    </h6>
                    <p> Executive member </p>
                  </div>
                </div>
              </div>
            </div>          
             {/* 9.Ms. Kinza Imran Shah */}
             <div className="col-12 col-sm-6 col-xl-3"></div>

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
                        src='assets/images/team/110.png'
                        alt='Image_inner'
                      />
                    </Link>                   
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Ms. Kinza Imran </Link>
                    </h6>
                    <p> Executive member</p>
                  </div>
                </div>
              </div>
            </div>
             {/* 10. Maria kahild  */}

           


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
                        src='assets/images/team/110.png'
                        alt='Image_inner'
                      />
                    </Link>            
                  </div>
                  <div className='team__single-content'>
                    <h6>
                      <Link href='/team-details'>Ms.Maria khalid </Link>
                    </h6>
                    <p> Executive member </p>
                  </div>
                </div>
              </div>
            </div>
        

            {/* <div className='col-12 col-sm-6 col-xl-3'>
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
                      <Link href='/team-details'>Ms. Sakeena Bhurgri</Link>
                    </h6>
                    <p>(Joint Secretary) Honorary </p>
                  </div>
                </div>
              </div>
            </div> */}
            
          
           
            
            
            
          
          </div>
          {/* <div className='row'>
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
          </div> */}
        </div>
        <div className='spade'>
          <img src='assets/images/sprade-green.png' alt='Image_inner' />
        </div>
      </section>
    </>
  );
};

export default TeamOne;
