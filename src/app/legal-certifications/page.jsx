import HeaderOne from '@/components/HeaderOne';
import FooterOne from '@/components/FooterOne';
import BreadcrumbOne from '@/components/BreadcrumbOne';

export default function LegalCertificationsPage() {
  return (
    <>
      <HeaderOne />
      <BreadcrumbOne title='Legal & Certifications' />
      <main style={{ minHeight: '60vh', background: '#f9f9f9', padding: '40px 0' }}>
        <div className='container'>
          <section className='text-center mb-10'>
            <h2 className='text-4xl font-bold mb-4 text-primary'>Legal Status</h2>
            <p className='text-lg max-w-2xl mx-auto'>
              Al Zohra Welfare Association is a registered non-profit organization under the Societies Registration Act XXI of 1860 (Reg. No. DEMO-12345). We are fully compliant with all local and national regulations.
            </p>
          </section>
          <section className='mb-10'>
            <h3 className='text-2xl font-semibold text-primary mb-6 text-center'>Our Certifications</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
              <div className='p-6 bg-white rounded shadow text-center'>
                <img src='/assets/images/blog/one.png' alt='Certificate 1' className='mx-auto mb-3' style={{maxHeight: '100px'}} />
                <h4 className='font-bold mb-2'>Tax Exemption Certificate</h4>
                <p>Recognized as a tax-exempt charity by the Federal Board of Revenue (FBR).</p>
                <a href='/assets/images/blog/one.png' download className='text-primary underline text-sm'>Download PDF</a>
              </div>
              <div className='p-6 bg-white rounded shadow text-center'>
                <img src='/assets/images/blog/two.png' alt='Certificate 2' className='mx-auto mb-3' style={{maxHeight: '100px'}} />
                <h4 className='font-bold mb-2'>NGO Registration</h4>
                <p>Registered with the Social Welfare Department, Government of Sindh.</p>
                <a href='/assets/images/blog/two.png' download className='text-primary underline text-sm'>Download PDF</a>
              </div>
              <div className='p-6 bg-white rounded shadow text-center'>
                <img src='/assets/images/blog/three.png' alt='Certificate 3' className='mx-auto mb-3' style={{maxHeight: '100px'}} />
                <h4 className='font-bold mb-2'>Audit Compliance</h4>
                <p>Annual audits conducted by certified chartered accountants.</p>
                <a href='/assets/images/blog/three.png' download className='text-primary underline text-sm'>Download PDF</a>
              </div>
            </div>
          </section>
          <section className='text-center'>
            <h3 className='text-2xl font-semibold text-primary mb-4'>Why Certifications Matter</h3>
            <p className='text-lg max-w-2xl mx-auto'>
              Our legal registrations and certifications ensure transparency, accountability, and trust for all our donors, partners, and beneficiaries.
            </p>
          </section>
        </div>
      </main>
      <FooterOne />
    </>
  );
} 