import { useRef } from "react";

export default function Modal({ children, toggle }) {
  const modalRef = useRef();

  const handleToggle = (event) => {
    console.log(modalRef.current, event.target);
    if (event.target === modalRef.current) {
      toggle((prevToggleState) => !prevToggleState);
    }
  };
  // create room modal for general needs
  return (
    <div ref={modalRef} onClick={handleToggle} className="modal-page">
      <div className="modal-page__window">{children}</div>
    </div>
  );
}
