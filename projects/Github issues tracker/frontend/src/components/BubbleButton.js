import { useState } from "react";

import Bubble from "./Bubble";
import Tooltip from "./Tooltip";

import fetch from "../services/fetchService";

// helper
const getText = (isLoading, error, comments) => {
  if (isLoading) return "Loading...";

  if (error) return error;

  if (comments.length) return `Comments from:\n\n ${comments.join(", ")}`;

  return "Click to see who's commenting.";
};

const BubbleButton = ({ num, url }) => {
  const [commented, setCommented] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClick = async () => {
    if (commented.length || num <= 0) return;

    try {
      setIsLoading(true);
      const data = await fetch(url);
      const comments = [...new Set(data.map((c) => c.user.login))];
      setCommented(comments);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button onClick={onClick} disabled={num === 0}>
      <Tooltip
        doNotRender={num === 0}
        text={() => getText(isLoading, error, commented)}
      >
        {num}
        <Bubble />
      </Tooltip>
    </button>
  );
};

export default BubbleButton;
