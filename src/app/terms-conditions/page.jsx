import BreadcrumbOne from "@/components/BreadcrumbOne";
import ContactOne from "@/components/ContactOne";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import DifferenceTwo from "@/components/DifferenceTwo";
import FaqOne from "@/components/FaqOne";
import FooterOne from "@/components/FooterOne";
import GalleryOne from "@/components/GalleryOne";
import HeaderOne from "@/components/HeaderOne";
import HelpOne from "@/components/HelpOne";
import Preloader from "@/components/Preloader";
import TeamTwo from "@/components/TeamTwo";
import TestimonialOne from "@/components/TestimonialOne";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Terms and Conditions | Al-Zohra NGO",
  description: "Read the terms and conditions for using Al-Zohra NGO's services and website.",
};

const page = () => {
  return (
    <AOSWrap>
      <section className='page-wrapper'>
        {/* Preloader */}
        <Preloader />

        {/* Custom Cursor */}
        <CustomCursor />

        {/* Top Bar */}
        <TopBarOne />

        {/* Header */}
        <HeaderOne />

        {/* Breadcrumb */}
        <BreadcrumbOne title='Terms and Conditions' />

        {/* Terms Content Section */}
        <section className='py-5 bg-light'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-10'>
                <h2 className='mb-4'>Terms and Conditions</h2>
                <p>
                  Welcome to Al-Zohra NGO. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
                </p>

                <h4 className='mt-4'>1. Use of Site</h4>
                <p>
                  The content on this site is for informational purposes only. Unauthorized use or misuse of any materials is prohibited.
                </p>

                <h4 className='mt-4'>2. Privacy Policy</h4>
                <p>
                  Your privacy is important to us. All personal data is handled according to our Privacy Policy.
                </p>

                <h4 className='mt-4'>3. Donations and Payments</h4>
                <p>
                  All donations made through this website are non-refundable. Please ensure all information provided is accurate before submission.
                </p>

                <h4 className='mt-4'>4. Intellectual Property</h4>
                <p>
                  All content, logos, and designs are the property of Al-Zohra unless otherwise noted.
                </p>

                <h4 className='mt-4'>5. Contact</h4>
                <p>
                  For any queries regarding these terms, you may contact us at <strong>info@alzohra.org</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSectionTwo />

        {/* Footer */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default page;
