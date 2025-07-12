import React from "react";

const DonateInner = () => {
  return (
    <section className="donate-accounts-section">
      <div className="container py-5">
        <h2 className="mb-5 fw-bold text-success text-center display-5">Bank Account Details</h2>
        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card border-2 border-success shadow-lg h-100 p-3 animate__animated animate__fadeInUp">
              <div className="card-body text-center">
                <img src="/nbp.png" alt="NBP Logo" className="mb-3" style={{maxWidth: 90, height: 'auto'}} />
                <h4 className="fw-bold mb-3 text-success">National Bank of Pakistan (NBP)</h4>
                <div className="mb-2 fs-5">
                  <span className="fw-bold">Account Number:</span> <span className="text-dark">4100384725</span>
                </div>
                <div className="mb-2 fs-5">
                  <span className="fw-bold">Account Title:</span> <span className="text-dark">Al Zohra Welfare Association</span>
                </div>
                <div className="mb-2">
                  <span className="badge bg-secondary fs-6 py-2 px-3">Non Zakat Account</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card border-2 border-success shadow-lg h-100 p-3 animate__animated animate__fadeInUp">
              <div className="card-body text-center">
                <img src="/js.png" alt="JS Bank Logo" className="mb-3" style={{maxWidth: 90, height: 'auto'}} />
                <h4 className="fw-bold mb-3 text-success">JS Bank</h4>
                <div className="mb-2 fs-5">
                  <span className="fw-bold">Account Number:</span> <span className="text-dark">0002110147</span>
                </div>
                <div className="mb-2 fs-5">
                  <span className="fw-bold">Account Title:</span> <span className="text-dark">Al Zohra Welfare Association</span>
                </div>
                <div className="mb-2">
                  <span className="badge bg-success fs-6 py-2 px-3">Zakat Account</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-muted small mt-4">For donations, please use the appropriate account as per your intent (Zakat/Non-Zakat). Thank you for supporting Al Zohra Welfare Association.</p>
      </div>
    </section>
  );
};

export default DonateInner;
