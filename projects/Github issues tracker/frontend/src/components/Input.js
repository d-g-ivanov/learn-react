// onBlur = https://reactjs.org/docs/events.html#focus-events

const Input = ({
  type,
  placeholder,
  name,
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
      value={value}
      type={type ? type : "text"}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
