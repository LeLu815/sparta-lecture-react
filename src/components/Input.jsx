function Input({ title, value, onChange }) {
  return (
    <div>
      <span>{title}</span>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
}

export default Input;
