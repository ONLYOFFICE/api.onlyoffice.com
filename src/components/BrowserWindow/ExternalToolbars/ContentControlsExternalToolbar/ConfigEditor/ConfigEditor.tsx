import { useState } from "react";
import { text, date, picture, combobox, checkbox } from "./types";
import { TextInput, ColorInput, CheckboxInput } from "./Inputs";
import styles from "./styles.module.css";

type ConfigEditorProps = {
  controlIndex: number;
};

const ConfigEditor: React.FC<ConfigEditorProps> = ({ controlIndex }) => {
  const controls: [text, date, picture, combobox, checkbox] = [
    {
      name: "Plain text/Rich text",
      commonPr: {
        id: Date.now().toString().slice(-5),
        tag: "{Document1}",
        lock: "1",
        appearence: true,
        color: {
          r: 255,
          g: 0,
          b: 0,
        },
        placeHolder: "Placeholder example",
      },
      type: "1",
    },
    {
      name: "Date",
      commonPr: {
        id: Date.now().toString().slice(-5),
        tag: "{Document2}",
        lock: "3",
      },
      datePickerPr: {
        format: "DD MMMM YYYY",
        date: "For example always current date",
      },
    },
    {
      name: "Picture",
      commonPr: {
        id: Date.now().toString().slice(-5),
        tag: "{Document3}",
        lock: "3",
        appearance: true,
        color: {
          r: 255,
          g: 0,
          b: 0,
        },
      },
    },
    {
      name: "Combobox/Dropdown list",
      commonPr: {
        id: Date.now().toString().slice(-5),
        tag: "{Document4}",
        lock: "3",
        placeHolder: "Placeholder example",
      },
      list: [
        { display: "Item1_D", value: "Item1_V" },
        { display: "Item2_D", value: "Item2_V" },
      ],
      type: "1",
    },
    {
      name: "Checkbox",
      commonPr: {
        id: Date.now().toString().slice(-5),
        tag: "{Document5}",
        lock: "3",
      },
      checkBoxPr: {
        checked: false,
        checkedSymbol: "9746",
        uncheckedSymbol: "9744",
      },
    },
  ];

  const [currentControl, setCurrentControl] = useState<text | date | picture | combobox | checkbox>(controls[controlIndex]);

  const handleSelectControl = (control: typeof currentControl): void => {
    const newControl = { ...control };
    newControl.commonPr.id = Date.now().toString().slice(-5);
    setCurrentControl({ ...newControl });
  };

  return (
    <div id="configEditor" className={styles.configEditor} style={{ display: "none" }}>
      <ul className={styles.controls}>
        {controls.map((control) => (
          <li key={control.name} className={styles.control}>
            {control.name === currentControl.name ? (
              <button className={`${styles.selectButton} ${styles.selected}`}>{control.name}</button>
            ) : (
              <button className={`${styles.selectButton}`} onClick={() => handleSelectControl(control)}>
                {control.name}
              </button>
            )}
          </li>
        ))}
      </ul>
      <ul className={styles.fields}>
        {Object.values(currentControl)
          .filter((propertyValue) => typeof propertyValue === "object")
          .map((propertyValue) =>
            Object.entries(propertyValue).map(([attribute, attributeValue]) => (
              <li key={attribute + attributeValue} className={styles.field}>
                <label htmlFor={attribute}>{attribute.toLowerCase()}</label>
                {(attribute === "color" && <ColorInput id={attribute} />) ||
                  (typeof attributeValue === "boolean" && <CheckboxInput id={attribute} />) ||
                  (typeof attributeValue === "string" && <TextInput id={attribute} initialValue={attributeValue} />)}
              </li>
            ))
          )}
      </ul>
    </div>
  );
};

export default ConfigEditor;
