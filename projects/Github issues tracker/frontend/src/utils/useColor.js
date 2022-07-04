// hooks
import { useState } from "react";

// others
import randomColor from "./randomColor";

const useColor = () => {
  const [color, setColor] = useState(randomColor());

  const changeColor = () => {
    setColor(randomColor());
  };

  return [color, changeColor];
};

export default useColor;
