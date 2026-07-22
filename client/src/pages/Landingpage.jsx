import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Globe, ShieldCheck, Zap, GraduationCap } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Landingpage = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);


    const goExplore = () => {
        setLoading(true);

        setTimeout(() => {
            navigate("/home");
        }, 2000);
    };


    return (
        <div className="bg-white">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        {/* Brand Logo */}
                        <div className="p-2 rounded me-2" style={{ backgroundColor: '#D4A017', color: 'white' }}>
                            <GraduationCap size={20} />
                        </div>
                        <a className="navbar-brand fw-bold mb-0" href="#">EDUCOMPARE</a>
                    </div>

                    {/* 1. The Toggle Button (Shows only on mobile) */}
                    <button
                        className="navbar-toggler border-0 shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navResponive"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* 2. The Collapsible Section */}
                    <div className="collapse navbar-collapse" id="navResponive">
                        <div className="mx-auto d-flex flex-column flex-lg-row gap-2 gap-lg-4 mt-3 mt-lg-0">
                            <a href="#" className="nav-link text-secondary small fw-medium">Find a School</a>
                            <a href="#" className="nav-link text-secondary small fw-medium">Course Requirements</a>
                            <a href="#" className="nav-link small fw-medium" style={{ color: '#D4A017' }}>Fee Comparison</a>
                        </div>

                        {/* (Buttons moved outside collapse so they're always visible) */}
                    </div>
                    <div className="d-flex align-items-center gap-2 ms-auto">
                        {/* <Link to={'/up'} className="btn fw-bold px-3" style={{ color: '#D4A017', background: 'transparent', border: 'none' }}>Sign up</Link> */}
                        <Link to={'/in'} className="btn fw-bold px-3" style={{ color: '#D4A017', background: 'transparent', border: 'none' }}>Login As Admin</Link>
                        <button className="btn text-white fw-bold px-4" style={{ backgroundColor: '#D4A017', borderRadius: '5px', fontSize: '10px' }}>Contact Advisor</button>
                    </div>
                </div>
            </nav>

            {/* Cinematic Hero Section */}
            <section className="py-5 text-center" style={{ background: 'linear-gradient(180deg, #121212 0%, #1a1a1a 100%)', color: 'white' }}>
                <div className="container py-5">
                    <span className="badge mb-3 px-3 py-2" style={{ backgroundColor: 'rgba(212, 160, 23, 0.1)', color: '#D4A017', border: '1px solid #D4A017' }}>
                        🎓 Trusted by 50,000+ Students
                    </span>
                    <h1 className="display-3 fw-bold mb-4">
                        Your Future <span style={{ color: '#D4A017' }}>Simplified.</span>
                    </h1>
                    <p className="lead text-secondary mx-auto mb-5" style={{ maxWidth: '700px' }}>
                        The most sophisticated course comparison engine in Nigeria. We help you match your JAMB scores with the right institutions in seconds.
                    </p>
                    <div className="d-flex justify-content-center gap-3">
                        <button
                            onClick={goExplore}
                            disabled={loading}
                            className="btn btn-lg px-4 py-3 fw-bold"
                            style={{ backgroundColor: '#D4A017', color: 'white' }}
                        >
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                    Loading...
                                </>
                            ) : (
                                <>
                                    Explore Courses <ArrowRight size={20} className="ms-2" />
                                </>
                            )}
                        </button>
                        <button className="btn btn-lg px-4 py-3 fw-bold btn-outline-light">
                            How it Works
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats / Trust Bar */}
            <div className="container" style={{ marginTop: '-40px' }}>
                <div className="card border-0 shadow-lg rounded-4 p-4">
                    <div className="row text-center g-4">
                        {[
                            { label: 'Accredited Schools', val: '1,500+' },
                            { label: 'Active Scholarships', val: '250+' },
                            { label: 'Success Rate', val: '98%' }
                        ].map((stat, i) => (
                            <div className="col-md-4" key={i}>
                                <h3 className="fw-bold mb-0">{stat.val}</h3>
                                <p className="text-muted small text-uppercase mb-0">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-5 mt-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold">Why Use EduCompare?</h2>
                        <p className="text-muted">Data-driven decisions for your academic journey.</p>
                    </div>
                    <div className="row g-4">
                        <FeatureCard
                            icon={<Zap className="text-warning" />}
                            title="Instant Matching"
                            desc="Input your scores and see instantly which universities will accept you."
                        />
                        <FeatureCard
                            icon={<ShieldCheck className="text-warning" />}
                            title="Verified Tuition"
                            desc="No hidden fees. We provide the most up-to-date breakdown of school fees."
                        />
                        <FeatureCard
                            icon={<Globe className="text-warning" />}
                            title="All Regions"
                            desc="From Federal Universities to private Polytechnics across all 36 states."
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

const FeatureCard = ({ icon, title, desc }) => (
    <div className="col-md-4">
        <div className="p-4 rounded-4 border-0 h-100 bg-light">
            <div className="mb-3">{icon}</div>
            <h5 className="fw-bold">{title}</h5>
            <p className="text-muted small mb-0">{desc}</p>
        </div>
    </div>
);


export default Landingpage;