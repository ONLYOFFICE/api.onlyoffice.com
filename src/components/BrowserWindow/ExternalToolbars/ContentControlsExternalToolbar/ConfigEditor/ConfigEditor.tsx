import { useState } from "react";
import { text, date, picture, combobox, checkbox } from "./types";
import { TextInput, ColorInput, ArrayInput, SymbolInput, CheckboxInput } from "./Inputs";
import styles from "./styles.module.css";

type NonApiProps = {
  name: string;
};

type InitialControls = [
  text & NonApiProps,
  date & NonApiProps,
  picture & NonApiProps,
  combobox &
    NonApiProps & {
      list: { key: number }[];
    },
  checkbox & NonApiProps
];

type ConfigEditorProps = {
  controlIndex: number;
};

const ConfigEditor: React.FC<ConfigEditorProps> = ({ controlIndex }) => {
  const controls: InitialControls = [
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
        { key: Date.now(), display: "Item2_D", value: "Item2_V" },
        { key: Date.now() + 1, display: "Item1_D", value: "Item1_V" },
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

  const [currentControl, setCurrentControl] = useState(controls[controlIndex]);

  const handleSelectControl = (control: typeof currentControl): void => {
    const newControl = { ...control };
    newControl.commonPr.id = Date.now().toString().slice(-5);
    setCurrentControl({ ...newControl });
  };

  const setCurrentControlProperty = (newPropertyValue: any, property: string, attribute?: string): void => {
    setCurrentControl((prev) => ({
      ...prev,
      [property]: attribute ? { ...prev[property], [attribute]: newPropertyValue } : newPropertyValue,
    }));
  };

  const getFieldLabel = (originalString: string): string => {
    switch (originalString) {
      case "checkedSymbol":
        return "Checked symbol";
      case "uncheckedSymbol":
        return "Unchecked symbol";
      default:
        return originalString.toLowerCase();
    }
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
        {Object.entries(currentControl)
          .filter(([_, propertyValue]) => typeof propertyValue === "object")
          .map(([property, propertyValue]) =>
            property === "list" && Array.isArray(propertyValue) ? (
              <li key={`${currentControl.name}-${property}`} className={styles.field}>
                <label className={styles.listLabel} htmlFor={property}>
                  {property.toLowerCase()}
                </label>
                <ArrayInput
                  value={propertyValue}
                  setValue={(
                    newPropertyValue: {
                      display: string;
                      value: string;
                    }[]
                  ) => setCurrentControlProperty(newPropertyValue, property)}
                />
              </li>
            ) : (
              Object.entries(propertyValue).map(([attribute, attributeValue]) => (
                <li key={`${currentControl.name}-${property}-${attribute}`} className={styles.field}>
                  <label htmlFor={attribute}>{getFieldLabel(attribute)}</label>
                  {(attribute === "color" && (
                    <ColorInput
                      value={
                        attributeValue as {
                          r: number;
                          g: number;
                          b: number;
                        }
                      }
                      setValue={(newAttributeValue: typeof attributeValue) => setCurrentControlProperty(newAttributeValue, property, attribute)}
                    />
                  )) ||
                    ((attribute === "checkedSymbol" || attribute === "uncheckedSymbol") && (
                      <SymbolInput
                        value={attributeValue as string}
                        setValue={(newAttributeValue: typeof attributeValue) => setCurrentControlProperty(newAttributeValue, property, attribute)}
                      />
                    )) ||
                    (typeof attributeValue === "boolean" && (
                      <CheckboxInput
                        value={attributeValue}
                        setValue={(newAttributeValue: typeof attributeValue) => setCurrentControlProperty(newAttributeValue, property, attribute)}
                      />
                    )) ||
                    (typeof attributeValue === "string" && (
                      <TextInput
                        value={attributeValue}
                        setValue={(newAttributeValue: typeof attributeValue) => setCurrentControlProperty(newAttributeValue, property, attribute)}
                      />
                    ))}
                </li>
              ))
            )
          )}
      </ul>
      <textarea
        value={JSON.stringify(
          currentControl,
          (key, value) => {
            if (key !== "name" && key !== "key") {
              return value;
            }
          },
          2
        )}
        readOnly
      />
    </div>
  );
};

export default ConfigEditor;
