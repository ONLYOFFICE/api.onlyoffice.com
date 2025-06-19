import { useState } from "react";
import styles from "./styles.module.css";

type Color = {
  r: number;
  g: number;
  b: number;
};

type ColorInputProps = {
  id: string;
  color?: Color;
};

const ColorInput: React.FC<ColorInputProps> = ({ id, color = { r: 255, g: 0, b: 0 } }) => {
  const [value, setValue] = useState<Color>(color);

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

  return <input className={styles.colorInput} id={id} type="color" value={rgbToHex({ r: value.r, g: value.g, b: value.b })} onChange={handleColorInputChange} />;
};

export default ColorInput;
