import styles from "~/styles/errorMessage.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

function ErrorMessage({ children }) {
  return <p>{children}</p>;
}

export default ErrorMessage;
