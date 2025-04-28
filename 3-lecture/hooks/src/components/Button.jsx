export const Button = ({ jmeno, onStudentClick, name }) => {
  return (
    <>
      <button onClick={onStudentClick}>
        {jmeno}
        {name}
      </button>
    </>
  );
};
