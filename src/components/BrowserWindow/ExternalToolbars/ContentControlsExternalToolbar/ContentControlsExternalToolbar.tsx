import { ChangeEvent, useState } from "react";
import { OnlyofficeEditor } from "@site/src/components/BrowserWindow";
import ConfigEditor from "./ConfigEditor/ConfigEditor";
import { Action, NamedControl } from "./ConfigEditor/types";
import styles from "./styles.module.css";

const ContentControlsExternalToolbar: React.FC<void> = () => {
  const [action, setAction] = useState<Action>("create");
  const [controls, setControls] = useState<NamedControl[]>([]);
  const [control, setControl] = useState<NamedControl>();

  const handleSelectControl = (e: ChangeEvent<HTMLSelectElement>): void => {
    const selectedControl = controls.find((control) => control.commonPr.id === parseInt(e.target.value));

    setControl(selectedControl);
    setAction("edit");
  };

  const handleAddControl = (): void => {
    setControls([...controls, control]);

    const newControl = structuredClone(control);
    newControl.commonPr.id = Date.now();

    setAction("edit");
    setControl(newControl);
  };

  const handleRemoveControl = (): void => {
    setControls([...controls.filter((filteredControl) => filteredControl.commonPr.id === control.commonPr.id)]);
  };

  const isAddButtonDisabled = (): boolean => {
    return action !== "create";
  };

  const isRemoveButtonDisabled = (): boolean => {
    return action !== "edit" || controls.length === 0;
  };

  return (
    <>
      <div id="contentControlsExternalToolbar" className={styles.contentControlsExternalToolbar} style={{ display: "none" }}>
        <select id="controlSelect" className={styles.contentControlsSelect} onChange={handleSelectControl} defaultValue="defaultValue">
          <option value="defaultValue" disabled>
            Choose content control
          </option>
        </select>
        <ConfigEditor control={control} action={action} handleSetControl={setControl} />
        <ul className={styles.buttons}>
          <li>
            <button id="addControlButton" disabled={isAddButtonDisabled()} onClick={handleAddControl}>
              ADD
            </button>
          </li>
          <li>
            <button id="removeControlButton" disabled={isRemoveButtonDisabled()} onClick={handleRemoveControl}>
              REMOVE
            </button>
          </li>
        </ul>
      </div>
      <OnlyofficeEditor
        fileType={"docx"}
        code={""}
        height="550px"
        externalScript={{
          beforeDocumentReady: `
          `,
          onDocumentReady: `
            String.prototype.replaceAll = function(search, replacement) {
	          	return this.replace(new RegExp(search, 'g'), replacement);
            };
            
            const contentControlsExternalToolbar = document.getElementById("contentControlsExternalToolbar");
            contentControlsExternalToolbar.removeAttribute('style');

            const controlSelect = document.getElementById("controlSelect");
            controlSelect.addEventListener("click", () => {
              controlSelect.innerHTML = '<option value="defaultValue" disabled selected>Choose content control</option>';
              connector.executeMethod("GetAllContentControls", null, (controls) => controls.forEach(control => {
                  const option = document.createElement("option");                
                  option.value = control.Id;
                  option.textContent = control.Id;

                  controlSelect.appendChild(option);
                })
              );
              connector.executeMethod("GetCurrentContentControl", null, (control) => console.log(control));
            });

            const removeControlButton = document.getElementById("removeControlButton");
            removeControlButton.addEventListener("click", () => {
              connector.executeMethod("GetCurrentContentControl", null, (internalId) => connector.executeMethod("RemoveContentControls", [[{InternalId: internalId}]]));
            });
          `,
          otherFunctional: `
          `,
        }}
      />
    </>
  );
};

export default ContentControlsExternalToolbar;
