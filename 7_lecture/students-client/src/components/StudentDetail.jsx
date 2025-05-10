import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchStudent, fetchCodebooks } from "../data/rest-api-client";
import { getCodebookItemName } from "../data/codebook";

export const StudentDetail = () => {
  const { id } = useParams();
  const [studentDetail, setStudentDetail] = useState();
  const [codebooks, setCodebooks] = useState();

  useEffect(() => {
    const fetchStudentDetail = async () => {
      const studentDetail = await fetchStudent(id);
      setStudentDetail(studentDetail);
      const codebooks = await fetchCodebooks();
      setCodebooks(codebooks);
    };

    fetchStudentDetail();
  }, [id]);

  return studentDetail === undefined || codebooks === undefined ? (
    <p>Data se načítají</p>
  ) : (
    <div>
      <h1>Student detail</h1>
      <table class="table table-light table-bordered">
        <tbody>
          <tr>
            <th>Name</th>
            <td>
              {studentDetail.firstName} {studentDetail.lastName}
            </td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>
              {getCodebookItemName(codebooks.gender, studentDetail.gender)}
            </td>
          </tr>
          <tr>
            <th>House</th>
            <td>{getCodebookItemName(codebooks.house, studentDetail.house)}</td>
          </tr>
          <tr>
            <th>Year</th>
            <td>{getCodebookItemName(codebooks.year, studentDetail.year)}</td>
          </tr>
        </tbody>
      </table>
      <nav>
        <Link to="/">Back to student list</Link>
        <Link to={`/students/${studentDetail.id}/edit`}>
          Edit {studentDetail.firstName} {studentDetail.lastName}
        </Link>
      </nav>
    </div>
  );
};
