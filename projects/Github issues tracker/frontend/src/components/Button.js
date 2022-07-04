const statusMap = {
  idle: "",
  success: "#028a0f",
  failed: "#b90e0a",
  pending: "#F29339"
};

const Button = ({ status }) => {
  const bgColor = statusMap[status] || "";
  return (
    <button style={{ backgroundColor: bgColor }} type="submit">
      {status === "pending" ? (
        <div className="spinner">
          <div></div>
        </div>
      ) : (
        "Submit"
      )}
    </button>
  );
};

export default Button;
