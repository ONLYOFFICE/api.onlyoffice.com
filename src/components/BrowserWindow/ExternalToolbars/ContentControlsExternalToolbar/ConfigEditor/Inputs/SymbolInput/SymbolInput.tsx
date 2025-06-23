import styles from "./styles.module.css";

type SymbolInputProps = {
  value: string;
  setValue: (newValue: string) => void;
};

const SymbolInput: React.FC<SymbolInputProps> = ({ value, setValue }) => {
  const parsedValue = parseInt(value, 10);

  if (isNaN(parsedValue) || parsedValue < 0) {
    setValue("0");
  } else if (parsedValue > 10000) {
    setValue("10000");
  }

  return (
    <div className={styles.symbolInput}>
      <input className={styles.textInput} type="text" value={value} onChange={(e) => setValue(parseInt(e.target.value, 10).toString())} />
      <span className={styles.symbol}>{String.fromCharCode(parsedValue)}</span>
    </div>
  );
};

export default SymbolInput;
