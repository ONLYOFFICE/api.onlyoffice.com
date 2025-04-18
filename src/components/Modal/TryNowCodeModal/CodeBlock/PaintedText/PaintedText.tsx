import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  red?: boolean;
  black?: boolean;
  children: React.ReactNode;
};

const PaintedText = ({ red = false, black = false, children }: Props) => {
  if (red && black) {
    console.warn(`Choose only one of "black" or "red" color for the\n${children}`);
  }

  return (
    <span
      className={clsx({
        [styles.red]: red && !black,
        [styles.black]: black && !red,
      })}
    >
      {children}
    </span>
  );
};

export default PaintedText;
