import styles from "./styles.module.css";

type TextInputProps = {
  value: string;
  setValue: (newValue: string) => void;
};

const TextInput: React.FC<TextInputProps> = ({ value, setValue }) => {
  return (
    <input
      className={styles.textInput}
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default TextInput;
