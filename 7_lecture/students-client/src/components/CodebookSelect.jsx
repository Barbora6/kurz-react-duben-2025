export const CodebookSelect = ({ id, value, codebook, onChange }) => {
  return (
    <select
      id={id}
      value={value}
      onChange={onChange}
      className="form-select"
      required
    >
      {codebook.map((codebookItem) => (
        <option key={codebookItem.code} value={codebookItem.code}>
          {codebookItem.names.en}
        </option>
      ))}
    </select>
  );
};

// required = povinný
// option = předvybraný
