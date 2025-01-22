import { ReactNode } from "react";

interface Prompt {
  //text: string;
  // children: string; // children element also valid
  children: ReactNode; // We need to import reactnode
  onClose: () => void;
}

function Alert({ children, onClose }: Prompt) {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
  // className="alert alert-primary" shows a blue colored alert
}

export default Alert;
