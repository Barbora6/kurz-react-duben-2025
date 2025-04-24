// export const User = (props) => {
//   return (
//     <div>
//       <hr />
//       <h4>Jméno uživatele: {props.firstName} {props.lastName} {props.age}</h4>
//     </div>
//   );
// };

export const User = ({ firstName, lastName, age }) => {
  return (
    <div>
      <h4>
        {firstName} {lastName}
      </h4>
      <p>{age}</p>
    </div>
  );
};
