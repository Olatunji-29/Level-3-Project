// import React, { useState } from 'react'
// import '../styles/AdminDashboard.css'

// const AdminDashboard = () => {
//     const [formData, setFormData] = useState({
//         institutionId: '',
//         name: '',
//         type: '',
//         location: '',
//         state: '',
//         website: '',
//         founded: '',
//         motto: '',
//         history: '',
//         viceChancellor: '',
//         campusCount: '',
//         studentPopulation: '',
//         accreditation: '',
//         strengths: '',
//     })

//     const [coursesList, setCoursesList] = useState([])
//     const [currentCourse, setCurrentCourse] = useState({
//         name: '',
//         cutOffMark: ''
//     })

//     const [successMessage, setSuccessMessage] = useState('')
//     const [errorMessage, setErrorMessage] = useState('')

//     const handleInputChange = (e) => {
//         const { name, value } = e.target
//         setFormData({
//             ...formData,
//             [name]: value
//         })
//     }

//     const handleCourseInputChange = (e) => {
//         const { name, value } = e.target
//         setCurrentCourse({
//             ...currentCourse,
//             [name]: value
//         })
//     }

//     const addCourse = () => {
//         if (!currentCourse.name || !currentCourse.cutOffMark) {
//             setErrorMessage('Please fill in both course name and cut-off mark')
//             return
//         }

//         setCoursesList([...coursesList, { ...currentCourse, id: Date.now() }])
//         setCurrentCourse({
//             name: '',
//             cutOffMark: ''
//         })
//         setErrorMessage('')
//     }

//     const removeCourse = (id) => {
//         setCoursesList(coursesList.filter(course => course.id !== id))
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         // Validation
//         if (!formData.institutionId || !formData.name || !formData.type || !formData.location) {
//             setErrorMessage('Please fill in all required fields')
//             return
//         }

//         if (coursesList.length === 0) {
//             setErrorMessage('Please add at least one course')
//             return
//         }

//         // Clear error and set success message
//         setErrorMessage('')
//         setSuccessMessage('School added successfully!')

//         // Reset form
//         setTimeout(() => {
//             setFormData({
//                 institutionId: '',
//                 name: '',
//                 type: '',
//                 location: '',
//                 state: '',
//                 website: '',
//                 founded: '',
//                 motto: '',
//                 history: '',
//                 viceChancellor: '',
//                 campusCount: '',
//                 studentPopulation: '',
//                 accreditation: '',
//                 strengths: '',
//             })
//             setCoursesList([])
//             setCurrentCourse({
//                 name: '',
//                 cutOffMark: ''
//             })
//             setSuccessMessage('')
//         }, 2000)
//     }

//     return (
//         <div className="admin-dashboard">
//             <div className="admin-container">
//                 <h1>Admin Dashboard</h1>
//                 <p className="subtitle">Add New School/Institution</p>

//                 {successMessage && <div className="success-message">{successMessage}</div>}
//                 {errorMessage && <div className="error-message">{errorMessage}</div>}

//                 <form onSubmit={handleSubmit} className="admin-form">
//                     {/* Basic Information Section */}
//                     <div className="form-section">
//                         <h2>Basic Information</h2>

//                         <div className="form-group">
//                             <label htmlFor="institutionId">Institution ID *</label>
//                             <input
//                                 type="text"
//                                 id="institutionId"
//                                 name="institutionId"
//                                 value={formData.institutionId}
//                                 onChange={handleInputChange}
//                                 placeholder="e.g., UNIBADAN001"
//                                 required
//                             />
//                         </div>

