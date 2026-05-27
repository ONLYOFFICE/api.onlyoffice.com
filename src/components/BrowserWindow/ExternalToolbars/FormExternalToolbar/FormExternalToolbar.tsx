import { OnlyofficeEditor } from "@site/src/components/BrowserWindow";
import personsData from "./persons.json";
import styles from "./styles.module.css";

const persons: string = JSON.stringify(personsData);

const FormExternalToolbar: React.FC = () => {
  return (
    <>
      <div className={styles["demo-section"]}>

        <div className={styles["demo-layout"]}>
          <div className={styles["form-panel"]}>
            <div className={styles["panel-header"]}>
              <span className={styles["panel-title"]}>FORM FIELDS</span>
            </div>
            <div className={styles["panel-body"]}>
              <label className={styles["select-label"]}>Fill from template</label>
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
              <div id={styles.controlsBlock} className={styles["controls-grid"]} hidden />
            </div>
          </div>
          <div className={styles["editor-column"]}>
            <OnlyofficeEditor
              fileType={"pdf"}
              code={""}
              height="100%"
              templateUrl="https://static.onlyoffice.com/assets/docs/samples/withtags.pdf"
              isDemo
              config={{
                document: {
                  permissions: {
                    edit: false,
                    fillForms: true,
                  },
                },
                editorConfig: { customization: { compactToolbar: true } },
              }}
              externalScript={{
                beforeDocumentReady: `
                  let contentControls = [];
                  const settingFormIds = new Map();
                `,
                onDocumentReady: `
                  connector.executeMethod("GetAllContentControls", null, (data) => {
                    for (let i = 0; i < data.length; i++) {
                      switch (data[i].Tag) {
                        case "Male":
                        case "Female":
                          data[i].GroupKey = "Sex";
                          data[i].Type = "radio";
                          break;
                        default:
                          data[i].Type = "input";
                      }
                      connector.executeMethod("GetFormValue", [data[i]["InternalId"]], (value) => {
                        data[i].Value = value || "";
                        if (i === data.length - 1) {
                          contentControls.push(...preparingArrayContentControls(data));
                          renderForm();
                        }
                      });
                    }
                  });
                  connector.attachEvent("onChangeContentControl", onChangeContentControl);
                `,
                otherFunctional: `
                  document.getElementById("${styles.persons}").addEventListener("change", (e) => {
                    const person = ${persons}.find((p) => p["PostalCode"] === e.target.value);
                    for (const key in person) {
                      const value = person[key];
                      if (key === "Sex") {
                        setFormValue(value, true);
                      } else {
                        setFormValue(key, value);
                      }
                    }
                  });

                  const setFormValue = (tag, value) => {
                    connector.executeMethod("GetFormsByTag", [tag], (forms) => {
                      const id = forms[0]["InternalId"];
                      settingFormIds.set(id, (settingFormIds.get(id) || 0) + 1);
                      connector.executeMethod("SetFormValue", [id, value], () => {
                        settingFormIds.set(id, settingFormIds.get(id) - 1);
                        onChangeContentControl({ InternalId: id, FormValue: value });
                      });
                    });
                  };

                  const renderForm = () => {
                    const container = document.getElementById("${styles.controlsBlock}");

                    if (contentControls.length !== 0) {
                      container.removeAttribute("hidden");
                      document.getElementById("${styles.persons}").removeAttribute("disabled");
                    }

                    contentControls.forEach((control) => {
                      const labelText = control["Tag"].replace(/([a-z])([A-Z])/g, "$1 $2");

                      if (control.Type === "input") {
                        const group = document.createElement("div");
                        group.className = "${styles["field-group"]}";
                        const label = document.createElement("label");
                        label.className = "${styles["field-label"]}";
                        label.textContent = labelText;
                        group.appendChild(label);
                        const input = document.createElement("input");
                        input.id = control["InternalId"];
                        input.value = control["Value"] || "";
                        input.className = "${styles["field-input"]}";
                        group.appendChild(input);
                        container.appendChild(group);
                      } else if (control.Type === "radio") {
                        const group = document.createElement("div");
                        group.className = "${styles["field-group"]}";
                        const label = document.createElement("label");
                        label.className = "${styles["field-label"]}";
                        label.textContent = labelText;
                        group.appendChild(label);
                        const radios = document.createElement("div");
                        radios.className = "${styles["radio-group"]}";
                        control["Value"].forEach((option) => {
                          const wrapper = document.createElement("label");
                          wrapper.className = "${styles["radio-label"]}";
                          const radio = document.createElement("input");
                          radio.type = "radio";
                          radio.id = option["InternalId"];
                          radio.checked = option["checked"] === true;
                          radio.name = control["Tag"];
                          radio.className = "${styles["radio-input"]}";
                          wrapper.appendChild(radio);
                          const span = document.createElement("span");
                          span.textContent = option["Tag"].replace(/([a-z])([A-Z])/g, "$1 $2");
                          wrapper.appendChild(span);
                          radios.appendChild(wrapper);
                        });
                        group.appendChild(radios);
                        container.appendChild(group);
                      }
                    });

                    document.querySelectorAll(".${styles["field-input"]}").forEach((input) => {
                      input.addEventListener("keyup", updateContent);
                    });
                    document.querySelectorAll(".${styles["radio-input"]}").forEach((radio) => {
                      radio.addEventListener("change", updateContent);
                    });
                  };

                  const updateContent = (e) => {
                    const { id } = e.target;
                    const value = e.target.classList.contains("${styles["radio-input"]}") ? true : e.target.value;
                    settingFormIds.set(id, (settingFormIds.get(id) || 0) + 1);
                    connector.executeMethod("SetFormValue", [id, value], () => {
                      settingFormIds.set(id, settingFormIds.get(id) - 1);
                    });
                  };

                  const onChangeContentControl = (e) => {
                    if (settingFormIds.get(e["InternalId"])) return;
                    const element = document.getElementById(e["InternalId"]);
                    if (element.classList.contains("${styles["radio-input"]}")) {
                      element.checked = !!e["FormValue"];
                    } else {
                      element.value = e["FormValue"] || "";
                    }
                  };

                  const preparingArrayContentControls = (data) => {
                    const filtered = data.filter((el) => el["Tag"] !== "");

                    const groups = filtered
                      .filter((c) => c["Type"] === "radio")
                      .reduce((acc, c) => {
                        acc[c["GroupKey"]] = acc[c["GroupKey"]] || [];
                        acc[c["GroupKey"]].push({
                          Tag: c["Tag"],
                          checked: c["Value"],
                          InternalId: c["InternalId"],
                        });
                        return acc;
                      }, {});

                    const result = [];
                    const seen = new Set();
                    for (const item of filtered) {
                      if (item["GroupKey"] && groups[item["GroupKey"]]) {
                        if (!seen.has(item["GroupKey"])) {
                          seen.add(item["GroupKey"]);
                          result.push({
                            ...item,
                            Tag: item["GroupKey"],
                            Value: groups[item["GroupKey"]],
                          });
                        }
                      } else {
                        result.push(item);
                      }
                    }
                    return result;
                  };
                `,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FormExternalToolbar;
