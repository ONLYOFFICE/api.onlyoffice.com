import { createPortal } from "react-dom";
import clsx from "clsx";
import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  isOpenState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  isBackgroundHidden?: boolean;
};

const ModalWrapper = ({ children, isOpenState, isBackgroundHidden = false }: Props) => {
  const [isOpen, setIsOpen] = isOpenState;

  return isOpen
    ? createPortal(
        <div className={styles.modalWrapper}>
          <div className={clsx({ [styles.hidden]: isBackgroundHidden })} onClick={() => setIsOpen(false)} />
          <div>{children}</div>
        </div>,
        document.getElementById("__docusaurus")
      )
    : null;
};

export default ModalWrapper;
