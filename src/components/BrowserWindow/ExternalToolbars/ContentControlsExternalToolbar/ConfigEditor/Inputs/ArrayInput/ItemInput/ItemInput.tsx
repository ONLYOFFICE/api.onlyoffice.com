import { TextInput } from "../..";
import styles from "./styles.module.css";

type ItemInputProps = {
  item: {
    key: number;
    display: string;
    value: string;
  };
  setDisplay: (value: string) => void;
  setValue: (value: string) => void;
  removeItem: (key: number) => void;
};

const ItemInput: React.FC<ItemInputProps> = ({ item, setDisplay, setValue, removeItem }) => {
  const { key, display, value } = item;

  return (
    <div className={styles.itemInput}>
      <ul className={styles.inputs}>
        <li>
          <TextInput placeholder="Display" value={display} setValue={setDisplay} />
        </li>
        <li>
          <TextInput placeholder="Value" value={value} setValue={setValue} />
        </li>
      </ul>
      <ul className={styles.controls}>
        <li>
          <button className={styles.removeElementButton} onClick={() => removeItem(key)}>
            -
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ItemInput;
