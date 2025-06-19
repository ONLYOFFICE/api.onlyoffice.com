import { useState } from "react";
import styles from "./styles.module.css";

type CheckboxInputProps = {
  id: string;
  checked?: boolean;
};

const CheckboxInput: React.FC<CheckboxInputProps> = ({ id, checked = false }) => {
  const [value, setValue] = useState<boolean>(checked);
  return (
    <>
      <input
        className={styles.checkboxInput}
        id={id}
        type="radio"
        checked={value}
        onChange={(e) => {
          setValue(e.target.checked);
        }}
      />
      <div className={styles.checkboxInputCustom} />
    </>
  );
};

export default CheckboxInput;
