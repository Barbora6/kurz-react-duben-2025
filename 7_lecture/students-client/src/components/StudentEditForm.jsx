import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchCodebooks,
  fetchStudent,
  updateStudent
} from "../data/rest-api-client";
import { CodebookSelect } from "./CodebookSelect";
import { CodebookRadioButtons } from "./CodebookRadioButtons";

export const StudentEditForm = () => {
  const { id } = useParams();
  const [student, setStudent] = useState();
  const [codebooks, setCodebooks] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndSetStudent = async () => {
      const student = await fetchStudent(id);
      setStudent(student);
      const codebooks = await fetchCodebooks();
      setCodebooks(codebooks);
    };

    fetchAndSetStudent();
  }, [id]);

  // udělej nový objekt, do něj pomocí spread operátoru, nakopíruješ starý objekt + jenom má změněné firstName
  const setFirstName = (firstName) => {
    setStudent({ ...student, firstName });
  };
  const setLastName = (lastName) => {
    setStudent({ ...student, lastName });
  };

  const setHouse = (house) => {
    setStudent({ ...student, house });
  };

  const setYear = (year) => {
    setStudent({ ...student, year });
  };

  const setGender = (gender) => {
    setStudent({ ...student, gender });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateStudent(student);
    navigate(`/students/${id}`);
  };

  return student === undefined || codebooks === undefined ? (
    <p>data se načítají</p>
  ) : (
    <>
      <h1>Editování studentů</h1>
      <form onSubmit={handleSubmit}>
        <table class="table table-light table-bordered">
          <tbody>
            <tr>
              <th>
                <label for="first-name" className="form-label">
                  First name
                </label>
              </th>
              <td>
                <input
                  id="first-name"
                  name="first-name"
                  class="form-control"
                  value={student.firstName}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>
                <label for="last-name" class="form-label">
                  Last name
                </label>
              </th>
              <td>
                <input
                  id="last-name"
                  name="last-name"
                  class="form-control"
                  value={student.lastName}
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                  required
                />
              </td>
            </tr>

            <tr>
              <th>
                <label for="house" class="form-label">
                  House
                </label>
              </th>
              <td>
                <CodebookSelect
                  id="house"
                  value={student.house}
                  codebook={codebooks.house}
                  onChange={(event) => setHouse(event.target.value)}
                ></CodebookSelect>
              </td>
            </tr>

            <tr>
              <th>
                <label for="year" class="form-label">
                  Year
                </label>
              </th>
              <td>
                <CodebookSelect
                  id="year"
                  value={student.year}
                  codebook={codebooks.year}
                  onChange={(event) => setYear(event.target.value)}
                ></CodebookSelect>
              </td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>
                <CodebookRadioButtons
                  value={student.gender}
                  codebook={codebooks.gender}
                  onChange={(event) => setGender(event.target.value)}
                ></CodebookRadioButtons>
              </td>
            </tr>
            <tr>
              <th>
                <label for="house" class="form-label">
                  House
                </label>
              </th>
              <td>
                <CodebookSelect
                  id="house"
                  value={student.house}
                  codebook={codebooks.house}
                  onChange={(event) => setHouse(event.target.value)}
                ></CodebookSelect>
              </td>
            </tr>
            <tr>
              <th>
                <label for="year" class="form-label">
                  Year
                </label>
              </th>
              <td>
                <CodebookSelect
                  id="year"
                  value={student.year}
                  codebook={codebooks.year}
                  onChange={(event) => setYear(event.target.value)}
                ></CodebookSelect>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <button class="btn btn-primary">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};
