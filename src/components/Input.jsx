function Input({ title, value, onChange, className, maxLength = 10 }) {
  return (
    <div className={className}>
      <span>{title}</span>
      <input
        maxLength={maxLength}
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