//                         <div className="form-row">
//                             <div className="form-group">
//                                 <label htmlFor="name">School Name *</label>
//                                 <input
//                                     type="text"
//                                     id="name"
//                                     name="name"
//                                     value={formData.name}
//                                     onChange={handleInputChange}
//                                     placeholder="e.g., University of Ibadan"
//                                     required
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="type">Type of Institution *</label>
//                                 <select
//                                     id="type"
//                                     name="type"
//                                     value={formData.type}
//                                     onChange={handleInputChange}
//                                     required
//                                 >
//                                     <option value="">Select Type</option>
//                                     <option value="University">University</option>
//                                     <option value="Polytechnic">Polytechnic</option>
//                                     <option value="College">College</option>
//                                     <option value="Vocational">Vocational Institute</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div className="form-row">
//                             <div className="form-group">
//                                 <label htmlFor="location">Location/City *</label>
//                                 <input
//                                     type="text"
//                                     id="location"
//                                     name="location"
//                                     value={formData.location}
//                                     onChange={handleInputChange}
//                                     placeholder="e.g., Ibadan"
//                                     required
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="state">State</label>
//                                 <input
//                                     type="text"
//                                     id="state"
//                                     name="state"
//                                     value={formData.state}
//                                     onChange={handleInputChange}
//                                     placeholder="e.g., Oyo"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Academic Information Section */}
//                     <div className="form-section">
//                         <h2>Academic Information - Courses</h2>

//                         <div className="courses-input-container">
//                             <div className="form-row">
//                                 <div className="form-group">
//                                     <label htmlFor="courseName">Course Name</label>
//                                     <input
//                                         type="text"
//                                         id="courseName"
//                                         name="name"
//                                         value={currentCourse.name}
//                                         onChange={handleCourseInputChange}
//                                         placeholder="e.g., Medicine, Engineering, Law"
//                                     />
//                                 </div>

//                                 <div className="form-group">
//                                     <label htmlFor="courseCutOff">Cut-Off Mark</label>
//                                     <input
//                                         type="number"
//                                         id="courseCutOff"
//                                         name="cutOffMark"
//                                         value={currentCourse.cutOffMark}
//                                         onChange={handleCourseInputChange}
//                                         placeholder="e.g., 180"
//                                         step="0.5"
//                                     />
//                                 </div>
//                             </div>

//                             <button type="button" onClick={addCourse} className="btn-add-course">
//                                 + Add Course
//                             </button>
//                         </div>

//                         {/* Courses List */}
//                         {coursesList.length > 0 && (
//                             <div className="courses-list">
//                                 <h3>Added Courses ({coursesList.length})</h3>
//                                 <div className="courses-grid">
//                                     {coursesList.map((course) => (
//                                         <div key={course.id} className="course-card">
//                                             <div className="course-info">
//                                                 <p className="course-name">{course.name}</p>
//                                                 <p className="course-cutoff">Cut-off: {course.cutOffMark}</p>
//                                             </div>
//                                             <button
//                                                 type="button"
//                                                 onClick={() => removeCourse(course.id)}
//                                                 className="btn-remove-course"
//                                             >
//                                                 ✕
//                                             </button>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         )}

//                         <div className="form-group">
//                             <label htmlFor="accreditation">Accreditation</label>
//                             <input
//                                 type="text"
//                                 id="accreditation"
//                                 name="accreditation"
//                                 value={formData.accreditation}
//                                 onChange={handleInputChange}
//                                 placeholder="e.g., NUC Accredited"
//                             />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="strengths">Key Strengths (comma-separated)</label>
//                             <textarea
//                                 id="strengths"
//                                 name="strengths"
//                                 value={formData.strengths}
//                                 onChange={handleInputChange}
//                                 placeholder="e.g., Research Excellence, Industry Partnerships, Alumni Network"
//                                 rows="3"
//                             />
//                         </div>
//                     </div>

//                     {/* Institutional Details Section */}
//                     <div className="form-section">
//                         <h2>Institutional Details</h2>

