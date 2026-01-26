import styles from "./Input.module.css";

type InputProps = {
  text: string;
  name: string;
  value: string;
  disabled?: boolean;
};

function Input({ text, name, value, disabled }: InputProps) {
  return (
    <div className={styles.Input}>
      <label htmlFor={name}>{text}:</label>
      <input id={name} name={name} value={value} disabled={disabled} />
    </div>
  );
}

export default Input;
