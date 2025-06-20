import styles from "./styles.module.css";

type Color = {
  r: number;
  g: number;
  b: number;
};

type ColorInputProps = {
  value: Color;
  setValue: (newValue: Color) => void;
};

const ColorInput: React.FC<ColorInputProps> = ({ value, setValue }) => {
  const rgbToHex = ({ r, g, b }: Color) => {
    return `#${[r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
  };

  const handleColorInputChange = (e) => {
    const hex = e.target.value;
    setValue({
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16),
    });
  };

  return <input className={styles.colorInput} type="color" value={rgbToHex(value)} onChange={handleColorInputChange} />;
};

export default ColorInput;
