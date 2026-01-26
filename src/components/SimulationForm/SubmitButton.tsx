import styles from "./Submit.module.css";

type SubmitButtonProps = {
  text: string;
};

function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <div>
      <button
        type="button"
        className={styles.btn}
      >
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
