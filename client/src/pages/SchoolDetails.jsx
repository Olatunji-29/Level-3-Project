import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SchoolDetails = () => {
    const { id } = useParams();
    const [school, setSchool] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:2419/institutions/${id}`)
            .then(res => setSchool(res.data.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!school) return <p>Loading...</p>;

    return (
        <div className="container py-4">
            <h2>{school.name}</h2>
            <p>{school.location} • {school.state}</p>

            <h4 className="mt-4">Courses</h4>

            <ul className="list-group">
                {school.courses?.map((course, index) => (
                    <li key={index} className="list-group-item">
                        <strong>{course.name}</strong> <br />
                        Cut-off: {course.cutOffMark} <br />
                        Subjects: {course.jambSubjectCombination?.join(", ")}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SchoolDetails;