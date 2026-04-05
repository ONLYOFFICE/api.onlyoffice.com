import { OnlyofficeEditor } from "@site/src/components/BrowserWindow";
import styles from "./styles.module.css";

const ContentControlsExternalToolbar: React.FC = () => {
  return (
    <>
      <div className={styles["demo-section"]}>
        <div className={styles["demo-label"]}>LIVE DEMO</div>
        <div className={styles["demo-layout"]}>
          <div className={styles["panel"]}>
            <div className={styles["panel-header"]}>
              <span className={styles["panel-title"]}>CONTENT CONTROLS</span>
              <span id="ccCount" className={styles["panel-count"]}>0</span>
            </div>
            <div className={styles["panel-body"]}>
              <div className={styles["type-list"]}>
                <button data-type="block" className={`${styles["type-badge"]} ${styles["type-text"]}`}>Plain text/Rich text</button>
                <button data-type="datePicker" className={`${styles["type-badge"]} ${styles["type-date"]}`}>Date</button>
                <button data-type="picture" className={`${styles["type-badge"]} ${styles["type-picture"]}`}>Picture</button>
                <button data-type="comboBox" className={`${styles["type-badge"]} ${styles["type-combo"]}`}>Combobox/Dropdown list</button>
                <button data-type="checkBox" className={`${styles["type-badge"]} ${styles["type-checkbox"]}`}>Checkbox</button>
              </div>
              <div id="ccDetails" className={styles["cc-details"]} style={{ display: "none" }}>
                <div className={styles["details-grid"]}>
                  <div className={styles["props-section"]}>
                    <div className={styles["prop-row"]}>
                      <span className={styles["prop-label"]}>Id</span>
                      <input id="ccId" className={styles["prop-input"]} />
                    </div>
                    <div className={styles["prop-row"]}>
                      <span className={styles["prop-label"]}>Tag</span>
                      <input id="ccTag" className={styles["prop-input"]} />
                    </div>
                    <div className={styles["prop-row"]}>
                      <span className={styles["prop-label"]}>Lock</span>
                      <select id="ccLock" className={styles["prop-select"]}>
                        <option value="unlocked">unlocked</option>
                        <option value="contentLocked">contentLocked</option>
                        <option value="sdtContentLocked">sdtContentLocked</option>
                        <option value="sdtLocked">sdtLocked</option>
                      </select>
                    </div>
                    <div className={styles["prop-row"]}>
                      <span className={styles["prop-label"]}>Appearance</span>
                      <select id="ccAppearance" className={styles["prop-select"]}>
                        <option value="boundingBox">boundingBox</option>
                        <option value="hidden">hidden</option>
                      </select>
                    </div>
                    <div className={styles["prop-row"]}>
                      <span className={styles["prop-label"]}>Colors</span>
                      <span className={styles["color-group"]}>
                        <span className={styles["color-item"]}>
                          <span id="ccBgColor" className={styles["color-swatch"]} data-target="bg" />
                          <span className={styles["color-hint"]}>BG</span>
                        </span>
                        <span className={styles["color-item"]}>
                          <span id="ccBorderColor" className={styles["color-swatch"]} data-target="border" />
                          <span className={styles["color-hint"]}>Border</span>
                        </span>
                      </span>
                    </div>
                    <input id="ccColorInput" type="color" className={styles["color-picker-hidden"]} defaultValue="#DCDCDC" />
                  </div>
                  <button id="ccApply" className={`${styles.btn} ${styles["btn-apply"]}`}>Apply changes</button>
                  <pre id="ccJson" className={styles["json-preview"]} />
                </div>
              </div>
              <div id="ccEmpty" className={styles["empty-state"]}>
                Click a type above to add it, then click a content control in the editor to inspect it.
              </div>
            </div>
            <div className={styles["panel-actions"]}>
              <button id="ccRemove" className={`${styles.btn} ${styles.disabled}`}>Remove</button>
            </div>
          </div>
          <div className={styles["editor-column"]}>
            <OnlyofficeEditor
              fileType={"docx"}
              code={""}
              height="100%"
              config={{ editorConfig: { customization: { compactToolbar: true } } }}
              externalScript={{
                beforeDocumentReady: `
                  let allControls = [];
                  let selectedId = null;
                  let currentProps = null;
                `,
                onDocumentReady: `
                  connector.executeMethod("GetAllContentControls", null, (data) => {
                    allControls = data;
                    document.getElementById("ccCount").textContent = data.length;
                  });

                  connector.attachEvent("onFocusContentControl", (control) => {
                    if (control && control["InternalId"]) {
                      selectedId = control["InternalId"];
                      loadProperties();
                    }
                  });

                  connector.attachEvent("onBlurContentControl", () => {
                    selectedId = null;
                    currentProps = null;
                    document.getElementById("ccDetails").style.display = "none";
                    document.getElementById("ccEmpty").style.display = "block";
                    document.getElementById("ccRemove").classList.add("${styles.disabled}");
                  });
                `,
                otherFunctional: `
                  const loadProperties = () => {
                    if (!selectedId) return;
                    connector.executeMethod("GetCurrentContentControlPr", ["none"], (props) => {
                      if (!props) return;
                      currentProps = props;
                      document.getElementById("ccDetails").style.display = "block";
                      document.getElementById("ccEmpty").style.display = "none";
                      document.getElementById("ccRemove").classList.remove("${styles.disabled}");

                      document.getElementById("ccId").value = props["Id"] || "";
                      document.getElementById("ccTag").value = props["Tag"] || "";
                      const lockMap = { 0: "contentLocked", 1: "sdtContentLocked", 2: "sdtLocked", 3: "unlocked" };
                      document.getElementById("ccLock").value = lockMap[props["Lock"]] || "unlocked";
                      document.getElementById("ccAppearance").value = props["Appearance"] === 2 ? "hidden" : "boundingBox";

                      const toHex = (c) => c
                        ? "#" + [c["R"]||0, c["G"]||0, c["B"]||0].map((v) => v.toString(16).padStart(2, "0")).join("")
                        : "#DCDCDC";

                      const bgSwatch = document.getElementById("ccBgColor");
                      bgSwatch.style.backgroundColor = toHex(props["BackgroundColor"]);
                      bgSwatch.dataset.hex = toHex(props["BackgroundColor"]);
                      bgSwatch.style.display = "inline-block";

                      const borderSwatch = document.getElementById("ccBorderColor");
                      borderSwatch.style.backgroundColor = toHex(props["Color"]);
                      borderSwatch.dataset.hex = toHex(props["Color"]);
                      borderSwatch.style.display = "inline-block";

                      document.getElementById("ccJson").textContent = JSON.stringify({ commonPr: props }, null, 2);
                    });
                  };

                  const refreshCount = () => {
                    connector.executeMethod("GetAllContentControls", null, (data) => {
                      allControls = data;
                      document.getElementById("ccCount").textContent = data.length;
                    });
                  };

                  const addByType = (type) => {
                    const commonPr = { Lock: 0 };
                    switch (type) {
                      case "block":
                        connector.executeMethod("AddContentControl", [1, commonPr], refreshCount);
                        break;
                      case "datePicker":
                        connector.executeMethod("AddContentControlDatePicker", [
                          { DateFormat: "DD MMMM YYYY", Date: new Date().toISOString() },
                          commonPr
                        ], refreshCount);
                        break;
                      case "picture":
                        connector.executeMethod("AddContentControlPicture", [commonPr], refreshCount);
                        break;
                      case "comboBox":
                        connector.executeMethod("AddContentControlList", [1,
                          [{ Display: "Option 1", Value: "1" }, { Display: "Option 2", Value: "2" }],
                          commonPr
                        ], refreshCount);
                        break;
                      case "checkBox":
                        connector.executeMethod("AddContentControlCheckBox", [
                          { Checked: false },
                          commonPr
                        ], refreshCount);
                        break;
                    }
                  };

                  document.querySelectorAll(".${styles["type-badge"]}").forEach((badge) => {
                    badge.addEventListener("click", () => {
                      addByType(badge.dataset.type);
                    });
                  });

                  let activeColorTarget = null;

                  document.querySelectorAll(".${styles["color-swatch"]}").forEach((swatch) => {
                    swatch.addEventListener("click", () => {
                      activeColorTarget = swatch;
                      const input = document.getElementById("ccColorInput");
                      input.value = swatch.dataset.hex || "#DCDCDC";
                      input.click();
                    });
                  });

                  document.getElementById("ccColorInput").addEventListener("input", (e) => {
                    if (activeColorTarget) {
                      activeColorTarget.style.backgroundColor = e.target.value;
                      activeColorTarget.dataset.hex = e.target.value;
                    }
                  });

                  document.getElementById("ccApply").addEventListener("click", () => {
                    if (!selectedId || !currentProps) return;
                    const parseHex = (hex) => ({
                      r: parseInt(hex.slice(1, 3), 16),
                      g: parseInt(hex.slice(3, 5), 16),
                      b: parseInt(hex.slice(5, 7), 16),
                    });
                    const bg = parseHex(document.getElementById("ccBgColor").dataset.hex || "#DCDCDC");
                    const border = parseHex(document.getElementById("ccBorderColor").dataset.hex || "#DCDCDC");

                    const id = document.getElementById("ccId").value;
                    const tag = document.getElementById("ccTag").value;
                    const lock = document.getElementById("ccLock").value;
                    const appearance = document.getElementById("ccAppearance").value;
                    const internalId = selectedId;

                    Asc.scope.ccProps = { internalId, id, tag, lock, appearance, bg, border };
                    connector.callCommand(() => {
                      const p = Asc.scope.ccProps;
                      const doc = Api.GetDocument();
                      const controls = doc.GetAllContentControls();
                      for (let i = 0; i < controls.length; i++) {
                        const cc = controls[i];
                        if (cc.GetInternalId() === p.internalId) {
                          cc.SetId(p.id);
                          cc.SetTag(p.tag);
                          cc.SetLock(p.lock);
                          cc.SetAppearance(p.appearance);
                          cc.SetBackgroundColor(Api.RGBA(p.bg.r, p.bg.g, p.bg.b, 255));
                          cc.SetBorderColor(Api.RGBA(p.border.r, p.border.g, p.border.b, 255));
                          break;
                        }
                      }
                    }, () => {
                      loadProperties();
                    });
                  });

                  document.getElementById("ccRemove").addEventListener("click", (e) => {
                    if (e.currentTarget.classList.contains("${styles.disabled}")) return;
                    if (!selectedId) return;
                    connector.executeMethod("RemoveContentControl", [selectedId], () => {
                      selectedId = null;
                      currentProps = null;
                      refreshCount();
                      document.getElementById("ccDetails").style.display = "none";
                      document.getElementById("ccEmpty").style.display = "block";
                      document.getElementById("ccRemove").classList.add("${styles.disabled}");
                    });
                  });
                `,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentControlsExternalToolbar;
