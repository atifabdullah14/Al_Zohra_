import BreadcrumbPolicy from "@/components/BreadcrumbPolicy";
import CtaSectionTwo from "@/components/CtaSectionTwo";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Preloader from "@/components/Preloader";
import TopBarOne from "@/components/TopBarOne";
import AOSWrap from "@/helper/AOSWrap";
import CustomCursor from "@/helper/CustomCursor";

export const metadata = {
  title: "Terms & Conditions | Al-Zohra Welfare Association",
  description: "Read the Terms & Conditions for using the Al-Zohra Welfare Association website and services.",
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
        <BreadcrumbPolicy title="Terms & Conditions" />

        {/* Terms Content Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h2 className="mb-4">Terms & Conditions</h2>
                <p>
                  By accessing and using the website of Al-Zohra Welfare Association, you agree to be bound by the following Terms & Conditions. Please read them carefully.
                </p>

                {/* 1. About Us */}
                <h4 className="mt-4">1. About Us</h4>
                <p>
                  Al-Zohra Welfare Association is a registered non-profit organization working for Welfare Assistance, Zakat, Sadqa, Education & Vocational Training.
                  All information, services, and donation facilities on this website are provided to support these charitable objectives.
                </p>

                {/* 2. Use of Website */}
                <h4 className="mt-4">2. Use of Website</h4>
                <p>You agree to use this website only for lawful and charitable purposes. You must not:</p>
                <ul>
                  <li>Misuse the website</li>
                  <li>Provide false or misleading information</li>
                  <li>Attempt to harm, hack, or disrupt the website</li>
                  <li>Use the website for any illegal or unethical activity</li>
                </ul>

                {/* 3. Donations */}
                <h4 className="mt-4">3. Donations</h4>
                <p>
                  All donations made through this website are voluntary and non-refundable. By donating, you confirm that:
                </p>
                <ul>
                  <li>The funds belong to you</li>
                  <li>The donation is not from illegal sources</li>
                  <li>The donation is made willingly for charitable purposes</li>
                </ul>
                <p>
                  Al-Zohra Welfare Association uses donations strictly for welfare, education, zakat, sadqa, vocational training, and related social projects.
                </p>

                {/* 4. Zakat & Sadqa */}
                <h4 className="mt-4">4. Zakat & Sadqa</h4>
                <ul>
                  <li>The organization will distribute Zakat according to Islamic principles.</li>
                  <li>Funds will be given to eligible and deserving beneficiaries.</li>
                  <li>Sadqa, Khairat, and general donations are used where the need is greatest.</li>
                </ul>

                {/* 5. Accuracy of Information */}
                <h4 className="mt-4">5. Accuracy of Information</h4>
                <p>
                  We try our best to keep all information on the website accurate and updated. However, Al-Zohra Welfare Association does not guarantee that all content is always complete, error-free, or up-to-date.
                </p>

                {/* 6. Intellectual Property */}
                <h4 className="mt-4">6. Intellectual Property</h4>
                <p>All content on this website including:</p>
                <ul>
                  <li>Text</li>
                  <li>Logos</li>
                  <li>Images</li>
                  <li>Graphics</li>
                  <li>Documents</li>
                </ul>
                <p>
                  Belongs to Al-Zohra Welfare Association and may not be copied, used, or distributed without written permission.
                </p>

                {/* 7. Privacy */}
                <h4 className="mt-4">7. Privacy</h4>
                <p>
                  Your personal and donation information is kept confidential and used only for:
                </p>
                <ul>
                  <li>Processing donations</li>
                  <li>Issuing receipts</li>
                  <li>Communication related to our services</li>
                </ul>
                <p>We do not sell or share your data with third parties without legal requirement.</p>

                {/* 8. External Links */}
                <h4 className="mt-4">8. External Links</h4>
                <p>
                  Our website may contain links to other websites. We are not responsible for the content, privacy, or practices of those websites.
                </p>

                {/* 9. Limitation of Liability */}
                <h4 className="mt-4">9. Limitation of Liability</h4>
                <p>
                  Al-Zohra Welfare Association is not responsible for:
                </p>
                <ul>
                  <li>Any technical errors</li>
                  <li>Website downtime</li>
                  <li>Loss or damage caused by using the website</li>
                </ul>
                <p>Use of this website is at your own risk.</p>

                {/* 10. Changes to Terms */}
                <h4 className="mt-4">10. Changes to Terms</h4>
                <p>
                  We may update these Terms & Conditions at any time without prior notice. Continued use of the website means you accept the updated terms.
                </p>

                {/* 11. Governing Law */}
                <h4 className="mt-4">11. Governing Law</h4>
                <p>These Terms & Conditions shall be governed by the laws of Pakistan.</p>

                {/* 12. Contact Us */}
                <h4 className="mt-4">12. Contact Us</h4>
                <p>
                  For any questions or concerns, please contact: <strong>Al-Zohra Welfare Association</strong>
                </p>
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
