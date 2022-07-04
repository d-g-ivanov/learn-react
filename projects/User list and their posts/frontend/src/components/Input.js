// onBlur = https://reactjs.org/docs/events.html#focus-events

const Input = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input
      name={name}
      value={value}
      type={type ? type : "text"}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
