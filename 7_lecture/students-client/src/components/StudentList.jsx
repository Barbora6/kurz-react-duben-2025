import { useEffect, useState } from "react";
import "./StudentList.css";

export const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch("http://localhost:8080/students");
      setStudents(await response.json());
    };
    fetchStudents();
  }, []);

  return (
    <div className="StudentList">
      <header>
        <h1>Studenti</h1>
      </header>
      <section>
        <table class="table table-light table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>House</th>
              <th>Year</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>
                  {student.firstName} {student.lastName}
                </td>
                <td>{student.gender}</td>
                <td>{student.house}</td>
                <td>{student.year}</td>
                <td>
                  <a href="edit.html">Edit</a>
                  <button type="button" class="btn btn-danger student-delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};
