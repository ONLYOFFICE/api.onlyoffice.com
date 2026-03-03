# Create PDF form template

This example creates a new fillable PDF and inserts form fields (FormKey) using the [executeInEditor](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#executeineditor) method.

Complete source code on GitHub: [JavaScript](https://github.com/ONLYOFFICE/docspace-samples/blob/master/js-sdk/advanced-samples/create-pdf-form-template.html)

## Before you start

Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](/docspace/javascript-sdk/get-started/get-started.md#step-1-specifying-the-docspace-url) of your server's root directory to the **Developer Tools** section of DocSpace.

<details>
  <summary>Full example</summary>

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <base href="{PORTAL_SRC}/" />
    <meta charset="UTF-8" />

    <meta name="example-title" content="Create PDF form template" />
    <meta
      name="example-description"
      content="Create a new fillable PDF form template, insert form fields (FormKey), and save using executeInEditor."
    />
    <meta name="example-group" content="advanced" />

    <title>Create PDF form template</title>
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>

    <script>
      (function () {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = new URL("../assets/css/style.css", window.location.href).toString();
        document.head.appendChild(link);
      })();
    </script>
  </head>

  <body class="ex-batch-fill-from-template-pdf">
    <div class="panel" style="margin-bottom: 12px;">
      <details open>
        <summary><b>How to use</b></summary>
        <ol class="muted" style="margin: 10px 0 0 18px; line-height: 1.5;">
          <li>Open the destination picker and select a folder.</li>
          <li>Click <b>Use selected folder</b>.</li>
          <li>Set <b>Template file name</b> (must end with <code>.pdf</code>).</li>
          <li>Define fields in JSON (each field gets a <b>FormKey</b>).</li>
          <li>Click <b>Create template</b>.</li>
        </ol>
        <div class="muted" style="margin-top: 8px;">
          This creates a new PDF and inserts ONLYOFFICE form fields (text, checkbox, date, picture) using editor commands.
        </div>
      </details>
    </div>

    <div class="wrap">
      <iframe id="ds-destination-picker" class="frame"></iframe>
    </div>

    <iframe id="ds-manager-frame" class="hidden-frame" title="Manager frame"></iframe>
    <iframe id="ds-hidden-editor" class="hidden-frame" title="Editor frame"></iframe>

    <div class="panel">
      <div class="row">
        <div class="kv">
          <div class="k">Destination folderId</div>
          <div class="v" id="destFolderId">None</div>
        </div>
          <div class="kv">
            <div class="k">Manager</div>
            <div class="v" id="managerState">Loading...</div>
          </div>
        </div>

      <div class="grid">
        <div>
          <label for="fileName">Template file name</label>
          <input id="fileName" type="text" value="New_Form_Template.pdf" autocomplete="off" />
          <div class="muted">Must end with <code>.pdf</code>.</div>
        </div>
        <div>
          <label>Actions</label>
          <div class="actions-row" style="margin-top: 6px;">
            <button id="useDest" type="button" class="btn-secondary">Use selected folder</button>
            <button id="create" type="button" disabled>Create template</button>
            <button id="toggleHidden" type="button" class="btn-secondary">Show editor</button>
          </div>
          <div class="hint" id="hint" style="margin-top: 10px;">Select a folder</div>
        </div>
      </div>

      <label for="fields">Fields (JSON array)</label>
      <textarea id="fields" placeholder='[{"type":"text","label":"First name","key":"FirstName"}]'></textarea>
      <div class="muted" style="margin-top: 8px;">
        Supported types: <code>text</code>, <code>checkbox</code>, <code>date</code>, <code>picture</code>.
        Each field should have <code>key</code> (this becomes <b>FormKey</b>).
      </div>

      <div class="box" style="margin-top: 12px;">
        <h3>Log</h3>
        <textarea id="log" readonly placeholder="Progress log..."></textarea>
      </div>
    </div>

    <script>
      const destFolderIdEl = document.getElementById("destFolderId");
      const managerStateEl = document.getElementById("managerState");
      const fileNameEl = document.getElementById("fileName");
      const fieldsEl = document.getElementById("fields");
      const useDestBtn = document.getElementById("useDest");
      const createBtn = document.getElementById("create");
      const toggleHiddenBtn = document.getElementById("toggleHidden");
      const hintEl = document.getElementById("hint");
      const logEl = document.getElementById("log");
      const hiddenFrame = document.getElementById("ds-hidden-editor");

      let manager = null;
      let picker = null;
      let editorInstance = null;
      let managerReady = false;
      let destFolderId = "";
      let hiddenVisible = false;

      function setHint(v) {
        hintEl.textContent = String(v ?? "");
      }

      function logLine(v) {
        const line = String(v ?? "");
        logEl.value = (logEl.value ? logEl.value + "\n" : "") + line;
        logEl.scrollTop = logEl.scrollHeight;
      }

      function destroyEditor() {
        if (editorInstance && typeof editorInstance.destroyFrame === "function") {
          try {
            editorInstance.destroyFrame();
          } catch {}
        }
        editorInstance = null;
      }

      function updateUi() {
        destFolderIdEl.textContent = destFolderId || "None";
        createBtn.disabled = !managerReady || !destFolderId || !String(fileNameEl.value || "").trim().toLowerCase().endsWith(".pdf");
      }

      function getCreatedFileId(res) {
        const id = res?.id ?? res?.fileId ?? res?.entryId ?? res?.documentId ?? "";
        return id ? String(id).trim() : "";
      }

      function parseFields() {
        const raw = String(fieldsEl.value || "").trim();
        if (!raw) return [];
        const v = JSON.parse(raw);
        if (!Array.isArray(v)) throw new Error("Fields must be a JSON array");
        return v;
      }

      function buildCreatePdfFormCommand(fields) {
        const payload = JSON.stringify(fields || []);

        return new Function(
          "editorInstance",
          `
            try {
              const connector = editorInstance?.createConnector?.();
              if (!connector?.callCommand) {
                console.error("connector.callCommand is not available", connector);
                return;
              }

              Asc.scope.fields = ${payload};

              connector.callCommand(function () {
                try {
                  const doc = Api.GetDocument && Api.GetDocument();
                  if (!doc) {
                    console.error("Api.GetDocument is not available");
                    return;
                  }

                  const fields = Asc.scope.fields || [];

                  function addLabel(p, text) {
                    if (text) p.AddText(String(text) + " ");
                  }

                  for (let i = 0; i < fields.length; i += 1) {
                    const f = fields[i] || {};
                    const type = String(f.type || "text");
                    const key = String(f.key || "").trim();
                    const label = String(f.label || "").trim();
                    const placeholder = String(f.placeholder || "").trim();
                    const required = !!f.required;

                    if (!key) {
                      console.warn("Skip field without key", f);
                      continue;
                    }

                    const p = Api.CreateParagraph();
                    addLabel(p, label);

                    let form = null;
                    if (type === "checkbox") {
                      form = Api.CreateCheckBoxForm({ key, required: required || false, radio: false, tip: placeholder || "" });
                    } else if (type === "date") {
                      form = Api.CreateDateForm({ key, required: required || false, placeholder: placeholder || "" });
                    } else if (type === "picture") {
                      form = Api.CreatePictureForm({ key, required: required || false, placeholder: placeholder || "" });
                    } else {
                      form = Api.CreateTextForm({
                        key,
                        required: required || false,
                        placeholder: placeholder || "",
                        comb: !!f.comb,
                        maxCharacters: f.maxCharacters ? Number(f.maxCharacters) : undefined,
                        multiLine: !!f.multiLine,
                        autoFit: true
                      });
                    }

                    if (form && p && typeof p.AddElement === "function") p.AddElement(form);
                    doc.Push(p);
                  }

                  Api.Save();
                } catch (e) {
                  console.error("Failed to build PDF form", e);
                }
              });
            } catch (e) {
              console.error("Failed to build command", e);
            }
          `
        );
      }

      async function openHiddenEditorAndRun(fileId, fields) {
        return new Promise((resolve, reject) => {
          destroyEditor();

          editorInstance = DocSpace.SDK.initEditor({
            id: String(fileId),
            frameId: "ds-hidden-editor",
            width: "1px",
            height: "1px",
            theme: "base",
            events: {
              onAppReady: () => {
                const frame = DocSpace?.SDK?.frames?.["ds-hidden-editor"];
                if (!frame || typeof frame.executeInEditor !== "function") {
                  reject(new Error("executeInEditor not available"));
                  destroyEditor();
                  return;
                }

                try {
                  frame.executeInEditor(buildCreatePdfFormCommand(fields));
                } catch (e) {
                  reject(e);
                  destroyEditor();
                  return;
                }

                setTimeout(() => {
                  destroyEditor();
                  resolve();
                }, 7000);
              },
              onAppError: (e) => {
                destroyEditor();
                reject(e || new Error("Editor error"));
              }
            }
          });
        });
      }

      function toggleEditorVisibility() {
        hiddenVisible = !hiddenVisible;
        if (hiddenVisible) {
          hiddenFrame.classList.remove("hidden-frame");
          hiddenFrame.classList.add("visible-hidden-frame");
          toggleHiddenBtn.textContent = "Hide editor";
        } else {
          hiddenFrame.classList.remove("visible-hidden-frame");
          hiddenFrame.classList.add("hidden-frame");
          toggleHiddenBtn.textContent = "Show editor";
        }
      }

      function initHiddenManager() {
        managerReady = false;
        managerStateEl.textContent = "Loading...";

        manager = DocSpace.SDK.initManager({
          frameId: "ds-manager-frame",
          width: "0",
          height: "0",
          theme: "base",
          events: {
            onAppReady: () => {
              managerReady = true;
              managerStateEl.textContent = "Ready";
              updateUi();
            },
            onAppError: (e) => {
              console.error("Manager error", e);
              managerReady = false;
              managerStateEl.textContent = "Error";
              setHint("Manager error");
              updateUi();
            }
          }
        });
      }

      function initDestinationPicker() {
        picker = DocSpace.SDK.initManager({
          frameId: "ds-destination-picker",
          width: "900px",
          height: "520px",
          theme: "base",
          selectorType: "folder"
        });
      }

      useDestBtn.onclick = async () => {
        if (!picker || typeof picker.getSelection !== "function") return;
        try {
          const sel = await picker.getSelection();
          const item = Array.isArray(sel) ? sel[0] : sel;
          const id = item?.folderId ?? item?.id ?? null;
          if (!id) throw new Error("No folder selected");
          destFolderId = String(id);
          setHint("Destination selected");
          updateUi();
        } catch (e) {
          setHint("Select a folder in the picker");
        }
      };

      fileNameEl.addEventListener("input", updateUi);

      createBtn.onclick = async () => {
        logLine("---");
        logLine("Run: " + new Date().toISOString());

        const fileName = String(fileNameEl.value || "").trim();
        if (!fileName.toLowerCase().endsWith(".pdf")) {
          setHint("File name must end with .pdf");
          return;
        }
        if (!destFolderId) {
          setHint("Select destination folder");
          return;
        }

        let fields = [];
        try {
          fields = parseFields();
        } catch (e) {
          setHint("Invalid JSON");
          logLine("ERROR: " + String(e?.message || e));
          return;
        }

        setHint("Creating .pdf...");
        createBtn.disabled = true;
        try {
          const res = await manager.createFile(String(destFolderId), fileName);
          const createdId = getCreatedFileId(res);
          if (!createdId) throw new Error("Created file id not found in response");
          logLine("Created: " + fileName + " (" + createdId + ")");

          setHint("Inserting fields...");
          await openHiddenEditorAndRun(createdId, fields);
          logLine("OK");
          setHint("Done");
        } catch (e) {
          console.error(e);
          logLine("ERROR: " + String(e?.message || e));
          setHint("Error");
        } finally {
          updateUi();
        }
      };

      toggleHiddenBtn.onclick = toggleEditorVisibility;

      fieldsEl.value = JSON.stringify(
        [
          { type: "text", label: "First name", key: "FirstName", placeholder: "Enter first name", required: true },
          { type: "text", label: "Last name", key: "LastName", placeholder: "Enter last name", required: true },
          { type: "checkbox", label: "Agree", key: "Agree" },
          { type: "date", label: "Birth date", key: "BirthDate", placeholder: "YYYY-MM-DD" }
        ],
        null,
        2
      );

      initHiddenManager();
      initDestinationPicker();
      updateUi();
    </script>
  </body>
</html>
```

</details>

## Script execution steps

### 1. Set HTML structure

Create an HTML file. It must include:

- a folder selector iframe;
- a hidden manager iframe (for creating the file);
- a hidden editor iframe (for inserting fields);
- a JSON textarea with the fields.

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <script src="{PORTAL_SRC}/static/scripts/sdk/2.1.0/api.js"></script>
  </head>
  <body>
    <iframe id="ds-destination-picker"></iframe>
    <iframe id="ds-manager-frame"></iframe>
    <iframe id="ds-hidden-editor"></iframe>
  </body>
</html>
```

:::info
The API JavaScript file can normally be found in the following DocSpace folder: **\{PORTAL_SRC\}/static/scripts/sdk/2.1.0/api.js** where **\{PORTAL_SRC\}** is the name of the server with the ONLYOFFICE DocSpace installed.
:::

### 2. Initialize Manager and folder picker

Add a script to initialize the [Manager](/docspace/javascript-sdk/usage-sdk/classes/SDK.md#initmanager) and the folder picker using **Manager** with `selectorType: "folder"`.

1. Initialize the hidden **Manager** (for file creation):

    ``` ts
    manager = DocSpace.SDK.initManager({
      frameId: "ds-manager-frame",
      width: "0",
      height: "0",
      events: {
        onAppReady: () => {
          managerReady = true
        },
      },
    })
    ```

2. Initialize the destination picker:

    ``` ts
    picker = DocSpace.SDK.initManager({
      frameId: "ds-destination-picker",
      width: "900px",
      height: "520px",
      selectorType: "folder",
    })
    ```

### 3. Create a blank PDF

Create a new PDF file in the selected folder using [createFile](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#createfile):

``` ts
const res = await manager.createFile(destFolderId, fileName)
const createdId = res?.id ?? res?.fileId
```

### 4. Insert fields using executeInEditor

Open the created PDF in the editor and insert fields based on the JSON array using [executeInEditor](/docspace/javascript-sdk/usage-sdk/classes/SDKInstance.md#executeineditor):

``` ts
await openHiddenEditorAndRun(createdId, fields)
```

### 5. Run the sample

Run the HTML file and make sure everything works.

