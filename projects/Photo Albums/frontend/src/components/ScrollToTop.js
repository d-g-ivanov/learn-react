const ScrollToTop = () => {
  const onClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <button onClick={onClick} className="scroll-top">
      &#8613;
    </button>
  );
};

export default ScrollToTop;
