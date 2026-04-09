import React from 'react';
import { User, Mail, Phone, Lock, Eye, CheckCircle2, GraduationCap } from 'lucide-react';

const Signup = () => {
  return (
    /* h-100 + overflow-hidden prevents both vertical and horizontal scrolling */
    <div className="vh-100 vw-100 overflow-hidden bg-white">
      <div className="row g-0 h-100">
        
        {/* LEFT SIDEBAR: Fixed Height, Internal padding only */}
        <div className="col-lg-5 d-none d-lg-flex flex-column justify-content-between p-5 text-white h-100" 
             style={{ backgroundColor: '#111111', borderRight: '1px solid #222' }}>
          
          <div>
            <div className="mb-4">
              <span className="badge rounded-pill py-2 px-3 mb-4" 
                    style={{ backgroundColor: 'rgba(212, 160, 23, 0.1)', color: '#D4A017', fontSize: '10px', letterSpacing: '1px' }}>
                JOIN THE COMMUNITY
              </span>
              <h1 className="display-5 fw-bold lh-sm">
                Start Your Academic Journey with <br />
                <span style={{ color: '#D4A017' }}>EduCompare</span>
              </h1>
              <p className="text-secondary mt-3 fs-6 opacity-75">
                Create your free account today and get access to exclusive tools designed for your success.
              </p>
            </div>

            {/* Benefits Checklist */}
            <div className="mt-5">
              <BenefitItem 
                title="Save your shortlist" 
                desc="Keep track of your favorite universities and compare them side-by-side." 
              />
              <BenefitItem 
                title="Get custom alerts" 
                desc="Be the first to know when admission forms are out." 
              />
              <BenefitItem 
                title="Free Career Guidance" 
                desc="Access resources and toolkits for your future." 
              />
            </div>
          </div>

          {/* Social Proof Section - Positioned at the bottom */}
          <div className="d-flex align-items-center gap-3 pt-4 border-top border-secondary border-opacity-25">
            <div className="d-flex align-items-center">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-circle border border-2 border-dark overflow-hidden" 
                     style={{ width: '32px', height: '32px', marginLeft: i > 1 ? '-10px' : '0' }}>
                  <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="user" className="w-100 h-100" />
                </div>
              ))}
            </div>
            <p className="small text-secondary mb-0" style={{ fontSize: '12px' }}>
              Joined by <span className="text-white fw-bold">12k+</span> students this month.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: The Form (Centered perfectly) */}
        <div className="col-lg-7 d-flex align-items-center justify-content-center h-100 p-4">
          <div style={{ maxWidth: '420px', width: '100%' }}>
            <div className="mb-4">
              <h2 className="fw-bold text-dark h4 mb-1">Create Your Account</h2>
              <p className="text-muted small">Fill in your details to start your application.</p>
            </div>

            <form>
              <div className="mb-2">
                <label className="form-label mb-1 fw-bold text-dark" style={{ fontSize: '12px' }}>Full Name</label>
                <div className="input-group mb-2">
                  <span className="input-group-text bg-light border-0"><User size={16} className="text-muted" /></span>
                  <input type="text" className="form-control bg-light border-0 py-2 shadow-none small" placeholder="John Doe" />
                </div>
              </div>

              <div className="mb-2">
                <label className="form-label mb-1 fw-bold text-dark" style={{ fontSize: '12px' }}>Email Address</label>
                <div className="input-group mb-2">
                  <span className="input-group-text bg-light border-0"><Mail size={16} className="text-muted" /></span>
                  <input type="email" className="form-control bg-light border-0 py-2 shadow-none small" placeholder="john@example.com" />
                </div>
              </div>

              <div className="mb-2">
                <label className="form-label mb-1 fw-bold text-dark" style={{ fontSize: '12px' }}>Phone Number</label>
                <div className="input-group mb-2">
                  <span className="input-group-text bg-light border-0"><Phone size={16} className="text-muted" /></span>
                  <input type="tel" className="form-control bg-light border-0 py-2 shadow-none small" placeholder="+234 000 000 0000" />
                </div>
              </div>

              <div className="mb-2">
                <label className="form-label mb-1 fw-bold text-dark" style={{ fontSize: '12px' }}>Password</label>
                <div className="input-group mb-1">
                  <span className="input-group-text bg-light border-0"><Lock size={16} className="text-muted" /></span>
                  <input type="password" className="form-control bg-light border-0 py-2 shadow-none small" placeholder="••••••••" />
                  <span className="input-group-text bg-light border-0"><Eye size={16} className="text-muted" /></span>
                </div>
                <p className="text-muted" style={{ fontSize: '9px' }}>At least 8 characters (letters & numbers).</p>
              </div>

              <div className="form-check mb-3 mt-2">
                <input className="form-check-input shadow-none" type="checkbox" id="terms" style={{ width: '14px', height: '14px' }} />
                <label className="form-check-label text-muted" htmlFor="terms" style={{ fontSize: '11px' }}>
                  I agree to the <span className="text-warning fw-bold">Terms</span> and <span className="text-warning fw-bold">Privacy Policy</span>.
                </label>
              </div>

              <button className="btn w-100 fw-bold py-2 text-dark border-0 shadow-sm mb-3" 
                      style={{ backgroundColor: '#D4A017', fontSize: '14px', borderRadius: '8px' }}>
                Create Account
              </button>

              <div className="text-center position-relative mb-3">
                <hr className="text-muted opacity-25" />
                <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted" style={{ fontSize: '10px' }}>OR</span>
              </div>

              <div className="d-flex gap-2">
                <button type="button" className="btn btn-outline-light border text-dark w-100 py-2 small fw-bold" style={{ fontSize: '12px' }}>Google</button>
                <button type="button" className="btn btn-outline-light border text-dark w-100 py-2 small fw-bold" style={{ fontSize: '12px' }}>Facebook</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

const BenefitItem = ({ title, desc }) => (
  <div className="d-flex align-items-start gap-3 mb-4">
    <div className="mt-1">
      <CheckCircle2 size={16} style={{ color: '#D4A017' }} />
    </div>
    <div>
      <h6 className="mb-0 fw-bold small">{title}</h6>
      <p className="text-secondary small mb-0 opacity-75" style={{ fontSize: '10px' }}>{desc}</p>
    </div>
  </div>
);

export default Signup;