export default function Editable({ validatedValue, ...props }) {
  const onInput = (e) => (e.target.textContent = e.target.textContent);
  const onPaste = (e) =>
    setTimeout(() => (e.target.innerText = e.target.innerText), 0);

  return (
    <div
      onInput={onInput}
      onPaste={onPaste}
      contentEditable="true"
      suppressContentEditableWarning
      dangerouslySetInnerHTML={{ __html: validatedValue }}
      {...props}
    ></div>
  );
}
