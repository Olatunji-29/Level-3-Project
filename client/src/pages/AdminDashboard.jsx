
import React, { useState, useEffect } from 'react';
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
        link: '',
        path: '',
        housing: '',
        strength: '',
        rank: '',
        year: '',
        tuition: '',
        applicant: ''
    });

    const [schools, setSchools] = useState([]);
    const [editingSchoolId, setEditingSchoolId] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:2419/institutions/schools")
            .then(res => {
                setSchools(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    const deleteSchool = async (id) => {
        try {
            await axios.delete(`http://localhost:2419/institutions/${id}`);

            // remove from UI instantly
            setSchools(prev => prev.filter(s => s._id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    const editSchool = (school) => {
        setEditingSchoolId(school._id);
        setFormData(school)
        setCoursesList(school.courses);
        console.log(school);

    }





    // Course List State
    const [coursesList, setCoursesList] = useState([]);
    const [currentCourse, setCurrentCourse] = useState({
        name: '',
        cutOffMark: '',
        subjects: '',
        tuition: '',
        degree: '',
        faculty: '',
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
        setCurrentCourse({ name: '', cutOffMark: '', subjects: '', tuition: '', degree: '', faculty: '' });
        setStatus({ type: '', message: '' });
    };

    const removeCourse = (id) => {
        setCoursesList(coursesList.filter(c => c.id !== id));
    };

    const submitToDatabase = async (e) => {
        e.preventDefault();
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
            courses: coursesList.map(({ name, cutOffMark, jambSubjectCombination, tuition, degree, faculty }) => ({
                name,
                cutOffMark,
                jambSubjectCombination,
                tuition: tuition || "Contact Institution",
                degree,
                faculty,
            })),

        };

        try {
            if (editingSchoolId) {
                await axios.put(
                    `http://localhost:2419/institutions/institution/${editingSchoolId}`,
                    payload
                );

                setStatus({
                    type: "success",
                    message: "Institution updated successfully!"
                });
            } else {
                await axios.post(
                    "http://localhost:2419/institutions/institution",
                    payload
                );

                setStatus({
                    type: "success",
                    message: "Institution successfully deployed to Database!"
                });
            }

            setCoursesList([]);
            setEditingSchoolId(null);
            setFormData({
                institutionId: '',
                name: '',
                type: 'Federal University',
                location: '',
                state: '',
                link: '',
                path: '',
                housing: '',
                strength: '',
                rank: '',
                year: '',
                tuition: '',
                applicant: ''
            });

        } catch (err) {
            console.error("submit error", err);
            const msg = err.response?.data?.message || err.message || "Unknown error";
            setStatus({ type: "danger", message: msg });
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

                                <div className="col-md-3">
                                    <label className="form-label small text-muted fw-bold">PORTAL</label>
                                    <input type="text" name="link" className="form-control bg-light border-0 py-2" placeholder="https//:...." value={formData.link} onChange={handleInputChange} />
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label small text-muted fw-bold">Applicant</label>
                                    <input type="text" name="applicant" className="form-control bg-light border-0 py-2" placeholder="Applicant" value={formData.applicant} onChange={handleInputChange} />
                                </div>


                                <div className="col-md-3">
                                    <label className="form-label small text-muted fw-bold">ALter Pathway</label>
                                    <input type="text" name="path" className="form-control bg-light border-0 py-2" placeholder="pathway" value={formData.path} onChange={handleInputChange} />
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label small text-muted fw-bold">Housing type</label>
                                    <input type="text" name="housing" className="form-control bg-light border-0 py-2" placeholder="housing" value={formData.housing} onChange={handleInputChange} />
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label small text-muted fw-bold">School Strength</label>
                                    <input type="text" name="strength" className="form-control bg-light border-0 py-2" placeholder="strength" value={formData.strength} onChange={handleInputChange} />
                                </div>

                                <div className="col-md-3">
                                    <label className="form-label small text-muted fw-bold">School Rank</label>
                                    <input type="text" name="rank" className="form-control bg-light border-0 py-2" placeholder="rank" value={formData.rank} onChange={handleInputChange} />
                                </div>


                                <div className="col-md-3">
                                    <label className="form-label small text-muted fw-bold">year Established</label>
                                    <input type="text" name="year" className="form-control bg-light border-0 py-2" placeholder="Year Established" value={formData.year} onChange={handleInputChange} />
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

                                <div className="col-md-4">
                                    <label className="form-label small text-muted fw-bold">Degree</label>
                                    <input type="text" name="degree" className="form-control border-secondary-subtle py-2" placeholder="English..." value={currentCourse.degree} onChange={handleCourseInputChange} />
                                </div>

                                <div className="col-md-4">
                                    <label className="form-label small text-muted fw-bold">Faculty</label>
                                    <input type="text" name="faculty" className="form-control border-secondary-subtle py-2" placeholder="English..." value={currentCourse.faculty} onChange={handleCourseInputChange} />
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
                                <Save size={20} /> {editingSchoolId ? 'Update Institution' : "Deploy Institution"}
                            </button>
                            <button className="btn btn-link btn-sm text-secondary mt-2 fw-bold text-decoration-none d-flex align-items-center justify-content-center gap-1">
                                <XCircle size={14} /> Clear All Inputs
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-sm rounded-4 p-4 mt-4">
                    <h5 className="fw-bold mb-3">All Schools</h5>

                    {schools.length === 0 ? (
                        <p className="text-muted">No schools found</p>
                    ) : (
                        schools.map((school, index) => (
                            <div
                                key={school._id}
                                className="d-flex justify-content-between align-items-center border-bottom py-2"
                            >
                                <div>
                                    <div className="fw-bold">
                                        {index + 1}. {school.name}
                                    </div>
                                    <div className="text-muted small">
                                        {school.location} • {school.state}
                                    </div>
                                </div>

                                <div className="d-flex gap-2">
                                    <button onClick={() => editSchool(school)} className="btn btn-sm btn-warning">
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => {
                                            const confirmDelete = window.confirm("Are you sure you want to delete this school?");
                                            if (confirmDelete) {
                                                deleteSchool(school._id);
                                            }
                                        }}
                                        className="btn btn-sm btn-danger"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default AdminDashboard;