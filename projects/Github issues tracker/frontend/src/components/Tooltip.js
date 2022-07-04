import { useState } from "react";

const Tooltip = ({ children, text, doNotRender, ...rest }) => {
  const [show, setShow] = useState(false);

  if (doNotRender) return <>{children}</>;

  return (
    <div className="tooltip-container">
      <div className={show ? "tooltip-box visible" : "tooltip-box"}>
        {typeof text === "function" ? text() : text}
        <span className="tooltip-arrow" />
      </div>
      <div
        className="el-holder"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;
