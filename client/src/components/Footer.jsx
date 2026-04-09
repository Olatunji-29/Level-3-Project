import React from 'react'
import { Search, GraduationCap, Plus, ChevronDown, Filter, Bookmark } from 'lucide-react';


const Footer = () => {
  return (
    <>
      {/* Footer */}
          <footer className="py-5 px-4 mt-auto border-top" style={{ backgroundColor: '#0A0A0A', color: '#888' }}>
            <div className="container">
              <div className="row gy-4">
                {/* Brand Section */}
                <div className="col-md-3">
                  <div className="d-flex align-items-center mb-3">
                    <GraduationCap size={24} style={{ color: '#D4A017' }} />
                    <span className="ms-2 fw-bold text-white fs-5">EDUCOMPARE</span>
                  </div>
                  <p className="small lh-lg">
                    Redefining university admissions with precision data and premium guidance.
                  </p>
                </div>
    
                {/* Resources Links */}
                <div className="col-6 col-md-3">
                  <h6 className="text-uppercase fw-bold mb-4 small tracking-widest" style={{ color: '#D4A017' }}>Resources</h6>
                  <ul className="list-unstyled small">
                    <li className="mb-2"><a href="#" className="text-decoration-none text-secondary hover-white">Institutional Rankings</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-secondary hover-white">Admission Deadlines</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-secondary hover-white">Scholarship Portal</a></li>
                  </ul>
                </div>
    
                {/* Support Links */}
                <div className="col-6 col-md-3">
                  <h6 className="text-uppercase fw-bold mb-4 small tracking-widest" style={{ color: '#D4A017' }}>Support</h6>
                  <ul className="list-unstyled small">
                    <li className="mb-2"><a href="#" className="text-decoration-none text-secondary hover-white">Expert Counseling</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-secondary hover-white">Help Center</a></li>
                    <li className="mb-2"><a href="#" className="text-decoration-none text-secondary hover-white">Privacy Hub</a></li>
                  </ul>
                </div>
    
                {/* Newsletter Section */}
                <div className="col-md-3">
                  <h6 className="text-uppercase fw-bold mb-4 small tracking-widest" style={{ color: '#D4A017' }}>Insider Access</h6>
                  <div className="input-group mb-3 bg-dark border-0 rounded p-1" style={{ backgroundColor: '#1A1A1A !important' }}>
                    <input
                      type="email"
                      className="form-control bg-transparent border-0 text-white shadow-none small"
                      placeholder="Email Address"
                      style={{ fontSize: '13px' }}
                    />
                    <button className="btn p-2 rounded" style={{ backgroundColor: '#D4A017' }}>
                      <span style={{ transform: 'rotate(-45deg)', display: 'inline-block' }}>➤</span>
                    </button>
                  </div>
                </div>
              </div>
    
              <div className="row mt-5 pt-4 border-top border-secondary opacity-25">
                <div className="col text-center">
                  <p className="small mb-0">© 2026 EduCompare. All rights reserved.</p>
                </div>
              </div>
            </div>
          </footer>
    
    </>
  )
}

export default Footer