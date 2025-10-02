// "use client";
// import Link from "next/link";
// import { useState } from "react";

// const CommunityOne = () => {
//   let [amount, setAmount] = useState(500);
//   return (
//     <>
//       <section className='community'>
//         <div className='container'>
//           <div className='row'>
//             <div className='col-12 col-md-8 col-xl-7'>
//               <div
//                 className='section__header'
//                 data-aos='fade-up'
//                 data-aos-duration={1000}
//               >
//                 <span className='sub-title'>
//                   <i className='icon-donation' />
//                   Please start donating
//                 </span>
//                 <h2 className='title-animation_inner'>
//                   Join Us in providing<span>Eduction</span>  For Children
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div className='row'>
//             <div className='col-12'>
//               <div
//                 className='community-donation'
//                 data-aos='fade-up'
//                 data-aos-duration={1000}
//               >
//                 <div className='community-donation__inner'>
//                   <h4>Support Where It Counts.</h4>
                 
//                   <div className='donation-form'>
//                     <div className='donation-form__single'>
//                       <h5>Your Donation:</h5>
//                       <div className='input-group-icon'>
//                         <div className='thumb'>
//                         <span className="text-white">Rs</span>
                    
//                         </div>
//                         <input
//                           type='text'
//                           name='donation-amount'
//                           id='donationAmount'
//                           value={amount}
//                           onChange={(e) => setAmount(e.target.value)}
//                         />
//                       </div>
//                       <div className='made-amount'>
//                         <span
//                           className={`donation-amount ${
//                             amount === 500 && "active"
//                           }`}
//                           onClick={() => setAmount(500)}
//                         >
//                           500
//                         </span>
//                         <span
//                           className={`donation-amount ${
//                             amount === 1000 && "active"
//                           }`}
//                           onClick={() => setAmount(1000)}
//                         >
//                           1000
//                         </span>
//                         <span
//                           className={`donation-amount ${
//                             amount === 2000 && "active"
//                           }`}
//                           onClick={() => setAmount(2000)}
//                         >
//                           2000
//                         </span>
//                         <span
//                           className={`donation-amount ${
//                             amount === 5000 && "active"
//                           }`}
//                           onClick={() => setAmount(5000)}
//                         >
//                           5000
//                         </span>
//                         <span
//                           className={`donation-amount custom-amount ${
//                             amount === 0 && "active"
//                           }`}
//                           onClick={() => setAmount(0)}
//                         >
//                           Custom
//                         </span>
//                       </div>
//                     </div>
//                     {/* <div className='donation-form__single'>
//                       <h5>Select Payment Method</h5>
//                       <div className='radio-wrapper'>
//                         <div className='radio-single'>
//                           <input
//                             type='radio'
//                             id='testDonation'
//                             name='donation-payment'
//                             defaultChecked=''
//                           />
//                           <label htmlFor='testDonation'>Test Donation</label>
//                         </div>
//                         <div className='radio-single'>
//                           <input
//                             type='radio'
//                             id='offlineDonation'
//                             name='donation-payment'
//                             defaultChecked=''
//                           />
//                           <label htmlFor='offlineDonation'>
//                             Offline Donation
//                           </label>
//                         </div>
//                         <div className='radio-single'>
//                           <input
//                             type='radio'
//                             id='cardDonation'
//                             name='donation-payment'
//                             defaultChecked=''
//                           />
//                           <label htmlFor='cardDonation'>Credit Card</label>
//                         </div>
//                       </div>
//                     </div> */}
//                     <div className='cta'>
//                       <Link
//                         href='/donate-us'
//                         aria-label='donate us'
//                         title='donate us'
//                         className='btn--primary'
//                       >
//                         Donate Now <i className='fa-solid fa-arrow-right' />
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className='community__thumb d-none d-lg-block'
//                   data-aos='fade-left'
//                   data-aos-duration={1000}
//                 >
//                   <img
//                     src='/assets/images/community/thumb.jpg'
//                     alt='Image_inner'
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='community-bg'>
//           <img
//             src='/assets/images/community/comsmunity-bg.jpg'
//             alt='Image_inner'
//           />
//         </div>
//         <div
//           className='gift'
//           data-aos='fade-up'
//           data-aos-duration={1000}
//           data-aos-delay={200}
//         >
//           <img src='/assets/images/community/gift.png' alt='Image_inner' />
//         </div>
//         <div className='spade'>
//           <img
//             src='/assets/images/community/spade.png'
//             alt='Image_inner'
//             className='base-img'
//           />
//         </div>
//       </section>
//     </>
//   );
// };

// export default CommunityOne;


"use client";

const CommunityOne = () => {
  return (
    <>
      <section className="community" style={{ padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', flexDirection: 'column' }}>
        {/* First Image - Original Style */}
        <div
          className="community-donation__inner"
          style={{
            display: 'inline-block',
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            marginBottom: '20px'
          }}
        >
          <img
            src="/assets/images/donation/8.jpg"
            alt="Donation Card"
            style={{ display: "block", maxWidth: "100%", height: "auto" }}
          />
        </div>
      </section>
      
      {/* Second Image - Full Screen Width with Professional Styling */}
      <div
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          padding: "20px 0",
          backgroundColor: "#f8f9fa",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            backgroundColor: "white",
          }}
        >
          <img
            src="/assets/images/banner/donate-2e.jpg"
            alt="Donation Banner"
            style={{ 
              display: "block", 
              width: "100%", 
              height: "auto",
              minHeight: "300px",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
      </div>
    </>
  );
};

export default CommunityOne;
