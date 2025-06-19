import { useState } from "react";
import { OnlyofficeEditor } from "@site/src/components/BrowserWindow";
import ConfigEditor from "./ConfigEditor/ConfigEditor";
import { text, date, picture, combobox, checkbox } from "./ConfigEditor/types";
import styles from "./styles.module.css";

const ContentControlsExternalToolbar: React.FC<void> = () => {
  const [currentConfig, setCurrentConfig] = useState<text | date | picture | combobox | checkbox>();
  return (
    <>
      <select
        id="contentControlsSelect"
        className={styles.contentControlsSelect}
        style={{ display: "none" }}
        name="persons"
        defaultValue="defaultValue"
        required
        disabled
      >
        <option value="defaultValue" disabled>
          Choose content control
        </option>
      </select>
      <ConfigEditor controlIndex={0} />
      <ul className={styles.buttons} style={{ display: "none" }}>
        <li>
          <button id="addContentControl" disabled>
            ADD CONTENT CONTROL
          </button>
        </li>
      </ul>
      <OnlyofficeEditor
        fileType={"docx"}
        code={""}
        height="550px"
        externalScript={{
          beforeDocumentReady: `
            var contentControls = [];
          `,
          onDocumentReady: `
            String.prototype.replaceAll = function(search, replacement) {
	          	return this.replace(new RegExp(search, 'g'), replacement);
            };

            function createFormByObject(obj) {
              const container = document.createElement("div");
              container.className = "${styles.contentControlsDetails}";

              for (const [key, value] of Object.entries(obj)) {
                const label = document.createElement("label");
                label.textContent = key;
                label.htmlFor = key + "-input";

                const input = document.createElement("input");
                input.id = key + "-input";
                input.type = "text";
                input.value = JSON.stringify(value);
                input.readOnly = true;

                const field = document.createElement("div");
                field.className = "field";
                field.append(label, input);

                container.appendChild(field);
              }

              return container;
            }

            const placeholderPlainRich = {
              commonPr: {
                Id: Date.now(),
                Tag: "{Document1}",
                Lock: 1,
                Appearance: 1,
                Color: { R: 0, G: 255, B: 0 },
                PlaceHolderText: "Place holder example",
              },
              type: 1,
            };
            
            const configEditor = document.getElementById("configEditor");
            const addContentControl = document.getElementById("addContentControl");
            const contentControlsSelect = document.getElementById("contentControlsSelect");
            const buttons = document.querySelector(".${styles.buttons}");

            [configEditor, addContentControl, contentControlsSelect, buttons].forEach(element => {
              element.disabled = false;
              element.removeAttribute('style');
            });
                         
            addContentControl.onclick = () => {
              const newContentControl = { ...placeholderPlainRich.commonPr,  Id: Date.now() };

              connector.executeMethod("AddContentControl", [placeholderPlainRich.type, newContentControl]);
              contentControls.push(newContentControl);
            }    

            contentControlsSelect.onclick = () => {
              contentControlsSelect.innerHTML = '<option value="defaultValue" disabled selected>Choose content control</option>';
                  
              contentControls.forEach(contentControl => {
                const option = document.createElement("option");                
                option.value = contentControl.Id;
                option.textContent = contentControl.PlaceHolderText;
                contentControlsSelect.appendChild(option);
              });
            };
          `,
          otherFunctional: `
          `,
        }}
      />
    </>
  );
};

export default ContentControlsExternalToolbar;
