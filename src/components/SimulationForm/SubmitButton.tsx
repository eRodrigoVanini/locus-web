import styles from "./SubmitButton.module.css";

type SubmitButtonProps = {
  text: any;
};

function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <div>
      <button type="submit" className={styles.btn}>
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
