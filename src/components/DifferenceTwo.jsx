"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const DifferenceTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");
  
  return (
    <>
      <section className='difference-two'>
        <div className='container'>
          <div className='row gutter-40 align-items-center'>
            <div className="col-12 col-md-5 col-lg-4 col-xxl-5 d-none d-md-block">
              <div data-aos="fade-right" data-aos-duration="1000">
                <img
                  src="/assets/images/donation/h-v.jpg"
                  alt="Support & Donate"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: 800, objectFit: "cover", width: "100%" }}
                />
              </div>
            </div>





            <div className='col-12 col-md-7 col-lg-8 col-xxl-7'>
              <div className='difference-two__tab'>
                <div className='difference-two__content'>
                  <span className='sub-title'>
                    <i className='icon-donation' />
                    Please start donating
                  </span>
                  <h2 className='title-animation_inner'>
                    Donate and <span>Support</span> to Make a Difference 
                  </h2>
                  <p>
                    Charity is the voluntary act of giving help, typically in
                    the form of money, time, or resources, to those in need.
                    Charitable organizations aim to solve social, environmental,
                    and economic challenges by addressing issues like poverty,
                  </p>

                  <div className='difference-two__inner cta'>
                    <div className='difference-two__inner-content'>
                      {/* TABS */}
                      <div className='difference-two__tab'>
                        <div className='difference-two__tab-btns'>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "mission" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("mission")}
                            aria-label='mission'
                            title='mission'
                          >
                            Our Mission
                          </button>
                          <button
                            className={`difference-two__tab-btn ${
                              activeTab === "vision" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("vision")}
                            aria-label='vision'
                            title='vision'
                          >
                            Our Vision
                          </button>
                        </div>

                        <div className='difference-two__tab-content'>
                          {activeTab === "mission" && (
                            <div
                              className='difference-two__content-single'
                              id='mission'
                            >
                              <ul>
                                <li>
                                  Our vision is to deliver high quality education, skill building and training along with moral and ethical values to encourage students to become confident and responsible citizens. We provide all this at a reasonable cost. We aim to assist the destitute with ration and any other monetary help they may require. We endeavor to make them independent so that they may be an asset to society. Our goal is to help these individuals to utilize their full potential and achieve excellence of life.
                                </li>
                              </ul>
                            </div>
                          )}
                          {activeTab === "vision" && (
                            <div
                              className='difference-two__content-single'
                              id='vision'
                            >
                              <ul>
                                <li>
                                  <i className='fa-solid fa-check' />To provide very high quality education at nominal cost.
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' />To increase women participation in the development of the nation.
                                </li>
                                <li>
                                  <i className='fa-solid fa-check' />To improve the quality of lives of the current and the coming generations.
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* PROGRESS */}
                      <div className='difference-two__progress'>
                        <div className='difference-progress-single'>
                          <div
                            className='progress-bar-single'
                            data-percent='75%'
                          >
                            <div className='circular-progress'>
                              <div className='percent-value'>55%</div>
                              <svg
                                className='progress-circle'
                                viewBox='0 0 36 36'
                              >
                                <path
                                  className='circle-bg'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                                <path
                                  style={{ strokeDasharray: 55 }}
                                  className='circle-progress'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='content'>
                            <p>
                              Treatment <br />
                              Helping
                            </p>
                          </div>
                        </div>
                        <div className='difference-progress-single'>
                          <div
                            className='progress-bar-single'
                            data-percent='92%'
                          >
                            <div className='circular-progress'>
                              <div className='percent-value'>85%</div>
                              <svg
                                className='progress-circle'
                                viewBox='0 0 36 36'
                              >
                                <path
                                  className='circle-bg'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                                <path
                                  style={{ strokeDasharray: 60 }}
                                  className='circle-progress'
                                  d='M18 2.0845
                         a 15.9155 15.9155 0 0 1 0 31.831
                         a 15.9155 15.9155 0 0 1 0 -31.831'
                                />
                              </svg>
                            </div>
                          </div>
                          <div className='content'>
                            <p>
                              Highest <br />
                              Fund Raised
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CARD */}
                    {/* <div className='difference-two__card'>
                      <div className='card-group'>
                        <div className='thumb'>
                          <i className='icon-donation-card' />
                        </div>
                        <div className='content'>
                          <h6>Donate Now</h6>
                          <p>Rs:40,456</p>
                        </div>
                      </div>
                      <hr />
                      <div className='card-group card-group-alt'>
                        <div className='thumb'>
                          <i className='icon-fund' />
                        </div>
                        <div className='content'>
                          <h6>Milestone <span>Achieved</span>: </h6>
                          <p>Rs:1,540,456</p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XxVg_s8xAms'
        onClose={() => setIsOpen(false)}
        allowFullScreen
      />
    </>
  );
};

export default DifferenceTwo;
