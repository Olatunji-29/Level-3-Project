import React from 'react';
import { Search, GraduationCap, Plus, ChevronDown, Filter, Bookmark } from 'lucide-react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";




const App = () => {

  const navigate = useNavigate();
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedDegree, setSelectedDegree] = useState("");



  useEffect(() => {
    axios.get('http://localhost:2419/institutions/schools')
      .then((result) => {

        const info = result.data.data
        setSchools(info)
        //  console.log(info)

      }).catch((err) => {
        console.log('Error:', err)
      })

  }, [])

  useEffect(() => {
    console.log('Schools state updated:', schools)
  }, [schools])



  const searchSchool = () => {
    console.log(selectedSchool)
    console.log(selectedCourse)
    console.log(selectedDegree)
  }


  // const courses = [
  //   { school: "University of Lagos", status: "ADMISSION OPEN", type: "B.Sc Computer Science", duration: "4 Years | Full-time", score: "280+", subjects: "Math, Eng, Phys, Chem", tuition: "₦245,000", logo: "🏛️" },
  //   { school: "Covenant University", status: "ADMISSION OPEN", type: "B.Eng Software Engineering", duration: "5 Years | Full-time", score: "250+", subjects: "Math, Eng, Phys, Chem", tuition: "₦1,200,000", logo: "🎓" },
  //   { school: "Ibadan University", status: "CLOSED", type: "B.Sc Data Science", duration: "4 Years | Full-time", score: "275+", subjects: "Math, Eng, Phys, Econ", tuition: "₦210,000", logo: "🏛️" },
  //   { school: "Lagos Business School", status: "ADMISSION OPEN", type: "B.Sc Business Analytics", duration: "4 Years | Part-time", score: "240+", subjects: "Math, Eng, Gov, Lit", tuition: "₦1,500,000", logo: "🏢" },
  // ];

  // const filteredCourses = selectedSchool
  //   ? courses.filter(course => course.school === selectedSchool)
  //   : courses;


  return (


    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
      {/* Navbar */}
      <Navbar />
      {/* Hero / Command Center */}
      <div className="text-center py-5 px-3" style={{ backgroundColor: '#121212', color: 'white' }}>
        <h1 className="display-6 fw-bold mb-2" style={{ color: '#EAB308' }}>Command Center</h1>
        <p className="text-secondary small mb-4">Search over 1,500 courses and accredited institutions across the country.</p>

        <div className="container">
          <div className="row justify-content-center g-2">
            <div className="col-md-4">
              <div className="input-group bg-white rounded">
                {/* <span className="input-group-text bg-white border-0"><Search size={18} className="text-muted" /></span> */}
                {/* <input type="text" className="form-control border-0 shadow-none" placeholder="Search for any university, Polythecnic, College across Nigeria" /> */}
                <select
                  className="form-select border-0 shadow-none"
                  onChange={(e) => {
                    const school = schools.find(
                      (sch) => sch._id === e.target.value
                    );
                    setSelectedSchool(school);
                    setSelectedCourse('');
                    setSelectedDegree('')
                  }}
                >
                  <option className='' value="">Search for any university, Polythecnic, College across Nigeria</option>
                  {schools.map((sch, index) => (
                    <option key={sch._id} value={sch._id}>{index + 1}. {sch.name}</option>
                  ))}
                </select>
              </div>
            </div>


            <div className="col-md-2">
              <div className="d-flex align-items-center justify-content-between bg-white text-dark p-1 rounded h-100 px-3 cursor-pointer border-start">
                <select
                  className="form-select border-0 shadow-none bg-transparent fw-medium"
                  style={{
                    fontSize: '14px',
                    cursor: 'pointer',
                    minWidth: '120px'
                  }} value={selectedCourse}
                  onChange={(e) => {
                    const course = selectedSchool?.courses?.find(
                      c => c.name === e.target.value
                    );

                    setSelectedCourse(e.target.value);
                    setSelectedDegree(course?.degree || "");
                  }}
                >
                  <option value="">Available Courses</option>
                  {selectedSchool?.courses?.map((course, index) => (
                    <option key={index} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-md-2">
              <div className="d-flex align-items-center justify-content-between bg-white text-dark p-1 rounded h-100 px-3 cursor-pointer border-start">

                <select
                  className="form-select border-0 shadow-none bg-transparent fw-medium"
                  style={{
                    fontSize: '14px',
                    minWidth: '120px'
                  }}
                  value={selectedDegree}
                  disabled
                >
                  <option value={selectedDegree}>
                    {selectedDegree || "Available Degree"}
                  </option>
                </select>


              </div>
            </div>
            <div className="col-md-2">
              <button onClick={searchSchool} className="btn w-100 h-100 fw-bold text-white" style={{ backgroundColor: '#D4A017' }}>Search</button>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-center gap-2 flex-wrap">
            <span className="text-secondary small">Popular:</span>
            {['Computer Science', 'Medicine', 'Law', 'Business Admin'].map(tag => (
              <span key={tag} className="badge rounded-pill border border-warning text-warning fw-normal px-3 py-1 cursor-pointer" style={{ fontSize: '11px' }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row">
          {/* Table Column */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-end mb-4">
              <div>
                <h3 className="fw-bold mb-0">Available Courses</h3>
                <p className="text-muted small">Showing 152 results based on your search</p>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-white border border-secondary-subtle btn-sm fw-bold"><Filter size={14} /> Sort By</button>
                <button className="btn btn-white border border-secondary-subtle btn-sm fw-bold">Export</button>
              </div>
            </div>

            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="table-responsive">


                <table border="1" cellPadding="8" style={{ marginTop: '20px' }} className="table mb-0  align-middle">
                  <thead style={{ backgroundColor: '#1A1A1A' }}>
                    <tr>
                      <th className="px-4 py-3 small fw-bold text-warning border-0">School</th>
                      <th className="px-4 py-3 small fw-bold text-warning border-0">Course</th>
                      <th className="px-4 py-3 small fw-bold text-warning border-0">Degree</th>
                      <th className="px-4 py-3 small fw-bold text-warning border-0">Cut Off Mark</th>
                      <th className="px-4 py-3 small fw-bold text-warning border-0">Tuition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedSchool && selectedCourse && selectedDegree ? (
                      <>
                        {/* Details Row */}
                        <tr >
                          <td className="px-4 py-3">
                            {selectedSchool.name}
                          </td>
                          <td className="px-4 py-3">
                            {selectedCourse}
                          </td>
                          <td className="px-4 py-3">
                            {selectedDegree}
                          </td>
                          <td className="px-4 py-3">
                            {selectedSchool.courses.find(
                              c => c.name === selectedCourse
                            )?.cutOffMark || "N/A"}
                          </td>
                          <td className="px-4 py-3">
                            {`₦${selectedSchool.courses.find(c => c.name === selectedCourse)?.tuition || "I dont know"}`}
                          </td>
                        </tr>

                        <tr>

                          <td colSpan={6} className='text-start rounded-0 p-3' style={{ backgroundColor: '##FFC12F' }}>

                            <span>
                              <strong>{selectedSchool.name}</strong>  is a <strong>{selectedSchool.type}</strong> located in <strong>{selectedSchool.location} </strong>, established in <strong>{selectedSchool.year || '....'}</strong>. The institution offers accredited programmes across various fields, including <strong>{selectedCourse}</strong>, leading to the award of a <strong>{selectedDegree}</strong> degree. <br /> <br />

                              <strong>Quick Hints for Applicants:</strong> <hr />


                              <br />

                              • Admission: The primary cut-off mark for <strong>{selectedCourse} </strong>  sits around{" "}
                              <strong>
                                {selectedSchool.courses.find(c => c.name === selectedCourse)?.cutOffMark || "N/A"}
                              </strong>.
                              If your score is lower, <strong>{selectedSchool.path || 'No other program'} </strong> is available in the school which you can consider looking forward to, Or choose another less competitive course . <hr />

                              • Subject Combination: The subjects required for <strong>{selectedCourse}</strong> are{" "}
                              <strong>
                                {selectedSchool.courses
                                  .find(c => c.name === selectedCourse)
                                  ?.jambSubjectCombination.join(", ")}
                              </strong>. Applicant should know that Wrong subject combination can cause him/her admission. <br />  <hr />


                              • Admission competition: <strong>{selectedSchool.name}</strong> is ranked <strong>{selectedSchool.rank.split(',')[0]}</strong> in Nigeria and <strong>{selectedSchool.rank.split(',')[1].trim()}</strong>  in the whole world. So, that tells you how competitive the school is. And based on previous year, The school have approximately <strong>{selectedSchool.applicant}</strong> applicants and still looking forward to more this year. <hr />


                              • Campus Vibe: The school is known for its <strong>{selectedSchool.strength} and a disciplineStyle learning environment.  </strong>  <br /> <hr />


                              • Living & Expenses: Tuition for <strong> {selectedCourse} </strong> is approximately <strong>
                                {`₦${selectedSchool.courses.find(c => c.name === selectedCourse)?.tuition || "Not available"}`}

                              </strong> per session and may change over time. Students typically stay in<strong> {selectedSchool.housing} </strong>.

                              For full admission details, step-by-step registration procedures, and official fee structures, use the link below to visit the official portal.
                            </span>

                          </td>


                        </tr>

                        <tr>
                          <td colSpan={6} className="text-center px-4 py-3">
                            <button
                              onClick={() => {
                                console.log(`Link: ${selectedSchool.link}`);
                                window.open(selectedSchool.link, "_blank");
  

                              }}
                              className="btn btn-primary btn-lg"
                            >
                              Go to school portal to explore more                            </button>
                          </td>
                        </tr>
                      </>
                    ) : (
                      <tr>
                        <td colSpan={4} className="text-center px-4 py-3">
                          Choose the course and the degree
                        </td>
                      </tr>
                    )}
                  </tbody>

                </table>

              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="card border-0 shadow-sm p-4 mb-4 rounded-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6 className="fw-bold mb-0 small"><span className="text-warning me-2">■</span> MY SHORTLIST</h6>
                <span className="badge bg-dark">0/5</span>
              </div>
              <div className="text-center py-3">
                <div className="bg-light rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '50px', height: '50px' }}>
                  <Bookmark size={20} className="text-secondary opacity-25" />
                </div>
                <p className="text-muted mb-4" style={{ fontSize: '11px' }}>You haven't added any schools to your comparison yet.</p>
                <button className="btn w-100 fw-bold mb-2 border-0" style={{ backgroundColor: '#FFF9E6', color: '#D4A017', fontSize: '11px' }}>Add From List</button>
                <button className="btn btn-light w-100 fw-bold text-muted border-0" style={{ fontSize: '11px' }}>Compare Now</button>
              </div>
            </div>

            <div className="card border-0 p-4 rounded-4 text-white" style={{ backgroundColor: '#1A1A1A' }}>
              <h6 className="fw-bold mb-1">Need Help?</h6>
              <p className="text-secondary small mb-4" style={{ fontSize: '10px' }}>Chat with our admission experts to find your best fit.</p>
              <button className="btn w-100 fw-bold text-black" style={{ backgroundColor: '#EAB308', fontSize: '11px' }}>Start Live Chat</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div >
  );
};

export default App;