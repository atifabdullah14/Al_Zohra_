"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderOne = () => {
  let pathname = usePathname();
  let [search, setSearch] = useState(false);
  let [mobileMenu, setMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleSearch = () => {
    setSearch(!search);
  };
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const mobileMenuListRef = useRef(null);

  useEffect(() => {
    const desktopMenu = document.querySelector(".navbar__menu");

    if (desktopMenu && mobileMenuListRef.current) {
      mobileMenuListRef.current.innerHTML = desktopMenu.innerHTML;

      const setupDropdownToggles = (container) => {
        const dropdownLabels = container.querySelectorAll(
          ".navbar__dropdown-label"
        );

        dropdownLabels.forEach((label) => {
          label.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            const subMenu = this.nextElementSibling;

            // ✅ Only close siblings within the same level (UL)
            const siblingLabels = Array.from(
              this.closest("ul")?.querySelectorAll(
                ":scope > li > .navbar__dropdown-label"
              ) || []
            );

            siblingLabels.forEach((sibling) => {
              const siblingSubMenu = sibling.nextElementSibling;

              if (
                sibling !== this &&
                siblingSubMenu &&
                siblingSubMenu.classList.contains("navbar__sub-menu")
              ) {
                siblingSubMenu.style.maxHeight = "0px";
                siblingSubMenu.classList.remove("show");
                sibling.classList.remove("navbar__item-active");
              }
            });

            // Toggle current submenu with smooth animation
            if (subMenu && subMenu.classList.contains("navbar__sub-menu")) {
              const isOpen = subMenu.classList.contains("show");

              if (isOpen) {
                subMenu.style.maxHeight = "0px";
                subMenu.classList.remove("show");
                this.classList.remove("navbar__item-active");
              } else {
                subMenu.classList.add("show");
                subMenu.style.maxHeight = subMenu.scrollHeight + "px";
                this.classList.add("navbar__item-active");
              }
            }
          });
        });
      };

      setupDropdownToggles(mobileMenuListRef.current);
    }
  }, []);

  return (
    <>
      <header
        className={`header header-secondary ${scroll && "sticky-header"}`}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='main-header__menu-box'>
                <nav className='navbar p-0'>
                  <div className='navbar-logo'>
                    <Link href='/'>
                      <img src='/assets/images/logo.png' alt='Image_inner' />
                    </Link>
                  </div>
                  <div className='navbar__menu-wrapper'>
                    <div className='navbar__menu d-none d-xl-block'>
                      <ul className='navbar__list'>
                        {/* Our Founder */}
                        <li
                          className={`navbar__item nav-fade ${pathname === "/contact-us" ? "active" : ""}`}
                        >
                          <Link href='/our-founder'>Our Founder</Link>
                        </li>
                        {/* Home */}
                        <li
                          className={`navbar__item nav-fade ${pathname === "/" ? "active" : ""}`}
                        >
                          <Link href='/' aria-label='Home'>Home</Link>
                        </li>

                        {/* Programs */}
                        <li
                          className={`navbar__item navbar__item--has-children nav-fade ${[
                            "/vocational-training",
                            "/welfare-assistance",
                            "/alzohra-secondary-school"
                          ].includes(pathname) ? "active" : ""}`}
                        >
                          <Link href='#' aria-label='Programs' className='navbar__dropdown-label dropdown-label-alter'>Programs</Link>
                          <ul className='navbar__sub-menu'>
                            <li className={pathname === "/vocational-training" ? "active" : ""}>
                              <Link href='/vocational-training'>Vocational Training</Link>
                            </li>
                            <li className={pathname === "/welfare-assistance" ? "active" : ""}>
                              <Link href='/welfare-assistance'>Welfare Assistance</Link>
                            </li>
                            <li className={pathname === "/alzohra-secondary-school" ? "active" : ""}>
                              <Link href='/alzohra-secondary-school'>Alzohra <span>Secondary</span>  <span>School</span> </Link>
                            </li>
                          </ul>
                        </li>

                        {/* Resources */}
                        <li
                          className={`navbar__item navbar__item--has-children nav-fade ${[
                            "/annual-reports",
                            "/media-and-news",
                            "/events-workshops",
                            // "/blog"
                          ].includes(pathname) ? "active" : ""}`}
                        >
                          <Link href='#' aria-label='Resources' className='navbar__dropdown-label dropdown-label-alter'>Resources</Link>
                          <ul className='navbar__sub-menu'>
                            <li className={pathname === "/annual-reports" ? "active" : ""}>
                              <Link href='/annual-reports'>Annual Reports</Link>
                            </li>
                            <li className={pathname === "/media-and-news" ? "active" : ""}>
                              <Link href='/media-and-news'>Media & News</Link>
                            </li>
                            <li className={pathname === "/events-workshops" ? "active" : ""}>
                              <Link href='/events-workshops'>Events & Workshops</Link>
                            </li>
                            {/* <li className={pathname === "/blog" ? "active" : ""}>
                              <Link href='/blog'>Blog</Link>
                            </li> */}
                          </ul>
                        </li>

                        {/* Get Involved */}
                        {/* <li
                          className={`navbar__item navbar__item--has-children nav-fade ${[
                            "/become-volunteer",
                            "/partner-with-us"
                          ].includes(pathname) ? "active" : ""}`}
                        >
                          <Link href='#' aria-label='Get Involved' className='navbar__dropdown-label dropdown-label-alter'>Get Involved</Link>
                          <ul className='navbar__sub-menu'>
                            <li className={pathname === "/become-volunteer" ? "active" : ""}>
                              <Link href='/become-volunteer'>Become Volunteer</Link>
                            </li>
                            <li className={pathname === "/partner-with-us" ? "active" : ""}>
                              <Link href='/partner-with-us'>Partner with Us</Link>
                            </li>
                          </ul>
                        </li> */}

                        {/* Donate */}
                        <li
                          className={`navbar__item navbar__item--has-children nav-fade ${[
                            "/zakat-sadqah",
                            
                            
                          ].includes(pathname) ? "active" : ""}`}
                        >
                          <Link href='/donate-us' aria-label='Donate' className='navbar__dropdown-label dropdown-label-alter'>Donate</Link>
                          <ul className='navbar__sub-menu'>
                            <li className={pathname === "/zakat-sadqah" ? "active" : ""}>
                              <Link href='/zakat-sadqah'>Zakat - Sadaqah</Link>
                            </li>

                          </ul>
                        </li>

                        {/* Contact Us */}
                        <li
                          className={`navbar__item nav-fade ${pathname === "/contact-us" ? "active" : ""}`}
                        >
                          <Link href='/contact-us'>Contact Us</Link>
                        </li>

                        {/* Unused/Commented Menus */}
                        {/*
                        <li>...</li>
                        */}
                      </ul>
                    </div>
                    <div className='contact-btn'>
                      <div className='contact-icon'>
                        <i className='icon-support' />
                      </div>
                      <div className='contact-content'>
                        <p>Call Us Now</p>
                        <a href='tel:01-793-7938'>(+92)-200-205478 </a>
                      </div>
                    </div>
                  </div>
                  <div className='navbar__options'>
                    <div className='navbar__mobile-options '>
                      <div className='search-box'>
                        <button
                          onClick={handleSearch}
                          className='open-search'
                          aria-label='search products'
                          title='open search box'
                        >
                          <i className='fa-solid fa-magnifying-glass' />
                        </button>
                      </div>
                      <Link
                        href='/donate-us'
                        className='btn--primary d-none d-md-flex'
                      >
                        Donate Now <i className='fa-solid fa-arrow-right' />
                      </Link>
                    </div>
                    <button
                      onClick={handleMobileMenu}
                      className='open-offcanvas-nav d-flex d-xl-none'
                      aria-label='toggle mobile menu'
                      title='open offcanvas menu'
                    >
                      <span className='icon-bar top-bar' />
                      <span className='icon-bar middle-bar' />
                      <span className='icon-bar bottom-bar' />
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${
            search ? "search-active search-popup" : "search-popup"
          }`}
        >
          <button
            onClick={handleSearch}
            className='close-search'
            aria-label='close search box'
            title='close search box'
          >
            <i className='fa-solid fa-xmark' />
          </button>
          <form action='#' method='post'>
            <div className='search-popup__group'>
              <input
                type='text'
                name='search-field'
                id='searchField'
                placeholder='Search....'
                required=''
              />
              <button
                type='submit'
                aria-label='search products'
                title='search products'
              >
                <i className='fa-solid fa-magnifying-glass' />
              </button>
            </div>
          </form>
        </div>
      </header>

      <div
        className={`mobile-menu mobile-menu--primary d-block d-xxl-none ${
          mobileMenu ? "show-menu" : ""
        }`}
      >
        <nav className='mobile-menu__wrapper'>
          <div className='mobile-menu__header nav-fade'>
            <div className='logo'>
              <Link href='/' aria-label='home page' title='logo'>
                <img src='assets/images/logo.png' alt='Image_inner' />
              </Link>
            </div>
            <button
              onClick={handleMobileMenu}
              aria-label='close mobile menu'
              className='close-mobile-menu'
            >
              <i className='fa-solid fa-xmark' />
            </button>
          </div>
          <div className='mobile-menu__list' ref={mobileMenuListRef}></div>

          <div className='mobile-menu__cta nav-fade d-block d-md-none'>
            <Link href='/donate-us' className='btn--primary '>
              Donate Now <i className='fa-solid fa-arrow-right' />
            </Link>
          </div>
          <div className='mobile-menu__social social nav-fade'>
            <Link
              href='https://www.facebook.com/'
              target='_blank'
              aria-label='share us on facebook'
              title='facebook'
            >
              <i className='fa-brands fa-facebook-f' />
            </Link>
            <Link
              href='https://www.instagram.com/'
             target='_blank'
             aria-label='share us on instagram'
              title='instagram'
            >
               <i className='fa-brands fa-instagram' />
            </Link>
            <Link
              href='https://x.com/'
              target='_blank'
              aria-label='share us on twitter'
              title='twitter'
            >
              <i className='fa-brands fa-twitter' />
            </Link>
            <Link
              href='https://www.linkedin.com/'
              target='_blank'
              aria-label='share us on linkedin'
              title='linkedin'
            >
              <i className='fa-brands fa-linkedin-in' />
            </Link>
          </div>
        </nav>
      </div>

      <div
        className={`mobile-menu__backdrop ${
          mobileMenu ? "mobile-menu__backdrop-active" : ""
        }`}
      ></div>
    </>
  );
};

export default HeaderOne;
