import React, { forwardRef, useRef, useState } from "react";
import { CodeBlock, ModalWrapper } from "@site/src/components/Modal";
import styles from "./styles.module.css";
import { code } from "./CodeBlock/types";

type Props = {
  isOpenState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  title: string;
  codes: code[];
};

const TryNowCodeModal = ({ isOpenState, title = "Open format for work in choosen mode", codes = [] }: Props) => {
  const [_, setIsOpen] = isOpenState;
  const codesRef = useRef<(HTMLDivElement | null)[]>(Array.from({ length: codes.length }));

  const handleCopy = async (index: number) => {
    const element = codesRef.current[index];
    if (!element) return;

    const clone = element.cloneNode(true) as HTMLElement;

    clone.querySelectorAll("br").forEach((br) => {
      br.replaceWith("\n");
    });

    await navigator.clipboard.writeText(clone.textContent || "").catch((e) => alert(`Failed to copy: ${e}`));
  };

  return (
    <ModalWrapper isOpenState={isOpenState}>
      <div className={styles.tryNowCodeModal}>
        <div>
          <span>{title}</span>
          <button type="button" onClick={() => setIsOpen(false)}>
            ×
          </button>
        </div>
        {codes.map((code, i) => (
          <div key={i}>
            <CodeBlock
              ref={(el) => {
                codesRef.current[i] = el;
              }}
              code={code}
            />
            <div className={styles.buttonContainer}>
              <button type="button" onClick={() => handleCopy(i)}>
                COPY CODE
              </button>
              <button type="button" onClick={() => setIsOpen(false)}>
                CLOSE
              </button>
            </div>
          </div>
        ))}
      </div>
    </ModalWrapper>
  );
};

export default TryNowCodeModal;
