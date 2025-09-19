import './CSS/style.css'
import React, { useState } from "react";


function AddStudent() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gmail, setGmail] = useState("");
    const [course, setCourse] = useState("");
    const [errors, setErrors] = useState({});

    function handleAddStudent() {
        const newErrors = {};

        if (name.trim() === "") {
            newErrors.name = "⚠️ Name is required";
        }

        if (age.trim() === "" || isNaN(age) || parseInt(age) <= 0 || parseInt(age) > 100) {
            newErrors.age = "⚠️ Enter a valid age ";
        }

        if (gmail.trim() === "" || !gmail.includes("@gmail.com") || !/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(gmail.trim())) {
            newErrors.gmail = "⚠️ Enter a valid Gmail ID";
        }

        if (course.trim() === "") {
            newErrors.course = "⚠️ Course name is required";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newStudent = {
            name: name.trim(),
            age: parseInt(age),
            gmail: gmail.trim(),
            course: course.trim()
        };

        setStudents([...students, newStudent]);
        setName("");
        setAge("");
        setGmail("");
        setCourse("");
        setErrors({});
    }
    Ui( students, (students) => {
        return ( <ul style={{ marginTop: "20px", padding: 0 }}>
            {students.map(function (student, index) {
                return(
                <li key={index} className="student-info">
                    <h3>{student.name}</h3>
                    <p>🎂 Age: {student.age} yrs</p>
                    <p>📧 Gmail: {student.gmail}</p>
                    <p>📚 Course: {student.course}</p>
                </li>
                );
            })}
        </ul>
        );
    });

    return (
        <div>
            {<div className='student-form' style={{ padding: "20px", maxWidth: "400px", fontFamily: "Arial" }}>
                <h2>📋 Student Form</h2>

                <label>Name</label><br />
                <input
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange={function (e) {
                        setName(e.target.value);
                    }}
                />
                {errors.name && <div style={{ color: "red", fontSize: "13px" }}>{errors.name}</div>}

                <br /> <label>Age</label><br />
                <input
                    type="number"
                    placeholder="Enter age"
                    value={age}
                    onChange={function (e) {
                        setAge(e.target.value);
                    }}
                />
                {errors.age && <div style={{ color: "red", fontSize: "13px" }}>{errors.age}</div>}

                <br /><label>Gmail ID</label><br />
                <input
                    type="email"
                    placeholder="Enter Gmail ID"
                    value={gmail}
                    onChange={function (e) {
                        setGmail(e.target.value);
                    }}
                />
                {errors.gmail && <div style={{ color: "red", fontSize: "13px" }}>{errors.gmail}</div>}

                <br /><label>Course</label><br />
                <input
                    type="text"
                    placeholder="Enter Course Name"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />
                {errors.course && <div style={{ color: "red", fontSize: "13px" }}>{errors.course}</div>}

                <br /> <button onClick={handleAddStudent} style={{ marginTop: "10px" }}>
                    Add Student
                </button>

            </div>}

        </div>
    );
}
const View = function Ui(ui) {
    return (<>
        <div>
            {ui}
        </div>

    </>)


};


export default { AddStudent, View };
// export ;


