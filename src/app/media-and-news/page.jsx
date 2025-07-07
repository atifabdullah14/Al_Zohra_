import HeaderOne from '@/components/HeaderOne';
import FooterOne from '@/components/FooterOne';
import BreadcrumbOne from '@/components/BreadcrumbOne';

export default function MissionVisionPage() {
  return (
    <>
      <HeaderOne />
      <BreadcrumbOne title='Mission & Vision' />
      <main style={{ minHeight: '60vh', background: '#f9f9f9', padding: '40px 0' }}>
        <div className='container'>
          <section className='text-center mb-10'>
            <h2 className='text-4xl font-bold mb-4 text-primary'>Our Mission</h2>
            <p className='text-lg max-w-2xl mx-auto'>
              To empower underprivileged women and children through education, healthcare, and skill development, fostering self-reliance and dignity in every community we serve.
            </p>
          </section>
          <section className='text-center mb-10'>
            <h2 className='text-4xl font-bold mb-4 text-primary'>Our Vision</h2>
            <p className='text-lg max-w-2xl mx-auto'>
              A world where every woman and child has the opportunity to thrive, contribute, and lead a life of dignity, hope, and purpose.
            </p>
          </section>
          <section className='mb-10'>
            <h3 className='text-2xl font-semibold text-primary mb-6 text-center'>Our Core Values</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
              <div className='p-6 bg-white rounded shadow text-center'>
                <i className='fa-solid fa-hands-holding-heart text-3xl text-primary mb-3'></i>
                <h4 className='font-bold mb-2'>Compassion</h4>
                <p>We serve with empathy, kindness, and a deep commitment to uplifting others.</p>
              </div>
              <div className='p-6 bg-white rounded shadow text-center'>
                <i className='fa-solid fa-lightbulb text-3xl text-primary mb-3'></i>
                <h4 className='font-bold mb-2'>Empowerment</h4>
                <p>We believe in equipping individuals with the tools and confidence to change their own lives.</p>
              </div>
              <div className='p-6 bg-white rounded shadow text-center'>
                <i className='fa-solid fa-people-group text-3xl text-primary mb-3'></i>
                <h4 className='font-bold mb-2'>Community</h4>
                <p>We foster unity, collaboration, and a sense of belonging for all.</p>
              </div>
            </div>
          </section>
          <section className='text-center'>
            <h3 className='text-2xl font-semibold text-primary mb-4'>Our Goals</h3>
            <ul className='list-disc list-inside max-w-2xl mx-auto text-lg text-left inline-block'>
              <li>Expand access to quality education for girls in underserved areas.</li>
              <li>Provide healthcare and nutrition support to vulnerable families.</li>
              <li>Launch new skill-building programs for women and youth.</li>
              <li>Promote gender equality and social inclusion at every level.</li>
            </ul>
          </section>
        </div>
      </main>
      <FooterOne />
    </>
  );
} 