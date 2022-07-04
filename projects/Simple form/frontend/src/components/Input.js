// onBlur = https://reactjs.org/docs/events.html#focus-events

const Input = ({
  type,
  placeholder,
  name,
  required,
  value,
  onChange,
  borderColor,
  onBlur
}) => {
  return (
    <input
      style={{ borderColor }}
      onBlur={onBlur}
      name={name}
      required={required}
      value={value}
      type={type ? type : "text"}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
