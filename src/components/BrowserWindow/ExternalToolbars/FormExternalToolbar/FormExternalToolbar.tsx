import { OnlyofficeEditor } from "@site/src/components/BrowserWindow";
import personsData from "./persons.json";
import styles from "./styles.module.css";

const persons: string = JSON.stringify(personsData);

const FormExternalToolbar: React.FC<void> = () => {
  return (
    <>
      <select id={styles.persons} name="persons" defaultValue={"defaultValue"} required disabled>
        <option value="defaultValue" disabled>
          Choose Example
        </option>
        <option value="75061">Isabella Robinson</option>
        <option value="11225">Emma Smith</option>
        <option value="10965">Emily Williams</option>
        <option value="76116">Sophia Brown</option>
        <option value="89032">Olivia Davis</option>
        <option value="SW7 2BX">Abigail Jones</option>
        <option value="94250">Davis Hannah</option>
        <option value="84622">Samantha Smith</option>
        <option value="72100">Mia Davis</option>
        <option value="M13 0WG">Madison Taylor</option>
        <option value="L1 9AS">Jacob Brown</option>
        <option value="63069">Jason Davis</option>
        <option value="31300">Michael Williams</option>
        <option value="90071">Christopher Johnson</option>
        <option value="90441">Ethan Taylor</option>
        <option value="34500">Daniel Wright</option>
        <option value="20535">Matthew Jones</option>
        <option value="19147">Andrew Wilson</option>
        <option value="RM1 3ER">William Robinson</option>
        <option value="34300">Joshua Johnson</option>
      </select>
      <div id={styles.controlsBlock} className={styles["docbuilder-script"]} hidden>
        <div className={styles["left-half"]}></div>
        <div className={styles["right-half"]}></div>
      </div>
      <OnlyofficeEditor
        fileType={"pdf"}
        code={""}
        height="550px"
        templateUrl="https://static.onlyoffice.com/assets/docs/samples/withtags.pdf"
        isDemo
        config={{
          document: {
            permissions: {
              edit: false,
              fillForms: true,
            },
          },
        }}
        externalScript={{
          beforeDocumentReady: `            
            const contentControls = [];
          `,
          onDocumentReady: `
            connector.executeMethod("GetAllContentControls", null, function (data) {
              setTimeout(function () { 
                for (let i = 0; i < data.length; i++) {
                  switch (data[i].Tag) {
                    case "Male":
                      data[i].GroupKey = "Sex";
                      data[i].Type = "radio";
                      break;
                    case "Female":
                      data[i].GroupKey = "Sex";
                      data[i].Type = "radio";
                      break;
                    default:
                      data[i].Type = "input";
                  }
                  connector.executeMethod("GetFormValue", [data[i]["InternalId"]], function (value) {
                    data[i].Value === value ? value : "";
                    if (data.length - 1 === i) {
                      contentControls.push(...preparingArrayContentControls(data));
                      renderForm();
                    }
                  });
                }
              }, 0);
              });
            connector.attachEvent("onChangeContentControl", onChangeContentControl);
          `,
          otherFunctional: `
            document.getElementById('${styles.persons}').addEventListener('change', function(e) {
              const person = ${persons}.find(e => e["PostalCode"] === this.value);
              for (const key in person) {
                let value = person[key];
                //if (key === "Sex") {
                //  const sexKey = value === "Male" ? "Male" : "Female";
                //  value = "true";
                //  setFormValue(sexKey, value);
                //} else {
                if (key !== "Sex") {
                  setFormValue(key, value);
                }
              }

              function setFormValue(tag, value) {
                connector.executeMethod(
                  "GetFormsByTag",
                  [tag],
                  function(forms) {
                    connector.executeMethod(
                      "SetFormValue",
                      [forms[0]["InternalId"], value],
                      null
                    );
                  }
                );
              }
            });

            function renderForm() {
              const controlsBlockLeftHalf = document.querySelector("#${styles.controlsBlock} .${styles["left-half"]}");
              const controlsBlockRightHalf = document.querySelector("#${styles.controlsBlock} .${styles["right-half"]}");
              
              if (contentControls.length !== 0) {
                document.getElementById("${styles.controlsBlock}").removeAttribute("hidden");
                document.getElementById("${styles.persons}").removeAttribute("disabled");
              }
                
              contentControls.forEach((element, index) => {
                const targetElement = (index % 2) !== 0 ? controlsBlockRightHalf : controlsBlockLeftHalf;
                switch (element.Type) {
                  case "input":
                    const label = document.createElement("label");
                    label.textContent = element["Tag"].replace(/([a-z])([A-Z])/g, "$1 $2");
                    targetElement.appendChild(label);
                    const input = document.createElement("input");
                    input.id = element["InternalId"];
                    input.value = element["Value"] || "";
                    input.className = "${styles["content-control-input"]}";
                    targetElement.appendChild(input);
                    break;
                  case "radio":
                    const radioLabel = document.createElement("label");
                    radioLabel.textContent = element["Tag"].replace(/([a-z])([A-Z])/g, "$1 $2");
                    targetElement.appendChild(radioLabel);
                    element["Value"].forEach(option => {
                      const radioInput = document.createElement("input");
                      radioInput.type = "radio";
                      radioInput.id = option["InternalId"];
                      radioInput.checked = option["checked"] === true;
                      radioInput.name = element["Tag"];
                      radioInput.className = "content-control-radio";
                      targetElement.appendChild(radioInput);
                      const optionLabel = document.createElement("label");
                      optionLabel.textContent = option["Tag"].replace(/([a-z])([A-Z])/g, "$1 $2");
                      optionLabel.htmlFor = option["Tag"];
                      optionLabel.className = "label-radio";
                      targetElement.appendChild(optionLabel);
                    });
                    break;
                }
              });
              document.querySelectorAll(".${styles["content-control-input"]}").forEach(input => {
                input.addEventListener("keyup", updateContent);
              });
              document.querySelectorAll(".${styles["content-control-radio"]}").forEach(radio => {
                radio.addEventListener("change", updateContent);
              });
            }

            function updateContent(e) {
              const id = e.target.id;
              const value = e.target.classList.contains("${styles["content-control-radio"]}") ? true : e.target.value;
              connector.executeMethod(
                "SetFormValue",
                [id, value],
                null
              );
            }

            function onChangeContentControl(e) {
              connector.executeMethod("GetFormValue", [e["InternalId"]], function(value) {
                const element = document.getElementById(e["InternalId"]);                
                if (element && element.type !== "checkbox") {
                  if (element.classList.contains("")) {
                    element.checked = value;
                  } else {
                    element.value = value || "";
                  }
                }
              });
            }

            function preparingArrayContentControls(data) {
              data = data.filter(function(element) {
                return element["Tag"] !== "";
              });

              const groupsRadioControls = data
                .filter(contentControl => contentControl["Tag"] !== "" && contentControl["Type"] == "radio")
                .reduce((r, a) => {
                  r[a["GroupKey"]] = r[a["GroupKey"]] || [];
                  r[a["GroupKey"]].push({ 
                    Tag: a["Tag"], 
                    checked: a["Value"], 
                    InternalId: a["InternalId"] 
                  });
                  return r;
                }, {});

                for (const [key, value] of Object.entries(groupsRadioControls)) {
                  const index = [];
                  let first = true;
                  for (let i = 0; i < data.length; i++) {
                    if (data[i]["GroupKey"] && data[i]["GroupKey"] == key) {
                      index.push(i);
                    }
                  }
                  for (let i = 0; i < index.length; i++) {
                    if (first) {
                      data[index[i]]["Tag"] = key;
                      data[index[i]]["Value"] = value;
                      first = false;
                    } else {
                      data.splice(index[i], 1);
                    }
                  }
                }

              return data;
            }
          `,
        }}
      />
    </>
  );
};

export default FormExternalToolbar;
