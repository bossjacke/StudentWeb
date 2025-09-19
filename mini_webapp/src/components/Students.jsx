import React, { useState } from "react";
import Addstudent from "./Addstudent";

    const [students, setStudents] = useState([
        { name: "Arun", age: 22, gmail: "arun@gmail.com", course: "Maths" },
        { name: "Divya", age: 20, gmail: "divya@gmail.com", course: "Physics" }
    ]);
    function Students({ students }) {
        return (
            <div>
                <h3>Student List</h3>
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>
                            {student.name} ({student.age}) - {student.course} - {student.gmail}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

export default Students;