import { useEffect, useState } from "react";
import "./StudentList.css";
import { Link } from "react-router-dom";
import {
  fetchStudents,
  fetchCodebooks,
  deleteStudent
} from "../data/rest-api-client";
import { getCodebookItemName } from "../data/codebook";

export const StudentList = () => {
  const [students, setStudents] = useState();
  const [codebooks, setCodebooks] = useState();

  const fetchAndSetStudents = async () => {
    const students = await fetchStudents();
    setStudents(students);
    const codebooks = await fetchCodebooks();
    setCodebooks(codebooks);
  };

  useEffect(() => {
    fetchAndSetStudents();
  }, []);

  const handleDelete = async (id) => {
    setStudents(undefined);
    await deleteStudent(id);
    fetchAndSetStudents();
  };

  return students === undefined || codebooks === undefined ? (
    <>
      <p>Načítám</p>
    </>
  ) : (
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
                  <Link to={`/students/${student.id}`}>
                    {student.firstName} {student.lastName}
                  </Link>
                </td>
                <td>{getCodebookItemName(codebooks.gender, student.gender)}</td>
                <td>{getCodebookItemName(codebooks.house, student.house)}</td>
                <td>{getCodebookItemName(codebooks.year, student.year)}</td>
                <td>
                  <Link to={`/students/${student.id}/edit`}>Edit</Link>
                  <button
                    type="button"
                    class="btn btn-danger student-delete"
                    onClick={() => handleDelete(student.id)}
                  >
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
