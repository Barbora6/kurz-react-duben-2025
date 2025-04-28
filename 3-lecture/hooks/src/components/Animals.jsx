import { useState } from "react";
import { Button } from "./Button";

export const Animals = () => {
  const [animals, setAnimals] = useState([]);

  const handleClick = (animal) => {
    const newAnimals = [...animals, animal];

    setAnimals(newAnimals);
  };

  return (
    <>
      <ul>
        {animals.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
      <Button name="pes" onStudentClick={() => handleClick("pes")} />
      <Button name="kočka" onStudentClick={() => handleClick("kočka")} />
      <Button name="tygr" onStudentClick={() => handleClick("tygr")} />
      <Button name="mravenec" onStudentClick={() => handleClick("mravenec")} />
    </>
  );
};
