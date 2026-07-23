import React, { useEffect, useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Mail, Lock, Github } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData(
      { ...formData, [e.target.name]: e.target.value }
    )
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post("https://jambite-api.onrender.com/admin/login", formData);
      toast.success('Login Successful');
      setLoading(true)
      console.log(response.data);
      setTimeout(() => {
        navigate('/admin')
      }, 3500)
    } catch (err) {
      console.log(err.response?.data);
      toast.error(err.response?.data?.message || 'Login Failed');


    }


  }

  return (

    <>
      <ToastContainer
        position="top-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

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
                <div>
                  <p className="fw-bold fs-4">Admin Login</p>
                </div>
                {/* <h2 className="fw-bold">{mode === 'signin' ? 'Admin Login' : 'Create Account'}</h2> */}
                <p className="text-muted">Sign in to manage schools, courses, and admission information.</p>
              </div>

              <form onSubmit={handleLogin}>


                <div className="mb-3">
                  <label className="form-label small fw-bold">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent border-end-0"><Mail size={18} className="text-muted" /></span>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} className="form-control form-control-lg fs-6 border-start-0 shadow-none" placeholder="name@example.com" />
                  </div>
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between">
                    <label className="form-label small fw-bold">Password</label>
                    {/* {mode === 'signin' && <a href="#" className="small text-decoration-none text-warning">Forgot?</a>} */}
                  </div>
                  <div className="input-group">
                    <span className="input-group-text bg-transparent border-end-0"><Lock size={18} className="text-muted" /></span>
                    <input type="password" name='password' value={formData.password} onChange={handleChange} className="form-control form-control-lg fs-6 border-start-0 shadow-none" placeholder="••••••••" />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-lg w-100 text-white fw-bold mb-3"
                  style={{ backgroundColor: "#D4A017" }}
                >
                  {
                    loading ? (
                      <>
                        <span className='spinner-border spinner-border-sm me-2'></span>
                        Welcome!
                      </>
                    ) : (
                      <> Login to Admin Dashboard </>
                    )
                  }
                </button>



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
              <h1 className="display-4 fw-bold mb-4">Secure access for<br /><span style={{ color: '#D4A017' }}>EduCompare</span> administrators now</h1>
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
    </>
  );
};

export default Login;