const BreadcrumbDonate = ({ title = "Donate Us" }) => {
    // Fixed background image only for Donate Us
    const donateBgImage = "assets/images/banner/one.jpg";
  
    return (
      <section className="common-banner">
        <div className="container">
          <div className="row">
            <div className="common-banner__content text-center">
              <span className="sub-title">
                <i className="icon-donation" />
                Start donating poor people
              </span>
              <h2 className="title-animation_inner">{title}</h2>
            </div>
          </div>
        </div>
        <div className="banner-bg">
          <img src={donateBgImage} alt="Donate Us Banner" />
        </div>
        <div className="shape">
          <img src="assets/images/shape.png" alt="shape" />
        </div>
        <div className="sprade" data-aos="zoom-in" data-aos-duration={1000}>
          <img
            src="assets/images/sprade-base.png"
            alt="sprade"
            className="base-img"
          />
        </div>
      </section>
    );
  };
  
  export default BreadcrumbDonate;
  