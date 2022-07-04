// hooks
import { useContext, useEffect } from "react";
import useColor from "../utils/useColor";
import useFormPost from "../utils/useFormPost";

// components
import Input from "./Input";
import Button from "./Button";

// others
import { FormContext } from "../store/FormContext";

const Form = () => {
  const { state, dispatch } = useContext(FormContext);

  // handle change
  const onChange = (e) => {
    dispatch({
      type: "UPDATE",
      payload: { [e.target.name]: e.target.value }
    });
  };

  // handle submit
  const [submitStatus, onSubmit] = useFormPost("/form", state);

  useEffect(() => {
    if (submitStatus === "success") dispatch({ type: "CLEAR" });
  }, [submitStatus, dispatch]);

  // handle blur
  const [borderColor, changeBorderColor] = useColor();

  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="First Name"
        name="fname"
        required
        value={state.fname}
        onChange={onChange}
        borderColor={borderColor}
        onBlur={changeBorderColor}
      />
      <Input
        placeholder="Last Name"
        name="lname"
        required
        value={state.lname}
        onChange={onChange}
        borderColor={borderColor}
        onBlur={changeBorderColor}
      />
      <Input
        placeholder="Email"
        name="email"
        type="email"
        value={state.email}
        onChange={onChange}
        borderColor={borderColor}
        onBlur={changeBorderColor}
      />

      <Button status={submitStatus} />
    </form>
  );
};

export default Form;
