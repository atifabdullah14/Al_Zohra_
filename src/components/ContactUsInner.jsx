const ContactUsInner = () => {
  return (
    <section className='contact-main volunteer'>
      <div className='container'>
        <div className='row gutter-40'>
          <div className='col-12 col-xl-6'>
            <div className='contact__content'>
              <div
                className='section__content'
                data-aos='fade-up'
                data-aos-duration={1000}
              >
                <span className='sub-title'>
                  <i className='icon-donation' /> Get In Touch
                </span>
                <h2 className='title-animation_inner'>Contact Us</h2>
                <p>
                We’re here to help and answer any questions you might have. Feel free to reach out to us via phone or visit us at our location.
                </p>
              </div>
              <div className='contact-main__inner cta'>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-location-dot' />
                  </div>
                  <div className='content'>
                    <h6>Location</h6>
                    <p>
                      <a
                        href='https://www.google.com/maps/place/Al+Zohra+Welfare+Association/@24.8324188,67.0447765,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33c352507bd75:0x6b7775ef526e450c!8m2!3d24.832414!4d67.0473514!16s%2Fg%2F11g9mzcxz6?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D'
                        target='_blank'
                        rel='noreferrer'
                      >
                        No: 211 75600, 1 Jami Commercial Street 11, Delhi Colony, Karachi, 75500
                      </a>
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-phone' />
                  </div>
                  <div className='content'>
                    <h6>Phone</h6>
                    <p>
                      <a href='tel:(021) 35156241'> Phone : (021) 35156241 </a>
                    </p>
                    <p>
                      <a href='tel:+92 320 1431143'>Whatsapp : +92 320 1431143</a>
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-envelope' />
                  </div>
                  <div className='content'>
                    <h6>Email</h6>
                    <p>
                      <a href='mailto:support@example.com'>al_zohra_association@yahoo.com</a>
                    </p>
                    <p>
                      <a href='mailto:support@example.com'>
                      al_zohra_association@yahoo.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className='contact-main__single'>
                  <div className='thumb'>
                    <i className='fa-solid fa-share-nodes' />
                  </div>
                  <div className='content'>
                    <h6>Social</h6>
                    <div className='social'>
                      <a
                        href='https://www.facebook.com/AlzohraWelfare'
                        target='_blank'
                        aria-label='share us on facebook'
                        title='facebook'
                        rel='noreferrer'
                      >
                        <i className='fa-brands fa-facebook-f' />
                      </a>
                      <a
                        href="https://www.instagram.com/alzohra.welfare/?hl=en"
                        target="_blank"
                        rel="noreferrer"
                        title="instagram"
                      >
                      <i className="fa-brands fa-instagram"></i>
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
                  </div>
                </div>
              </div>
              <div className='contact-main__thumb cta'>
                <img src='assets/images/banner/banner-12.jpg' alt='Image_inner' />
              </div>
            </div>
          </div>
          <div className='col-12 col-xl-6'>
            <div
              className='contact__form volunteer__form checkout__form'
              data-aos='fade-up'
              data-aos-duration={1000}
              data-aos-delay={100}
            >
              <div className='volunteer__form-content'>
                <h4 className='title-animation_inner'>Fill Up The Form</h4>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <form action='#' method='post' className='cta'>
                <div className='input-single'>
                  <input
                    type='text'
                    name='full-name'
                    id='fullName'
                    placeholder='Enter Name'
                    required=''
                  />
                  <i className='fa-solid fa-user' />
                </div>
                <div className='input-single'>
                  <input
                    type='email'
                    name='c-email'
                    id='cEmail'
                    placeholder='Enter Email'
                    required=''
                  />
                  <i className='fa-solid fa-envelope' />
                </div>
                <div className='input-single'>
                  <input
                    type='text'
                    name='phone-number'
                    id='phoneNumber'
                    placeholder='Phone Number'
                    required=''
                  />
                  <i className='fa-solid fa-phone' />
                </div>
                <div className='input-single alter-input'>
                  <textarea
                    name='contact-message'
                    id='contactMessage'
                    placeholder='Your Message...'
                    defaultValue={""}
                  />
                  <i className='fa-solid fa-comments' />
                </div>
                <div className='form-cta'>
                  <button
                    type='submit'
                    aria-label='submit message'
                    title='submit message'
                    className='btn--primary'
                  >
                    Get A Quote <i className='fa-solid fa-arrow-right' />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsInner;