//                         <div className="form-row">
//                             <div className="form-group">
//                                 <label htmlFor="founded">Year Founded</label>
//                                 <input
//                                     type="text"
//                                     id="founded"
//                                     name="founded"
//                                     value={formData.founded}
//                                     onChange={handleInputChange}
//                                     placeholder="e.g., 1948"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="motto">Motto</label>
//                                 <input
//                                     type="text"
//                                     id="motto"
//                                     name="motto"
//                                     value={formData.motto}
//                                     onChange={handleInputChange}
//                                     placeholder="e.g., Truth and Courage"
//                                 />
//                             </div>
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="history">History/Overview</label>
//                             <textarea
//                                 id="history"
//                                 name="history"
//                                 value={formData.history}
//                                 onChange={handleInputChange}
//                                 placeholder="Brief history and overview of the institution"
//                                 rows="4"
//                             />
//                         </div>

//                         <div className="form-row">
//                             <div className="form-group">
//                                 <label htmlFor="viceChancellor">Vice Chancellor/Principal Name</label>
//                                 <input
//                                     type="text"
//                                     id="viceChancellor"
//                                     name="viceChancellor"
//                                     value={formData.viceChancellor}
//                                     onChange={handleInputChange}
//                                     placeholder="e.g., Prof. John Doe"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="campusCount">Number of Campuses</label>
//                                 <input
//                                     type="number"
//                                     id="campusCount"
//                                     name="campusCount"
//                                     value={formData.campusCount}
//                                     onChange={handleInputChange}
//                                     placeholder="e.g., 3"
//                                 />
//                             </div>
//                         </div>

//                         <div className="form-row">
//                             <div className="form-group">
//                                 <label htmlFor="studentPopulation">Student Population</label>
//                                 <input
//                                     type="text"
//                                     id="studentPopulation"
//                                     name="studentPopulation"
//                                     value={formData.studentPopulation}
//                                     onChange={handleInputChange}
//                                     placeholder="e.g., 25,000+"
//                                 />
//                             </div>

//                             <div className="form-group">
//                                 <label htmlFor="website">Website</label>
//                                 <input
//                                     type="url"
//                                     id="website"
//                                     name="website"
//                                     value={formData.website}
//                                     onChange={handleInputChange}
//                                     placeholder="e.g., https://www.university.edu.ng"
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Form Actions */}
//                     <div className="form-actions">
//                         <button type="submit" className="btn-submit">Add School</button>
//                         <button
//                             type="reset"
//                             className="btn-reset"
//                             onClick={() => {
//                                 setFormData({
//                                     institutionId: '',
//                                     name: '',
//                                     type: '',
//                                     location: '',
//                                     state: '',
//                                     website: '',
//                                     founded: '',
//                                     motto: '',
//                                     history: '',
//                                     viceChancellor: '',
//                                     campusCount: '',
//                                     studentPopulation: '',
//                                     accreditation: '',
//                                     strengths: '',
//                                 })
//                                 setCoursesList([])
//                                 setCurrentCourse({
//                                     name: '',
//                                     cutOffMark: ''
//                                 })
//                                 setErrorMessage('')
//                                 setSuccessMessage('')
//                             }}
//                         >
//                             Clear Form
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default AdminDashboard













