import Link from "next/link";

const TeamDetailsInner = () => {
  return (
    <section className='team-details'>
      <div className='container'>
        <div className='row gutter-40 align-items-center'>
          <div className='col-12 col-lg-6 col-xl-5'>
            <div
              className='team-details__thumb'
              data-aos='zoom-in'
              data-aos-duration={1000}
            >
              <img src='assets/images/team/sevend.png' alt='Image_inner' />
            </div>
          </div>
          <div className='col-12 col-lg-6 col-xl-5'>
            <div
              className='team-details__thumb'
              data-aos='zoom-in'
              data-aos-duration={1000}
            >
              <img src='assets/images/team/sevend.png' alt='Image_inner' />
            </div>
          </div>
          <div className='col-12 col-lg-6 col-xl-7'>
            <div
              className='team-details__content'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              {/* <div className='team-details__meta'>
                <h4 className='title-animation_inner'>George Clooney</h4>
                <p className='designation'>Volunteer</p>
                <div className='social'>
                  <a
                    href='https://www.facebook.com/'
                    target='_blank'
                    aria-label='share us on facebook'
                    title='facebook'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-facebook-f' />
                  </a>
                  <a
                    href='https://vimeo.com/'
                    target='_blank'
                    aria-label='share us on vimeo'
                    title='vimeo'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-vimeo-v' />
                  </a>
                  <a
                    href='https://x.com/'
                    target='_blank'
                    aria-label='share us on twitter'
                    title='twitter'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-twitter' />
                  </a>
                  <a
                    href='https://www.linkedin.com/'
                    target='_blank'
                    aria-label='share us on linkedin'
                    title='linkedin'
                    rel='noreferrer'
                  >
                    <i className='fa-brands fa-linkedin-in' />
                  </a>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, con adipiscing elit tiam convallis
                  elit id impedie. Quisq commodo simply free ornare tortor. If
                  you are going to use a passage.
                </p>
              </div> */}
              {/* <div className='my-word'>
                <h5>Beloved Zohra Begum (our Founder)</h5>
                <h6>Our beloved founder, Hazrat Zohra Begum, belonged to a noble landlord and Sardar family of Punjab. She was a humble and pious soul, deeply passionate about helping the less fortunate especially those who suffer in silence without asking for help. Through Al Zohra, she aspired to reach out to such women and uplift their lives. Today, at Al Zohra, we continue to follow her noble footsteps and carry forward her vision with dedication and compassion.</h6>
              </div> */}
              {/* <div className='progress-wrapper'>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__bar'>
                    <p>Donation Collect</p>
                    <div className='progress-bar-wrapper' data-percent='70%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "70%" }}
                        >
                          <span className='percent-value'>70%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='cause__progress progress-bar-single'>
                  <div className='cause-progress__bar'>
                    <p>Successful Events</p>
                    <div className='progress-bar-wrapper' data-percent='85%'>
                      <div className='progress-bar'>
                        <div
                          className='progress-bar-percent'
                          style={{ width: "85%" }}
                        >
                          <span className='percent-value'>85%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className='team-details__list'>
                <ul>
                  <li>
                    <i className='icon-circle-check' />
                    Best Quality Services
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Time Saving
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    Meet the Deadlines
                  </li>
                  <li>
                    <i className='icon-circle-check' />
                    24/7 Customer Support
                  </li>
                </ul>
              </div> */}
              {/* <div className='team-details__cta cta'>
                <Link
                  href='/donate-us'
                  aria-label='make a donation'
                  title='make a donation'
                  className='btn--primary'
                >
                  {" "}
                  Donate With Me <i className='fa-solid fa-arrow-right' />
                </Link>
              </div> */}
            </div>
          </div>
          <div className='col-12'>
            <div
              className='about-me'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <h4 className='title-animation_inner'>Beloved Zohra Begum (our Founder)</h4>
              <p>
                Our beloved founder, Hazrat Zohra Begum, hailed from a distinguished and noble family of landlords and Sardars in Punjab. She was a woman of exceptional humility and deep piety, with a heart that burned with compassion for the less fortunate. Hazrat Zohra Begum dedicated her life to helping those who suffer in silence those who, despite their struggles, never ask for help. Her vision through Al Zohra was to extend a hand of kindness and support to these silent sufferers, particularly women who find themselves in vulnerable situations.

                At Al Zohra, we are honored to continue the legacy of Hazrat Zohra Begum. Her unwavering dedication to upliftment and her profound sense of compassion guide us every day as we strive to make a meaningful difference in the lives of those in need. We remain steadfast in our commitment to carry forward her noble mission with the same sincerity and passion that she embodied.
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsInner;
