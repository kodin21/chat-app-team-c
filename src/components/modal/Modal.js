import { useRef } from "react";

export default function Modal({ children, toggle }) {
  const modalRef = useRef();

  const handleToggle = (event) => {
    console.log(modalRef.current, event.target);
    if (event.target === modalRef.current) {
      toggle((prevToggleState) => !prevToggleState);
    }
  };

  return (
    <div ref={modalRef} onClick={handleToggle} className="modal-page">
      <div className="modal-page__window">{children}</div>
    </div>
  );
}
