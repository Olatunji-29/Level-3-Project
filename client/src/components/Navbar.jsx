import React from 'react'
import { Search, GraduationCap, Plus, ChevronDown, Filter, Bookmark, User, CircleUser, UserRound, Users } from 'lucide-react';


const Navbar = () => {
    return (
        <>

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

                        {/* Buttons (Moves inside the toggle on mobile) */}
                        <button className="d-flex border border-0 bg-transparent flex-column flex-lg-row align-items-center gap-1 mt-3 mt-lg-0">
                            <div className="d-flex align-items-center justify-content-center rounded-circle bg-light" style={{ width: 20, height: 40 }} >
                                <User size={20} />
                            </div>
                            <p className='my-lg-auto pe-lg-3'>customer</p>
                        </button>
                        <button className="btn text-white fw-bold px-4" style={{ backgroundColor: '#D4A017', borderRadius: '5px', fontSize: '10px' }}>Contact Advisor</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar