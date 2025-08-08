
import HeaderOne from '@/components/HeaderOne';
import FooterOne from '@/components/FooterOne';
import TopBarOne from "@/components/TopBarOne";
import BreadcrumbOne from '@/components/BreadcrumbOne';

export default function MediaAndNewsPage() {
  return (
    <>
      <HeaderOne />
      <BreadcrumbOne title='Media & News' />
      <TopBarOne />
      {/* Hero Section */}
      <section style={{background: '#388e3c', color: '#fff', padding: '60px 0 40px 0'}}>
        <div className='container text-center'>
          <h1 className='fw-bold mb-3' style={{fontSize: '2.5rem'}}>Media & News</h1>
          <p className='lead mb-0' style={{color: '#eaf5ea', fontSize: '1.25rem'}}>
            Latest event highlights and media gallery from Al-Zohra Welfare Association.
          </p>
        </div>
      </section>
      {/* Gallery Section */}
      <main style={{background: '#f9f9f9', padding: '40px 0'}}>
        <div className='container-fluid p-2.5'>
          <h2 className='fw-bold text-success text-center mb-5'>Gallery</h2>
          <div className='row g-4 justify-content-center'>
            {Array.from({length: 50}).map((_, idx) => {
              const img = ["one.png","two.png","three.png","four.png","five.png","six.png"][idx % 6];
              return (
                <div className="col-6 col-md-4 col-lg-3" key={idx}>
                  <div className="annual-report-card card h-100 border-0 shadow-sm overflow-hidden p-0">
                    <div className="report-img-wrapper position-relative">
                      <img src={`/assets/images/gallery/${img}`} alt={`Gallery ${idx+1}`} className="img-fluid w-100" style={{height: 320, objectFit: 'cover'}} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      {/* Call to Action */}
      <section className='py-5 text-center' style={{background: '#388e3c'}}>
        <div className='container'>
          <h2 className='fw-bold mb-3' style={{color: '#fff'}}>Have a story to share or want to cover us?</h2>
          <p className='lead mb-4' style={{color: '#eaf5ea'}}>Contact our media team for press inquiries, interviews, or collaborations.</p>
          <a href='/contact-us' className='btn btn-light btn-lg shadow text-success fw-bold'>Contact Us</a>
        </div>
      </section>
      <FooterOne />
    </>
  );
} 
