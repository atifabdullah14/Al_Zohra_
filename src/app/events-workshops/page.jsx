import BreadcrumbOne from '@/components/BreadcrumbOne';
import FooterOne from '@/components/FooterOne';
import HeaderOne from '@/components/HeaderOne';
import Preloader from '@/components/Preloader';
import TopBarOne from '@/components/TopBarOne';
import AOSWrap from '@/helper/AOSWrap';
import CustomCursor from '@/helper/CustomCursor';
import Link from 'next/link';

export default function EventsWorkshopsPage() {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />
        {/* CustomCursor  */}
        <CustomCursor />
        {/* TopBarOne */}
        <TopBarOne />
        {/* HeaderOne */}
        <HeaderOne />
        {/* BreadcrumbOne */}
        <BreadcrumbOne title='Events & Workshops' />
        {/* Main Content */}
        <section className='event event-alt'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-md-8 col-xl-7'>
                <div className='section__header text-center' data-aos='fade-up' data-aos-duration={1000}>
                  <span className='sub-title'>
                    <i className='icon-donation' />
                    Join our upcoming events & workshops
                  </span>
                  <h2 className='title-animation_inner'>
                    Explore <span>Events</span> & <span>Workshops</span>
                  </h2>
                  <p>Participate, learn, and make a difference with Al Zohra Welfare Association.</p>
                </div>
              </div>
            </div>
            <div className='row gutter-30'>
              {/* Event 1 */}
              <div className='col-12 col-lg-6 col-xl-7'>
                <div className='event__single-wrapper' data-aos='fade-up' data-aos-duration={1000}>
                  <div className='event__single van-tilt'>
                    <div className='event__single-thumb'>
                      <img src='/assets/images/event/one.png' alt='Event' />
                    </div>
                    <div className='event__content'>
                      <span>April 15, 2024</span>
                      <h4>
                        <Link href='/event-details'>Annual Fundraising Gala</Link>
                      </h4>
                      <p><i className='fa-solid fa-location-dot' /> Karachi Arts Council</p>
                      <p>Join us for an inspiring evening to support our ongoing projects and celebrate our community impact.</p>
                    </div>
                  </div>
                </div>
                {/* Event 2 */}
                <div className='event__single-wrapper' data-aos='fade-up' data-aos-duration={1000} data-aos-delay={200}>
                  <div className='event__single van-tilt'>
                    <div className='event__single-thumb'>
                      <img src='/assets/images/event/four.png' alt='Event' />
                    </div>
                    <div className='event__content'>
                      <span>July 20, 2024</span>
                      <h4>
                        <Link href='/event-details'>Community Iftar Gathering</Link>
                      </h4>
                      <p><i className='fa-solid fa-location-dot' /> Al Zohra Center Lawn</p>
                      <p>Break your fast with us and enjoy a night of unity, charity, and community spirit.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Workshop 1 */}
              <div className='col-12 col-lg-6 col-xl-5'>
                <div className='event__single-wrapper' data-aos='fade-left' data-aos-duration={1000}>
                  <div className='event__single event-single-alt van-tilt'>
                    <div className='event__single-thumb'>
                      <img src='/assets/images/event/two.png' alt='Workshop' />
                    </div>
                    <div className='event__content'>
                      <span>May 10, 2024</span>
                      <h4>
                        <Link href='/event-details'>Women Empowerment Workshop</Link>
                      </h4>
                      <p><i className='fa-solid fa-location-dot' /> Al Zohra Community Center</p>
                      <p>Interactive sessions and skill-building for women in our community. Open for all ages.</p>
                    </div>
                  </div>
                </div>
                {/* Workshop 2 */}
                <div className='event__single-wrapper' data-aos='fade-left' data-aos-duration={1000} data-aos-delay={300}>
                  <div className='event__single  event-single-alt van-tilt'>
                    <div className='event__single-thumb'>
                      <img src='/assets/images/event/three.png' alt='Workshop' />
                    </div>
                    <div className='event__content'>
                      <span>June 5, 2024</span>
                      <h4>
                        <Link href='/event-details'>Health & Hygiene Awareness</Link>
                      </h4>
                      <p><i className='fa-solid fa-location-dot' /> Gulshan School Hall</p>
                      <p>Learn about personal and family health, nutrition, and hygiene from expert speakers.</p>
                    </div>
                  </div>
                </div>
                {/* Workshop 3 */}
                <div className='event__single-wrapper' data-aos='fade-left' data-aos-duration={1000} data-aos-delay={500}>
                  <div className='event__single  event-single-alt van-tilt'>
                    <div className='event__single-thumb'>
                      <img src='/assets/images/event/five.png' alt='Workshop' />
                    </div>
                    <div className='event__content'>
                      <span>August 12, 2024</span>
                      <h4>
                        <Link href='/event-details'>Youth Leadership Bootcamp</Link>
                      </h4>
                      <p><i className='fa-solid fa-location-dot' /> City Youth Center</p>
                      <p>Empowering the next generation with leadership, teamwork, and social responsibility skills.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <div className='row'>
              <div className='col-12'>
                <div className='pagination-wrapper' data-aos='fade-up' data-aos-duration={1000}>
                  <ul className='pagination main-pagination'>
                    <li><button><i className='fa-solid fa-angles-left' /></button></li>
                    <li><Link href='/events-workshops'>1</Link></li>
                    <li><Link href='/events-workshops' className='active'>2</Link></li>
                    <li><Link href='/events-workshops'>3</Link></li>
                    <li><button><i className='fa-solid fa-angles-right' /></button></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='spade'>
            <img src='/assets/images/blog/spade-base.png' alt='Decoration' className='base-img' />
          </div>
        </section>
        {/* FooterOne */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
} 