// export const Execice = (props) => {
//   return (
//     <div>
//       <hr />
//       <h4>
//         Jméno: {props.firstName} {props.lastName} {props.age}
//       </h4>
//     </div>
//   );
// };

export const Execise = ({ firstName, lastName, age }) => {
  return (
    <div>
      <h3>
        {firstName} {lastName}
      </h3>
      <p>({age})</p>
    </div>
  );
};
