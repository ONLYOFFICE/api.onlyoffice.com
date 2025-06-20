import { useState } from "react";
import styles from "./styles.module.css";

type CheckboxInputProps = {
  id: string;
  checked?: boolean;
};

const CheckboxInput: React.FC<CheckboxInputProps> = ({ id, checked = false }) => {
  const [value, setValue] = useState<boolean>(checked);
  return (
    <input
      className={styles.checkboxInput}
      id={id}
      type="checkbox"
      checked={value}
      onChange={(e) => {
        setValue(e.target.checked);
      }}
    />
  );
};

export default CheckboxInput;
