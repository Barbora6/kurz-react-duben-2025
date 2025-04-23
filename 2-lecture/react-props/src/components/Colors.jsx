export const Colors = () => {
  const colors = ["bílá", "černá", "červená", "zelená", "oranžová"];
  return (
    <div>
      <hr />
      <h1>Možnosti barev</h1>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </div>
  );
};
