import styles from "./styles.module.css";

type CheckboxInputProps = {
  value: boolean;
  setValue: (newValue: boolean) => void;
};

const CheckboxInput: React.FC<CheckboxInputProps> = ({ value, setValue }) => {
  return (
    <input
      className={styles.checkboxInput}
      type="checkbox"
      checked={value}
      onChange={(e) => {
        setValue(e.target.checked);
      }}
    />
  );
};

export default CheckboxInput;
