import { StudentDetail } from "./StudentDetail";

export const Students = ({ lide }) => {
  // studenta posílám jako argument a posílám ho níže
  const handleClickButton = (student) => {
    console.log(student);
  };

  if (lide.length === 0) {
    return <p>No students!</p>;
  }

  return (
    <>
      {lide.map((clovek) => {
        return (
          <StudentDetail
            key={clovek.id}
            jmeno={clovek.jmeno}
            prijmeni={clovek.prijmeni}
            vek={clovek.vek}
            handleClickButton={() => handleClickButton(clovek)}
          />
        );
      })}
    </>
  );
};
