const statusMap = {
  idle: "",
  success: "#028a0f",
  failed: "#b90e0a",
  pending: "#F29339"
};

const Button = ({ status, text, onClick }) => {
  const bgColor = statusMap[status] || "";
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor }}
      type="submit"
    >
      {status === "pending" ? (
        <div className="lds-circle">
          <div></div>
        </div>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
