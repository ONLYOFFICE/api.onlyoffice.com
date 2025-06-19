import { useState } from "react";
import styles from "./styles.module.css";

type TextInputProps = {
  id: string;
  initialValue?: string;
};

const TextInput: React.FC<TextInputProps> = ({ id, initialValue = "" }) => {
  const [value, setValue] = useState<string>(initialValue);
  return (
    <input
      className={styles.textInput}
      id={id}
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default TextInput;
