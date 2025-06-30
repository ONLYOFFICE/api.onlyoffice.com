import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TextControl, DateControl, PictureControl, ComboboxControl, CheckboxControl, Action, Control, NamedControl, NonApiProps } from "./types";
import { TextInput, ColorInput, ArrayInput, SymbolInput, CheckboxInput } from "./Inputs";
import styles from "./styles.module.css";
import { useDebounce } from "./hooks";

type InitialControls = [
  TextControl & NonApiProps,
  DateControl & NonApiProps,
  PictureControl & NonApiProps,
  ComboboxControl &
    NonApiProps & {
      list: { key: number }[];
    },
  CheckboxControl & NonApiProps
];

type ConfigEditorProps = {
  action: Action;
  control: NamedControl;
  handleSetControl: Dispatch<SetStateAction<NamedControl>>;
};

const ConfigEditor: React.FC<ConfigEditorProps> = ({ action, control, handleSetControl }) => {
  const controls: InitialControls = [
    {
      name: "Plain text/Rich text",
      commonPr: {
        id: Date.now(),
        tag: "{Document1}",
        lock: 1,
        appearance: 1,
        color: {
          r: 255,
          g: 255,
          b: 0,
        },
        placeHolderText: "Placeholder example",
      },
      type: 1,
    },
    {
      name: "Date",
      commonPr: {
        id: Date.now(),
        tag: "{Document2}",
        lock: 3,
      },
      datePickerPr: {
        format: "DD MMMM YYYY",
        date: "For example always current date",
      },
    },
    {
      name: "Picture",
      commonPr: {
        id: Date.now(),
        tag: "{Document3}",
        lock: 3,
        appearance: 1,
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
        id: Date.now(),
        tag: "{Document4}",
        lock: 3,
        placeHolderText: "Placeholder example",
      },
      list: [
        { key: Date.now(), display: "Item2_D", value: "Item2_V" },
        { key: Date.now() + 1, display: "Item1_D", value: "Item1_V" },
      ],
      type: 1,
    },
    {
      name: "Checkbox",
      commonPr: {
        id: Date.now(),
        tag: "{Document5}",
        lock: 3,
      },
      checkBoxPr: {
        checked: false,
        checkedSymbol: 9746,
        uncheckedSymbol: 9744,
      },
    },
  ];

  useEffect(() => {
    if (!control) {
      handleSetControl(controls[0]);
    }
  }, [control, handleSetControl]);

  const [currentControl, setCurrentControl] = useState(control || controls[0]);

  const handleSelectControl = (selectedControl: typeof currentControl): void => {
    const newControl = { ...selectedControl };
    newControl.commonPr.id = Date.now();
    setCurrentControl({ ...newControl });
  };

  const isSelectButtonDisabled = (): boolean => {
    return action === "edit";
  };

  const setCurrentControlProperty = (newPropertyValue: any, property: string, attribute?: string): void => {
    setCurrentControl((prev) => ({
      ...prev,
      [property]: attribute
        ? {
            ...prev[property],
            [attribute]: newPropertyValue,
          }
        : newPropertyValue,
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

  const { id, ...debouncableCommonProperties } = currentControl.commonPr;
  const debouncableControlProperties = { ...currentControl, commonPr: { ...debouncableCommonProperties } };

  useEffect(() => {
    const stringifyProperty = (property: object): string => {
      const capitalizeKeys = (obj: any): any => {
        if (typeof obj !== "object" || obj === null) return obj;

        if (Array.isArray(obj)) {
          return obj.map(capitalizeKeys);
        }

        const newObj: Record<string, any> = {};
        for (const [key, value] of Object.entries(obj)) {
          const newKey = key.charAt(0).toUpperCase() + key.slice(1);
          newObj[newKey] = capitalizeKeys(value);
        }
        return newObj;
      };

      return JSON.stringify(capitalizeKeys(property), null, 4);
    };

    const getStringifiedMethodParameters = (): string => {
      const name: string = currentControl.name;
      const commonPr: string = stringifyProperty(currentControl.commonPr);

      switch (name) {
        case "Plain text/Rich text": {
          const type = (currentControl as TextControl).type;
          return `"AddContentControl", [
            ${type},
            ${commonPr}
          ]`;
        }
        case "Date": {
          const datePickerPr = stringifyProperty((currentControl as DateControl).datePickerPr);
          return `"AddContentControlDatePicker", [
            ${datePickerPr},
            ${commonPr}
          ]`;
        }
        case "Picture": {
          return `"AddContentControlPicture", [
            ${commonPr}
          ]`;
        }
        case "Combobox/Dropdown list": {
          const type = (currentControl as ComboboxControl).type;
          const list = stringifyProperty((currentControl as ComboboxControl).list);
          return `"AddContentControlList", [
            ${type},
            ${list},
            ${commonPr}
          ]`;
        }
        case "Checkbox": {
          const checkBoxPr = stringifyProperty((currentControl as CheckboxControl).checkBoxPr);
          return `"AddContentControlCheckBox", [
            ${checkBoxPr}, 
            ${commonPr}
          ]`;
        }
      }
    };

    const addControlButtonScript = document.createElement("script");
    addControlButtonScript.id = "addControlButtonScript";
    addControlButtonScript.type = "text/javascript";
    addControlButtonScript.innerHTML = `
      document.getElementById("addControlButton").addEventListener('click', function(e) {
        connector.executeMethod(${getStringifiedMethodParameters()});
      });
    `;
    document.body.appendChild(addControlButtonScript);

    return () => {
      const button = document.getElementById("addControlButton");
      button.parentNode?.replaceChild(button.cloneNode(true), button);

      document.getElementById("addControlButtonScript").remove();
    };
  }, [useDebounce(debouncableControlProperties, 100)]);

  return (
    <div className={styles.configEditor}>
      <ul className={styles.controls}>
        {controls.map((control) => (
          <li key={control.name} className={styles.control}>
            {control.name === currentControl.name ? (
              <button className={`${styles.selectButton} ${styles.selected}`}>{control.name}</button>
            ) : (
              <button className={`${styles.selectButton}`} onClick={() => handleSelectControl(control)} disabled={isSelectButtonDisabled()}>
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
                    ((typeof attributeValue === "string" || attribute === "id" || attribute === "lock" || attribute === "appearance") && (
                      <TextInput
                        value={attributeValue as string | number}
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
          4
        )}
        readOnly
      />
    </div>
  );
};

export default ConfigEditor;