import React, { useState } from 'react';
import { Plus, Trash2, School, BookOpen, MapPin, Save, XCircle, ChevronRight, Database } from 'lucide-react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AdminDashboard = () => {
    // Basic Form State
    const [formData, setFormData] = useState({
        institutionId: '',
        name: '',
        type: '',
        location: '',
        state: '',
    });

    // Course List State
    const [coursesList, setCoursesList] = useState([]);
    const [currentCourse, setCurrentCourse] = useState({
        name: '',
        cutOffMark: '',
        subjects: '',
        tuition: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCourseInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentCourse({ ...currentCourse, [name]: value });
    };

    const addCourseToList = () => {
        if (!currentCourse.name || !currentCourse.cutOffMark || !currentCourse.subjects) {
            setStatus({ type: 'danger', message: 'Please fill all course fields' });
            return;
        }

        const newCourse = {
            ...currentCourse,
            jambSubjectCombination: currentCourse.subjects.split(',').map(s => s.trim()),
            id: Date.now()
        };

        setCoursesList([...coursesList, newCourse]);
        setCurrentCourse({ name: '', cutOffMark: '', subjects: '', tuition: '' });
        setStatus({ type: '', message: '' });
    };

    const removeCourse = (id) => {
        setCoursesList(coursesList.filter(c => c.id !== id));
    };

    const submitToDatabase = async (e) => {
        e.preventDefault();
        // ensure required fields are filled
        if (!formData.institutionId || !formData.name || !formData.type || !formData.location || !formData.state) {
            setStatus({ type: 'danger', message: 'Please fill in all required fields (including state)' });
            return;
        }

        if (coursesList.length === 0) {
            setStatus({ type: 'danger', message: 'Add at least one course first' });
            return;
        }

        const payload = {
            ...formData,
            courses: coursesList.map(({ name, cutOffMark, jambSubjectCombination, tuition }) => ({
                name,
                cutOffMark,
                jambSubjectCombination,
                tuition: tuition || "Contact Institution"
            })),
            degrees: [{ type: "B.Sc" }, { type: "B.A" }, { type: "B.Eng" }] // Default degrees
        };

        try {
            await axios.post('http://localhost:2419/institutions/institution', payload);
            setStatus({ type: 'success', message: 'Institution successfully deployed to Database!' });
            // Reset logic
            setCoursesList([]);
            setFormData({ institutionId: '', name: '', type: 'Federal University', location: '', state: '' });
        } catch (err) {
            console.error('submit error', err);
            const msg = err.response?.data?.message || err.message || 'Unknown error';
            setStatus({ type: 'danger', message: msg });
        }
    };

    return (
        <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh' }}>
            <Navbar />

            {/* Admin Header */}
            <div className="py-5 px-3 mb-5" style={{ backgroundColor: '#121212', color: 'white' }}>
                <div className="container">
                    <div className="d-flex align-items-center gap-3 mb-2">
                        <Database className="text-warning" size={32} />
                        <h1 className="display-6 fw-bold mb-0" style={{ color: '#EAB308' }}>Data Management</h1>
                    </div>
                    <p className="text-secondary small">Authenticated: Institutional Database Entry System</p>
                </div>
            </div>

            <div className="container pb-5">
                <div className="row">
                    {/* Left Column: Form */}
                    <div className="col-lg-7">
                        {status.message && (
                            <div className={`alert alert-${status.type} border-0 shadow-sm rounded-4 mb-4`}>
                                {status.type === 'success' ? '✓' : '⚠'} {status.message}
                            </div>
                        )}

                        <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                            <div className="d-flex align-items-center gap-2 mb-4">
                                <School size={20} className="text-warning" />
                                <h5 className="fw-bold mb-0">Institution Profile</h5>
                            </div>

                            <form className="row g-3">
                                <div className="col-md-4">
                                    <label className="form-label small text-muted fw-bold">INSTITUTION ID</label>
                                    <input type="text" name="institutionId" className="form-control bg-light border-0 py-2" placeholder="e.g. UI" value={formData.institutionId} onChange={handleInputChange} />
                                </div>
                                <div className="col-md-8">
                                    <label className="form-label small text-muted fw-bold">FULL NAME</label>
                                    <input type="text" name="name" className="form-control bg-light border-0 py-2" placeholder="University of Ibadan" value={formData.name} onChange={handleInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label small text-muted fw-bold">INSTITUTION TYPE</label>
                                    <select name="type" className="form-select bg-light border-0 py-2" value={formData.type} onChange={handleInputChange}>
                                        <option>Federal University</option>
                                        <option>State University</option>
                                        <option>Private University</option>
                                        <option>Polytechnic</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label small text-muted fw-bold">LOCATION</label>
                                    <input type="text" name="location" className="form-control bg-light border-0 py-2" placeholder="Ibadan" value={formData.location} onChange={handleInputChange} />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label small text-muted fw-bold">STATE</label>
                                    <input type="text" name="state" className="form-control bg-light border-0 py-2" placeholder="Oyo State" value={formData.state} onChange={handleInputChange} />
                                </div>
                            </form>
                        </div>

                        <div className="card border-0 shadow-sm rounded-4 p-4">
                            <div className="d-flex align-items-center gap-2 mb-4">
                                <BookOpen size={20} className="text-warning" />
                                <h5 className="fw-bold mb-0">Course Builder</h5>
                            </div>

                            <div className="row g-3">
                                <div className="col-md-8">
                                    <label className="form-label small text-muted fw-bold">COURSE NAME</label>
                                    <input type="text" name="name" className="form-control border-secondary-subtle py-2" placeholder="e.g. Mechanical Engineering" value={currentCourse.name} onChange={handleCourseInputChange} />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label small text-muted fw-bold">CUT-OFF MARK</label>
                                    <input type="number" name="cutOffMark" className="form-control border-secondary-subtle py-2" placeholder="200" value={currentCourse.cutOffMark} onChange={handleCourseInputChange} />
                                </div>
                                <div className="col-12">
                                    <label className="form-label small text-muted fw-bold">JAMB SUBJECTS (COMMA SEPARATED)</label>
                                    <input type="text" name="subjects" className="form-control border-secondary-subtle py-2" placeholder="English, Maths, Physics, Chemistry" value={currentCourse.subjects} onChange={handleCourseInputChange} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label small text-muted fw-bold">TUITION (OPTIONAL)</label>
                                    <input type="text" name="tuition" className="form-control border-secondary-subtle py-2" placeholder="₦250,000" value={currentCourse.tuition} onChange={handleCourseInputChange} />
                                </div>
                                <div className="col-md-6 d-flex align-items-end">
                                    <button type="button" onClick={addCourseToList} className="btn btn-dark w-100 py-2 fw-bold d-flex align-items-center justify-content-center gap-2">
                                        <Plus size={18} /> Add Course to Batch
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Preview & Action */}
                    <div className="col-lg-5">
                        <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
                            <div className="p-3 bg-dark text-white d-flex justify-content-between align-items-center">
                                <span className="small fw-bold">BATCH PREVIEW</span>
                                <span className="badge bg-warning text-dark">{coursesList.length} Courses</span>
                            </div>
                            <div className="p-0" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                                {coursesList.length === 0 ? (
                                    <div className="text-center py-5 text-muted">
                                        <BookOpen size={40} className="opacity-25 mb-2" />
                                        <p className="small">No courses added to batch yet.</p>
                                    </div>
                                ) : (
                                    <div className="list-group list-group-flush">
                                        {coursesList.map(c => (
                                            <div key={c.id} className="list-group-item p-3 d-flex justify-content-between align-items-start border-0 border-bottom">
                                                <div>
                                                    <div className="fw-bold small">{c.name}</div>
                                                    <div className="text-muted" style={{ fontSize: '11px' }}>Cut-off: <span className="text-warning fw-bold">{c.cutOffMark}</span></div>
                                                    <div className="text-muted italic" style={{ fontSize: '10px' }}>{c.jambSubjectCombination.join(' • ')}</div>
                                                </div>
                                                <button onClick={() => removeCourse(c.id)} className="btn btn-link text-danger p-0"><Trash2 size={16} /></button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="card border-0 shadow-sm rounded-4 p-4 text-center bg-white">
                            <h6 className="fw-bold mb-3">Ready to Publish?</h6>
                            <p className="small text-muted mb-4">Ensure all data is correct. Published schools will immediately appear in the Command Center.</p>
                            <button
                                onClick={submitToDatabase}
                                className="btn btn-warning w-100 py-3 fw-extrabold text-uppercase shadow-sm d-flex align-items-center justify-content-center gap-2"
                                style={{ letterSpacing: '1px' }}
                            >
                                <Save size={20} /> Deploy Institution
                            </button>
                            <button className="btn btn-link btn-sm text-secondary mt-2 fw-bold text-decoration-none d-flex align-items-center justify-content-center gap-1">
                                <XCircle size={14} /> Clear All Inputs
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AdminDashboard;