const BreadcrumbOne = ({ title, bgImage }) => {
  // Breadcrumb Image Mapping - Each page gets its own unique image
  // This mapping helps maintain consistency and makes it easy to assign images to pages
  
  const getBreadcrumbImage = (pageTitle) => {
    const imageMap = {
      // Main Program Pages
      "Vocational Training Program": "assets/images/banner/banner1.jpg", // Vocational Training page
      "Welfare Assistance": "assets/images/banner/banner2.jpg", // Welfare Assistance page  
      "Al Zohra Secondary School": "assets/images/banner/banner3.jpg", // Secondary School page
      
      // About & Story Pages
      "About Us": "assets/images/banner/banner4.jpg", // About Us page
      "Our Story": "assets/images/banner/banner5.jpg", // Our Story page
      "Our Founder": "assets/images/banner/banner6.jpg", // Our Founder page
      
      // Team & People Pages
      "Our Team": "assets/images/banner/banner-1.jpg", // Our Team page
      "Team Details": "assets/images/banner/banner-2.jpg", // Team Details page
      "Become A Volunteer": "assets/images/banner/banner-3.jpg", // Become Volunteer page
      
      // Causes & Programs Pages
      "Our Causes": "assets/images/banner/banner-12.jpg", // Our Causes page
      "Cause Details": "assets/images/banner/banner-bg.jpg", // Cause Details page
      
      // Donation & Support Pages
      "Donate Us": "assets/images/banner/banner-bg1.jpg", // Donate Us page
      "One-Time Donation": "assets/images/banner/banner-bg2.jpg", // One-Time Donation page
      "Zakat & Sadqah": "assets/images/banner/banner-bgs.jpg", // Zakat & Sadqah page
      "Sponsor a Child": "assets/images/banner/banner-one-bg.png", // Sponsor a Child page
      "Partner With Us": "assets/images/banner/banner-two-bg.jpeg", // Partner With Us page
      
      // Events & Activities Pages
      "Our Events": "assets/images/banner/banner-two-bg.png", // Our Events page
      "Events & Workshops": "assets/images/banner/banner-three-bg.png", // Events & Workshops page
      "Event Details": "assets/images/banner/banner-four-thumb.png", // Event Details page
      
      // News & Media Pages
      "Latest News": "assets/images/banner/banner-31.jpg", // Latest News page
      "Blog Details": "assets/images/banner/banner-bg.png", // Blog Details page
      "Media & News": "assets/images/banner/banner-one-shape.png", // Media & News page
      
      // Legal & Information Pages
      "Legal & Certifications": "assets/images/banner/banner-two-shape.png", // Legal & Certifications page
      "Annual Reports": "assets/images/banner/banner-bg2.jpg", // Annual Reports page
      "Terms and Conditions": "assets/images/banner/banner-bg.jpg", // Terms and Conditions page
      "Frequently Asked Questions": "assets/images/banner/banner-bg1.jpg", // FAQ page
      
      // Contact & Shop Pages
      "Contact Us": "assets/images/banner/banner-bg2.jpg", // Contact Us page
      "Our Shop": "assets/images/banner/banner-bg.jpg", // Our Shop page
      "Product Details": "assets/images/banner/banner-bg1.jpg", // Product Details page
      "View Cart": "assets/images/banner/banner-bg2.jpg", // View Cart page
      "Checkout": "assets/images/banner/banner-bg.jpg", // Checkout page
    };
    
    return imageMap[pageTitle] || "assets/images/banner/banner-bg2.jpg"; // Default fallback image
  };

  // Use provided bgImage or get from mapping based on title
  const finalBgImage = bgImage || getBreadcrumbImage(title);

  return (
    <section className='common-banner'>
      <div className='container'>
        <div className='row'>
          <div className='common-banner__content text-center'>
            <span className='sub-title'>
              <i className='icon-donation' />
              Start donating poor people
            </span>
            <h2 className='title-animation_inner'>{title}</h2>
          </div>
        </div>
      </div>
      <div className='banner-bg'>
        <img src={finalBgImage} alt='Image_inner' />
      </div>
      <div className='shape'>
        <img src='assets/images/shape.png' alt='Image_inner' />
      </div>
      <div className='sprade' data-aos='zoom-in' data-aos-duration={1000}>
        <img
          src='assets/images/sprade-base.png'
          alt='Image_inner'
          className='base-img'
        />
      </div>
    </section>
  );
};

export default BreadcrumbOne;
