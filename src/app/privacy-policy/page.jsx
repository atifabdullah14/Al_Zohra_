import BreadcrumbPolicy from "@/components/BreadcrumbPolicy";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Al-Zohra Welfare Association – Website Policies",
  description: "Read the website policies of Al-Zohra Welfare Association, including Terms & Conditions, Privacy Policy, Service Policy, and more.",
};

const Page = () => {
  return (
    <AOSWrap>
      <section className="page-wrapper">
        {/* Preloader */}
        <Preloader />

        {/* Custom Cursor */}
        <CustomCursor />

        {/* Top Bar */}
        <TopBarOne />

        {/* Header */}
        <HeaderOne />

        {/* Breadcrumb */}
        <BreadcrumbPolicy title="Website Policies" />

        {/* Website Policies Content */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h2 className="mb-4">Website Policies</h2>

                {/* Terms & Conditions */}
                <h4 className="mt-4">1. Terms & Conditions</h4>
                <ol>
                  <li>This website is created to facilitate donations for Zakat, Sadaqah, Khairat, Welfare, Education, and Vocational Training projects.</li>
                  <li>All information provided on this website is for transparency and public awareness.</li>
                  <li>Users must provide accurate and complete information when making any donation.</li>
                  <li>Any misuse of the website, false information, or harmful activity is strictly prohibited.</li>
                  <li>Al-Zohra Welfare Association reserves the right to update, modify, or change these terms and website features at any time without prior notice.</li>
                </ol>

                {/* Privacy Policy */}
                <h4 className="mt-4">2. Privacy Policy</h4>
                <ol>
                  <li>We may collect personal information such as name, phone number, email address, and donation details.</li>
                  <li>This information is used only for:
                    <ul>
                      <li>Processing donations</li>
                      <li>Issuing receipts</li>
                      <li>Maintaining donor records</li>
                      <li>Contacting donors when necessary</li>
                    </ul>
                  </li>
                  <li>We do not sell, share, or rent donor information to any third party.</li>
                  <li>All data is stored securely and accessed only by authorized staff.</li>
                  <li>Donors may request correction or deletion of their information at any time by contacting us.</li>
                </ol>

                {/* Service Policy */}
                <h4 className="mt-4">3. Service Policy</h4>
                <ul>
                  <li>Online donation facilities</li>
                  <li>Information about welfare, education, and vocational training projects</li>
                  <li>Project updates</li>
                  <li>Donation receipts</li>
                </ul>
                <ol>
                  <li>Website availability depends on internet connectivity, hosting servers, and system maintenance.</li>
                  <li>Al-Zohra Welfare Association may add, change, or remove any feature without prior notice.</li>
                </ol>

                {/* Shipping Policy */}
                <h4 className="mt-4">4. Shipping Policy</h4>
                <p>
                  No Shipping or Delivery: Al-Zohra Welfare Association does not sell or deliver physical goods through this website. Therefore, no shipping or delivery policy applies.
                </p>

                {/* Refund, Return & Cancellation Policy */}
                <h4 className="mt-4">5. Refund, Return & Cancellation Policy</h4>
                <ol>
                  <li>All donations made through the website are non-refundable, except where required by law.</li>
                  <li>Since no physical products are sold, no return policy applies.</li>
                  <li>If a donor makes a duplicate or incorrect payment, they may request a review by contacting Al-Zohra Welfare Association.</li>
                  <li>The Association reserves the right to cancel or block any transaction suspected of fraud or misuse.</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        

        {/* Footer */}
        <FooterOne />
      </section>
    </AOSWrap>
  );
};

export default Page;
