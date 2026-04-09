import React from 'react';
import { GraduationCap, Mail, Lock, Github } from 'lucide-react';

const Login = ({ mode = 'signin' }) => {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Left Side: The Form */}
        <div className="col-lg-5 d-flex align-items-center justify-content-center px-lg-5">
          <div style={{ maxWidth: '400px', width: '100%' }}>
            <div className="mb-5">
              <div className="d-flex align-items-center mb-4">
                <div className="p-2 rounded me-2" style={{ backgroundColor: '#D4A017', color: 'white' }}>
                  <GraduationCap size={24} />
                </div>
                <span className="fw-bold fs-4">EDUCOMPARE</span>
              </div>
              <h2 className="fw-bold">{mode === 'signin' ? 'Welcome Back' : 'Create Account'}</h2>
              <p className="text-muted">Enter your details to access your dashboard.</p>
            </div>

            <form>
              {mode === 'signup' && (
                <div className="mb-3">
                  <label className="form-label small fw-bold">Full Name</label>
                  <input type="text" className="form-control form-control-lg fs-6 shadow-none" placeholder="John Doe" />
                </div>
              )}
              <div className="mb-3">
                <label className="form-label small fw-bold">Email Address</label>
                <div className="input-group">
                  <span className="input-group-text bg-transparent border-end-0"><Mail size={18} className="text-muted"/></span>
                  <input type="email" className="form-control form-control-lg fs-6 border-start-0 shadow-none" placeholder="name@example.com" />
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-between">
                  <label className="form-label small fw-bold">Password</label>
                  {mode === 'signin' && <a href="#" className="small text-decoration-none text-warning">Forgot?</a>}
                </div>
                <div className="input-group">
                  <span className="input-group-text bg-transparent border-end-0"><Lock size={18} className="text-muted"/></span>
                  <input type="password" className="form-control form-control-lg fs-6 border-start-0 shadow-none" placeholder="••••••••" />
                </div>
              </div>
              <button className="btn btn-lg w-100 text-white fw-bold mb-3" style={{ backgroundColor: '#D4A017' }}>
                {mode === 'signin' ? 'Sign In' : 'Get Started'}
              </button>
              
              <div className="text-center position-relative my-4">
                <hr />
                <span className="position-absolute top-50 start-50 translate-middle bg-white px-3 text-muted small">or continue with</span>
              </div>

              <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 mb-4">
                 Google
              </button>

              <p className="text-center text-muted small">
                {mode === 'signin' ? "Don't have an account?" : "Already have an account?"} 
                <a href="#" className="text-warning fw-bold text-decoration-none ms-1">
                  {mode === 'signin' ? 'Sign Up' : 'Log In'}
                </a>
              </p>
            </form>
          </div>
        </div>

        {/* Right Side: The Visual (Hidden on Mobile) */}
        <div className="col-lg-7 d-none d-lg-flex align-items-center justify-content-center p-0 overflow-hidden" 
             style={{ backgroundColor: '#121212', position: 'relative' }}>
          <div className="text-center text-white p-5">
            <div className="mb-4" style={{ opacity: 0.1, transform: 'scale(5)' }}>
               <GraduationCap size={100} />
            </div>
            <h1 className="display-4 fw-bold mb-4">The path to your <br /><span style={{ color: '#D4A017' }}>Dream Career</span> starts here.</h1>
            <p className="lead opacity-75">"EduCompare made it so easy to find a school that fit my budget and my JAMB score. I'm now a proud Law student!"</p>
            <div className="mt-4">
              <p className="mb-0 fw-bold">— Chidi Okafor</p>
              <p className="small opacity-50">University of Ibadan</p>
            </div>
          </div>
          
          {/* Abstract background shapes */}
          <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '300px', height: '300px', background: '#D4A017', filter: 'blur(150px)', opacity: 0.2 }}></div>
        </div>
      </div>
    </div>
  );
};

export default Login;