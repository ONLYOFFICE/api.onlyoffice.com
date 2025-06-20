import ItemInput from "./ItemInput/ItemInput";
import styles from "./styles.module.css";

type ArrayElement = {
  key: number;
  display: string;
  value: string;
};

type ArrayInputProps = {
  value: ArrayElement[];
  setValue: (newValue: ArrayElement[]) => void;
};

const ArrayInput: React.FC<ArrayInputProps> = ({ value, setValue }) => {
  const keyedArray: ArrayElement[] = value.map((item) => ({
    key: Date.now(),
    ...item,
  }));

  const handleAddElementButton = (): void => {
    setValue([
      {
        key: Date.now(),
        display: `Item-D`,
        value: `Item-V`,
      },
      ...value,
    ]);
  };

  const handleRemoveElementButton = (key: number): void => {
    setValue([...keyedArray.filter((item) => item.key !== key)]);
  };

  const setItemAttribute = (key: number, attribute: string, value: string): void => {
    const newArray = [...keyedArray];
    const index = newArray.findIndex((item) => item.key === key);

    newArray[index] = {
      ...newArray[index],
      [attribute]: value,
    };

    setValue(newArray);
  };

  return (
    <div className={styles.arrayInput}>
      <div className={styles.elements}>
        Elements
        <button className={styles.addElementButton} onClick={handleAddElementButton}>
          +
        </button>
      </div>
      <ul>
        {keyedArray.map((item) => (
          <li key={item.key}>
            <ItemInput
              item={item}
              setDisplay={(newDisplay: string) => setItemAttribute(item.key, "display", newDisplay)}
              setValue={(newValue: string) => setItemAttribute(item.key, "value", newValue)}
              removeItem={handleRemoveElementButton}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayInput;
