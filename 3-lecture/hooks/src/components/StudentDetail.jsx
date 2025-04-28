import { Button } from "./Button";

export const StudentDetail = ({ jmeno, prijmeni, vek, handleClickButton }) => {
  return (
    <div>
      <b>
        <p>{jmeno}</p>
        <p>{prijmeni}</p>
      </b>
      <p>({vek})</p>
      <Button onStudentClick={handleClickButton} />
    </div>
  );
};
