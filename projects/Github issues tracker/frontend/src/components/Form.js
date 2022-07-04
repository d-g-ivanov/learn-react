// hooks
import { useContext, useState, useEffect } from "react";
import useColor from "../utils/useColor";

// components
import Input from "./Input";
import Button from "./Button";

// others
import { GithubIssuesContext } from "../store/GithubIssuesContext";

// the component
const Form = () => {
  const { state, dispatch } = useContext(GithubIssuesContext);
  const [error, setError] = useState(null);
  const [formState, setFormState] = useState({
    user: state.user,
    repo: state.repo
  });

  // handle submit
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!formState.user || !formState.repo)
      return setError("All fields are required");

    setError(null);

    dispatch({
      type: "UPDATE",
      payload: { ...formState }
    });
  };

  // handle change
  const onChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  // handle blur
  const [borderColor, changeBorderColor] = useColor();

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          placeholder="User"
          name="user"
          borderColor={borderColor}
          onBlur={changeBorderColor}
          // bind
          value={formState.user}
          onChange={onChange}
        />
        <Input
          placeholder="Repo"
          name="repo"
          borderColor={borderColor}
          onBlur={changeBorderColor}
          // bind
          value={formState.repo}
          onChange={onChange}
        />

        <Button status={null} />
      </form>
      {error && <p className="error">{error}</p>}
      {!error && !formState.user && !formState.repo && (
        <p>
          Enter a valid GitHub Username and Repository in above form to see all
          open issues.
        </p>
      )}
    </>
  );
};

export default Form;
