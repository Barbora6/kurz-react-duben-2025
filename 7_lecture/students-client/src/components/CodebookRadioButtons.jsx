export const CodebookRadioButtons = ({ value, codebook, onChange }) => {
  return (
    <div>
      {codebook.map((codebookItem) => (
        <label key={codebookItem.code} className="form-check-label">
          <input
            type="radio"
            className="form-check-input"
            value={codebookItem.value}
            onChange={onChange}
            checked={value === codebookItem.code}
          />
          {codebookItem.names.en}
        </label>
      ))}
    </div>
  );
};
