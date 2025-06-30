import styles from "./styles.module.css";

type TextInputProps = {
  placeholder?: string;
  value: string | number;
  setValue: (newValue: string) => void;
};

const TextInput: React.FC<TextInputProps> = ({ placeholder, value, setValue }) => {
  return (
    <input
      className={styles.textInput}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default TextInput;
