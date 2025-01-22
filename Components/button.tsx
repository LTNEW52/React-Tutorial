interface Prompt {
  children: string;
  color: "primary" | "secondary" | "dark";
  clicked: () => void;
}

function Button({ children, clicked, color }: Prompt) {
  return (
    <button className={"btn btn-" + color} onClick={clicked}>
      {children}
    </button>
  );
}

export default Button;
